import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background-color: #000;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        z-index: 9999;
    `,
    Name: styled.h3`
        height: 100%;

        a {
            border: 1px solid #000;
            display: block;
            height: 100%;
            color: #fff;
            text-decoration: none;
            display: flex;
            align-items: center;
            padding: 15px;
        }
    `,
    NavlinksBreadcrumbs: styled.div`
        /* border: 1px solid #f00; */
        height: 100%;
        display: flex;
        align-items: center;
    `,
    NavlinksWrapper: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;

        a {
            padding: 15px;
            text-decoration: none;
            color: #666;

            &.active {
                color: #fff;
            }

            &:hover {
                color: #fff;
            }
        }
    `,
    BreadcrumbsWrapper: styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        cursor: pointer;

        &:hover {
            .breadcrumbsIcon {
                color: #fff;
            }
        }
    `,

    TopNavbarWrapper: styled.div`
        position: fixed;
        top: 60px;
        left: 0;
        width: 100%;
        padding: 15px;
        background-color: #123;
        display: flex;
        gap: 15px;
        align-items: center;
        justify-content: center;
        opacity: 0;
        animation: animateTopNavbar 0.2s ease forwards;

        @keyframes animateTopNavbar {
            0% {
                opacity: 0;
                transform: translateY(100px);
            }
            100% {
                opacity: 1;
                transform: translateY(0);
            }
        }

        a {
            padding: 5px 20px;
            color: #aaa;
            text-decoration: none;

            &:hover {
                color: #fff;
                text-decoration: underline;
            }
        }
    `,
};
