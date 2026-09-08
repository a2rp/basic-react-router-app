import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavigationLink = styled(NavLink)`
    padding: 9px 13px;
    border-radius: 9px;
    color: #aebed1;
    font-size: 0.92rem;
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.18s ease, color 0.18s ease;

    &:hover,
    &.active {
        background: #132d46;
        color: #ffffff;
    }
`;

export const Styled = {
    Header: styled.header`
        position: fixed;
        inset: 0 0 auto;
        z-index: 50;
        border-bottom: 1px solid rgba(122, 175, 219, 0.18);
        background: rgba(7, 17, 31, 0.86);
        backdrop-filter: blur(16px);
    `,

    Inner: styled.div`
        width: min(1120px, calc(100% - 40px));
        min-height: 72px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media (max-width: 640px) {
            width: min(100% - 32px, 1120px);
            min-height: 64px;
        }
    `,

    Brand: styled(NavLink)`
        display: inline-flex;
        align-items: center;
        gap: 10px;
        color: #f7fbff;
        font-weight: 700;
        text-decoration: none;
    `,

    BrandMark: styled.span`
        width: 34px;
        height: 34px;
        display: grid;
        place-items: center;
        border: 1px solid #3d85bc;
        border-radius: 10px;
        background: linear-gradient(145deg, #173c5b, #0c1d30);
        color: #8dd1ff;
        font-size: 0.78rem;
        letter-spacing: 0.04em;
    `,

    DesktopNav: styled.nav`
        display: flex;
        align-items: center;
        gap: 6px;

        @media (max-width: 720px) {
            display: none;
        }
    `,

    NavigationLink,

    MenuButton: styled.button`
        width: 40px;
        height: 40px;
        display: none;
        place-items: center;
        border: 1px solid #285173;
        border-radius: 10px;
        background: #10253a;
        color: #e7edf7;

        @media (max-width: 720px) {
            display: grid;
        }
    `,

    MobileLayer: styled.div`
        position: fixed;
        inset: 64px 0 0;
        z-index: 60;
    `,

    Backdrop: styled.button`
        position: absolute;
        inset: 0;
        width: 100%;
        border: 0;
        background: rgba(0, 0, 0, 0.55);
    `,

    MobileNav: styled.nav`
        position: relative;
        width: min(360px, calc(100% - 32px));
        margin: 16px auto;
        padding: 16px;
        display: grid;
        gap: 6px;
        border: 1px solid #285173;
        border-radius: 16px;
        background: #0d2033;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);

        ${NavigationLink} {
            padding: 12px;
        }
    `,

    MenuLabel: styled.p`
        margin: 0 0 6px;
        color: #7dc4ff;
        font-size: 0.72rem;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
    `,
};
