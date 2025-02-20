import React from "react";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container skills-container">
                <h2 className="section-title">Skills <span>Snapshot</span></h2>

                <ul className="skills-grid">
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg" alt="html" />
                        <p>HTML</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" alt="javascript" />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="reactjs" />
                        <p>Reactjs</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/wordpress/wordpress-plain.svg" alt="wordpress" />
                        <p>Wordpress</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/woocommerce/woocommerce-plain.svg" alt="woocommerce" />
                        <p>WooCommerce</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="shopify" />
                        <p>Shopify</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain.svg" alt="css" />
                        <p>CSS</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" alt="sass" />
                        <p>SASS</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="tailwind" />
                        <p>Tailwind</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg" alt="mui" />
                        <p>Mui</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactbootstrap/reactbootstrap-original.svg" alt="react bootstrap" />
                        <p>React Bootstrap</p>
                    </li>
                    <li className="flex">
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github" />
                        <p>GitHub</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;