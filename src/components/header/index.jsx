import { useEffect, useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { Styled } from "./styled";

const navigationItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Contact", to: "/contact" },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
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

    return (
        <Styled.Header>
            <Styled.Inner>
                <Styled.Brand to="/" aria-label="Basic React Router App home">
                    <Styled.BrandMark>AR</Styled.BrandMark>
                    <span>React Router</span>
                </Styled.Brand>

                <Styled.DesktopNav aria-label="Primary navigation">
                    {navigationItems.map((item) => (
                        <Styled.NavigationLink key={item.to} to={item.to} end={item.to === "/"}>
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
