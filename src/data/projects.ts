import type { StaticImageData } from "next/image";

import vestedImage from "../assets/images/projects/vested-new.png";
import triyockImage from "../assets/images/projects/triyock.png";
import classMateImage from "../assets/images/projects/classmate.png";
import slowBazaarImage from "../assets/images/projects/slowbazaar.png";
import havenPharmacyImage from "../assets/images/projects/haven-pharmacy.png";
import bluesBreakerBoxImage from "../assets/images/projects/blues-breaker-box.png";
import barpaImage from "../assets/images/projects/barpa.png";
import barbotImage from "../assets/images/projects/barbot.png";
import amdellImage from "../assets/images/projects/amdell.png";
import lancerImage from "../assets/images/projects/lancer-new.png";
import tomGavinImage from "../assets/images/projects/tom-gavin.png";
import luxuryExchangeImage from "../assets/images/projects/luxury-exchange.png";
import nationalPharmacyImage from "../assets/images/projects/national-pharmacy.png";
import scoilImage from "../assets/images/projects/scoil.png";
import gamePlanImage from "../assets/images/projects/gameplan.png";

export type Project = {
  id: number;
  slug: string;
  name: string;
  platform: "WordPress" | "Shopify" | "React" | "HTML";
  description: string;
  technologies: string[];
  image: StaticImageData;
};

export const projects: Project[] = [
  { id: 1, slug: "vested-finance", name: "Vested Finance", platform: "WordPress", description: "Financial platform frontend with a focus on information clarity, responsive behavior and polished implementation.", technologies: ["WordPress", "JavaScript", "CSS"], image: vestedImage },
  { id: 2, slug: "triyock-bpo", name: "Triyock BPO", platform: "HTML", description: "A responsive marketing interface built with a clear content hierarchy and lightweight frontend implementation.", technologies: ["HTML", "JavaScript", "CSS"], image: triyockImage },
  { id: 3, slug: "classmate", name: "ClassMate", platform: "React", description: "React interface built around reusable UI and a straightforward application experience.", technologies: ["React", "Tailwind"], image: classMateImage },
  { id: 4, slug: "slowbazaar", name: "SlowBazaar", platform: "Shopify", description: "Shopify storefront work combining commerce requirements with custom frontend interactions.", technologies: ["Shopify", "JavaScript", "CSS"], image: slowBazaarImage },
  { id: 5, slug: "haven-pharmacy-burkes", name: "Haven Pharmacy Burkes", platform: "WordPress", description: "Content and commerce frontend work for a pharmacy storefront with WooCommerce integration.", technologies: ["WordPress", "WooCommerce", "JavaScript", "CSS"], image: havenPharmacyImage },
  { id: 6, slug: "blues-breaker-box", name: "Blues Breaker Box", platform: "HTML", description: "A responsive frontend implementation focused on structured content and dependable browser behavior.", technologies: ["HTML", "JavaScript", "CSS"], image: bluesBreakerBoxImage },
  { id: 7, slug: "barpa", name: "Barpa", platform: "WordPress", description: "WordPress and WooCommerce frontend work with custom styling and interaction details.", technologies: ["WordPress", "WooCommerce", "JavaScript", "CSS"], image: barpaImage },
  { id: 8, slug: "barbot", name: "Barbot", platform: "WordPress", description: "Commerce-focused WordPress implementation combining WooCommerce with custom frontend behavior.", technologies: ["WordPress", "WooCommerce", "JavaScript", "CSS"], image: barbotImage },
  { id: 9, slug: "amdell", name: "Amdell", platform: "WordPress", description: "Content-driven WordPress frontend with attention to responsive layout and visual consistency.", technologies: ["WordPress", "JavaScript", "CSS"], image: amdellImage },
  { id: 10, slug: "lancer", name: "Lancer", platform: "React", description: "React-based interface with a lighter product feel and component-driven frontend structure.", technologies: ["React", "JavaScript", "Tailwind"], image: lancerImage },
  { id: 11, slug: "tom-gavin", name: "Tom Gavin", platform: "WordPress", description: "WordPress and WooCommerce frontend work shaped around content, commerce and responsive behavior.", technologies: ["WordPress", "WooCommerce", "JavaScript", "CSS"], image: tomGavinImage },
  { id: 12, slug: "luxury-exchange", name: "Luxury Exchange", platform: "Shopify", description: "Shopify frontend work combining storefront requirements with custom styling and interaction.", technologies: ["Shopify", "JavaScript", "CSS"], image: luxuryExchangeImage },
  { id: 13, slug: "national-pharmacy", name: "National Pharmacy", platform: "Shopify", description: "Shopify storefront implementation with a focus on clear content structure and responsive commerce UI.", technologies: ["Shopify", "JavaScript", "CSS"], image: nationalPharmacyImage },
  { id: 14, slug: "scoil-na-nog", name: "Scoil na nÓg", platform: "WordPress", description: "WordPress frontend implementation for a content-led website with responsive behavior.", technologies: ["WordPress", "JavaScript", "CSS"], image: scoilImage },
  { id: 15, slug: "gameplan", name: "GamePlan", platform: "WordPress", description: "WordPress frontend work focused on content hierarchy, responsive layout and custom styling.", technologies: ["WordPress", "JavaScript", "CSS"], image: gamePlanImage },
];

export const featuredProjects = projects.slice(0, 4);
