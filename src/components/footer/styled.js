import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        border-top: 1px solid #193550;
        background: rgba(4, 11, 20, 0.78);
    `,

    Inner: styled.div`
        width: min(1120px, calc(100% - 40px));
        min-height: 84px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 18px;

        @media (max-width: 640px) {
            width: min(100% - 32px, 1120px);
            padding: 20px 0;
            align-items: flex-start;
            flex-direction: column;
        }
    `,

    Copy: styled.div`
        display: flex;
        flex-wrap: wrap;
        gap: 8px 16px;
        color: #93a6bc;
        font-size: 0.82rem;

        a {
            color: #b9dfff;
            text-decoration: none;

            &:hover {
                color: #ffffff;
                text-decoration: underline;
            }
        }
    `,

    Links: styled.nav`
        display: flex;
        gap: 16px;

        a {
            color: #aebed1;
            font-size: 0.85rem;
            text-decoration: none;

            &:hover {
                color: #ffffff;
            }
        }
    `,
};
