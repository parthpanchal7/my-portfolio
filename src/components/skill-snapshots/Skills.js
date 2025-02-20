import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container skills-container">
                <h2 className="section-title">Skills <span>Snapshot</span></h2>

                <ul className="skills-grid">
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" />
                        <p>HTML</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        <p>Reactjs</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" />
                        <p>Wordpress</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-plain.svg" />
                        <p>WooCommerce</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                        <p>Shopify</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" />
                        <p>CSS</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
                        <p>SASS</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                        <p>Tailwind</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" />
                        <p>Mui</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" />
                        <p>React Bootstrap</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        <p>GitHub</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;