import { NavLink } from 'react-router-dom';
import { Styled } from './styled';
import { IoMenu } from "react-icons/io5";
import { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [isDropdownActive, setIsDropdownActive] = useState(false);
    const dropdownRef = useRef(null); // for outside click

    const handleBreadcrumbsClick = () => {
        setIsDropdownActive(prev => !prev);
    };

    // Outside click detection
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownActive(false);
            }
        };

        if (isDropdownActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isDropdownActive]);

    // Handle click on any dropdown link
    const handleDropdownLinkClick = () => {
        setIsDropdownActive(false);
    };

    return (
        <>
            <Styled.Wrapper>
                <Styled.Name>
                    <NavLink to="/">
                        Ashish Ranjan
                    </NavLink>
                </Styled.Name>

                <Styled.NavlinksBreadcrumbs>
                    <Styled.NavlinksWrapper>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/about">About</NavLink>
                        <NavLink to="/contact">Contact</NavLink>
                    </Styled.NavlinksWrapper>
                    <Styled.BreadcrumbsWrapper onClick={handleBreadcrumbsClick}>
                        <IoMenu size={20} className='breadcrumbsIcon' />
                    </Styled.BreadcrumbsWrapper>
                </Styled.NavlinksBreadcrumbs>
            </Styled.Wrapper>

            {isDropdownActive && (
                <Styled.TopNavbarWrapper ref={dropdownRef}>
                    <NavLink to="/" onClick={handleDropdownLinkClick}>Home</NavLink>
                    <NavLink to="/about" onClick={handleDropdownLinkClick}>About</NavLink>
                    <NavLink to="/contact" onClick={handleDropdownLinkClick}>Contact</NavLink>
                </Styled.TopNavbarWrapper>
            )}
        </>
    );
};

export default Header;
