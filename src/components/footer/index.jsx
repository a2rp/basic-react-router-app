import { createElement } from "react";
import {
    FaCodepen,
    FaEnvelope,
    FaFacebookF,
    FaGithub,
    FaGlobe,
    FaHeart,
    FaLinkedinIn,
    FaMugHot,
    FaPatreon,
    FaYoutube,
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { socialLinks, supportLinks } from "../../data/links";
import { Styled } from "./styled";

const icons = {
    portfolio: FaGlobe,
    github: FaGithub,
    codepen: FaCodepen,
    linkedin: FaLinkedinIn,
    facebook: FaFacebookF,
    youtube: FaYoutube,
    email: FaEnvelope,
    support: FaHeart,
    coffee: FaMugHot,
    patreon: FaPatreon,
};

const ExternalIconLink = ({ item }) => {
    const Icon = icons[item.icon];
    const isEmail = item.href.startsWith("mailto:");

    return (
        <a
            className="iconLink"
            href={item.href}
            target={isEmail ? undefined : "_blank"}
            rel={isEmail ? undefined : "noopener noreferrer"}
            aria-label={item.label}
            title={item.label}
        >
            {createElement(Icon, { "aria-hidden": "true" })}
        </a>
    );
};

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Styled.Footer>
            <Styled.Inner>
                <Styled.BrandLine>
                    <img
                        src={`${import.meta.env.BASE_URL}logo.png`}
                        alt="Basic React Router App logo"
                    />
                    <p>
                        Copyright &copy; {currentYear}{" "}
                        <a
                            href="https://www.ashishranjan.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Ashish Ranjan
                        </a>
                    </p>
                </Styled.BrandLine>

                <Styled.LinkGroups>
                    <div className="group" aria-label="Support links">
                        {supportLinks.map((item) => (
                            <ExternalIconLink key={item.href} item={item} />
                        ))}
                    </div>
                    <div className="group" aria-label="Social links">
                        {socialLinks.map((item) => (
                            <ExternalIconLink key={item.href} item={item} />
                        ))}
                        <NavLink className="textLink" to="/privacy-policy">
                            Privacy
                        </NavLink>
                        <NavLink className="textLink" to="/terms-of-service">
                            Terms
                        </NavLink>
                    </div>
                </Styled.LinkGroups>
            </Styled.Inner>
        </Styled.Footer>
    );
};

export default Footer;
