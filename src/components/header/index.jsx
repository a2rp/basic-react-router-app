import { createElement, useEffect, useState } from "react";
import { FiHome, FiInfo, FiMail } from "react-icons/fi";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

const navigationItems = [
    { label: "Home", to: "/", icon: FiHome },
    { label: "About", to: "/about", icon: FiInfo },
    { label: "Contact", to: "/contact", icon: FiMail },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const location = useLocation();

    // Close the mobile drawer after navigation and when the Escape key is pressed.
    useEffect(() => {
        setIsMenuOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        const closeOnEscape = (event) => {
            if (event.key === "Escape") {
                setIsMenuOpen(false);
            }
        };

        window.addEventListener("keydown", closeOnEscape);
        return () => window.removeEventListener("keydown", closeOnEscape);
    }, []);

    useEffect(() => {
        let previousScrollY = window.scrollY;
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= 0 || currentScrollY < previousScrollY);
            previousScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <Styled.Header className={isVisible ? "" : "hidden"}>
            <Styled.Inner>
                <Styled.Brand to="/" aria-label="Basic React Router App home">
                    <Styled.BrandMark>
                        <img
                            src={`${import.meta.env.BASE_URL}logo.png`}
                            alt="Ashish Ranjan logo"
                        />
                    </Styled.BrandMark>
                    <span>Basic React Router App</span>
                </Styled.Brand>

                <Styled.DesktopNav aria-label="Primary navigation">
                    {navigationItems.map((item) => (
                        <Styled.NavigationLink key={item.to} to={item.to} end={item.to === "/"}>
                            {createElement(item.icon, { "aria-hidden": "true" })}
                            {item.label}
                        </Styled.NavigationLink>
                    ))}
                </Styled.DesktopNav>

                <Styled.MenuButton
                    type="button"
                    aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setIsMenuOpen((previous) => !previous)}
                >
                    {isMenuOpen ? <IoClose size={24} /> : <IoMenu size={24} />}
                </Styled.MenuButton>
            </Styled.Inner>

            {isMenuOpen && (
                <Styled.MobileLayer>
                    <Styled.Backdrop
                        type="button"
                        aria-label="Close navigation menu"
                        onClick={() => setIsMenuOpen(false)}
                    />
                    <Styled.MobileNav id="mobile-navigation" aria-label="Mobile navigation">
                        <Styled.MenuLabel>Navigation</Styled.MenuLabel>
                        {navigationItems.map((item) => (
                            <Styled.NavigationLink
                                key={item.to}
                                to={item.to}
                                end={item.to === "/"}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {createElement(item.icon, { "aria-hidden": "true" })}
                                {item.label}
                            </Styled.NavigationLink>
                        ))}
                    </Styled.MobileNav>
                </Styled.MobileLayer>
            )}
        </Styled.Header>
    );
};

export default Header;
