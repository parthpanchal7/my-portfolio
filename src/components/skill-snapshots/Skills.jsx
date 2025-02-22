import React from "react";
import "./Skills.css";
import htmlIcon from "../../assets/images/icons/html.svg";
import jsIcon from "../../assets/images/icons/js.svg";
import reactIcon from "../../assets/images/icons/reactjs.svg";
import wordpressIcon from "../../assets/images/icons/wordpress.svg";
import wooIcon from "../../assets/images/icons/woocommerce.svg";
import shopifyIcon from "../../assets/images/icons/shopify.svg";
import cssIcon from "../../assets/images/icons/css.svg";
import sassIcon from "../../assets/images/icons/sass.svg";
import tailwindIcon from "../../assets/images/icons/tailwind.svg";
import muiIcon from "../../assets/images/icons/material-ui.svg";
import reactBootstrapIcon from "../../assets/images/icons/reactbootstrap.svg";
import gitIcon from "../../assets/images/icons/git.svg";

const Skills = () => {
    return (
        <section id="skills">
            <div className="container skills-container">
                <h2 className="section-title">Skills <span>Snapshot</span></h2>

                <ul className="skills-grid">
                    <li className="flex">
                        <img src={htmlIcon} alt="html" />
                        <p>HTML</p>
                    </li>
                    <li className="flex">
                        <img src={jsIcon} alt="javascript" />
                        <p>JavaScript</p>
                    </li>
                    <li className="flex">
                        <img src={reactIcon} alt="reactjs" />
                        <p>Reactjs</p>
                    </li>
                    <li className="flex">
                        <img src={wordpressIcon} alt="wordpress" />
                        <p>Wordpress</p>
                    </li>
                    <li className="flex">
                        <img src={wooIcon} alt="woocommerce" />
                        <p>WooCommerce</p>
                    </li>
                    <li className="flex">
                        <img src={shopifyIcon} alt="shopify" />
                        <p>Shopify</p>
                    </li>
                    <li className="flex">
                        <img src={cssIcon} alt="css" />
                       <p>CSS</p>
                    </li>
                    <li className="flex">
                        <img src={sassIcon} alt="sass" />
                        <p>SASS</p>
                    </li>
                    <li className="flex">
                        <img src={tailwindIcon} alt="tailwind" />
                        <p>Tailwind</p>
                    </li>
                    <li className="flex">
                        <img src={muiIcon} alt="mui" />
                        <p>Mui</p>
                    </li>
                    <li className="flex">
                        <img src={reactBootstrapIcon} alt="react bootstrap" />
                        <p>React Bootstrap</p>
                    </li>
                    <li className="flex">
                        <img src={gitIcon} alt="git" />
                        <p>Git</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Skills;