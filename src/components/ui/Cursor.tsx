"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef = useRef<HTMLSpanElement | null>(null);
  const target = useRef({ x: -100, y: -100 });
  const current = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor || window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    let frame = 0;
    const move = (event: MouseEvent) => {
      target.current.x = event.clientX;
      target.current.y = event.clientY;
    };
    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18;
      current.current.y += (target.current.y - current.current.y) * 0.18;
      cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      frame = requestAnimationFrame(tick);
    };
    const updateState = (element: Element | null) => {
      const heading = element?.closest("h1, h2, h3, h4, h5, h6");
      const link = element?.closest("a, button");
      cursor.classList.toggle("is-heading", !!heading);
      cursor.classList.toggle("is-link", !!link && !heading);
    };
    const enter = (event: MouseEvent) => updateState(event.target as Element | null);
    const leave = (event: MouseEvent) => updateState(event.relatedTarget as Element | null);

    document.addEventListener("mousemove", move);
    document.addEventListener("mouseover", enter);
    document.addEventListener("mouseout", leave);
    document.documentElement.classList.add("cursor-ready");
    frame = requestAnimationFrame(tick);

    return () => {
      document.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", enter);
      document.removeEventListener("mouseout", leave);
      cancelAnimationFrame(frame);
      document.documentElement.classList.remove("cursor-ready");
    };
  }, []);

  return <span ref={cursorRef} className="cursor-dot" aria-hidden="true" />;
}
