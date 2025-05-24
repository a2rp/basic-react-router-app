import styled from "styled-components";

export const Styled = {
    Wrapper: styled.footer`
        background-color: #000;
        padding: 15px;
        display: flex;
        gap: 30px;
        align-items: flex-start;
        justify-content: space-between;

        @media (width<700px) {
            padding: 15px;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
        }
    `,

    Copyright: styled.div`
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;

        a {
            color: #aaa;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    `,

    CopyrightYear: styled.div``,

    NameAllRightsReserved: styled.div``,

    Legal: styled.div`
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
        justify-content: center;

        a {
            white-space: nowrap;

            color: #aaa;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }
    `,
};
