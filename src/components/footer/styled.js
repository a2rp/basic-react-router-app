import styled from "styled-components";

export const Styled = {
    Footer: styled.footer`
        border-top: 1px solid rgba(122, 175, 219, 0.2);
        background: rgba(4, 11, 20, 0.86);
    `,

    Inner: styled.div`
        width: min(1120px, calc(100% - 40px));
        min-height: 112px;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 22px;

        @media (max-width: 760px) {
            width: min(100% - 32px, 1120px);
            padding: 22px 0;
            align-items: flex-start;
            flex-direction: column;
        }
    `,

    BrandLine: styled.div`
        display: flex;
        align-items: center;
        gap: 10px;

        img {
            width: 34px;
            height: 34px;
            object-fit: contain;
        }

        p {
            margin: 0;
            color: #93a6bc;
            font-size: 0.82rem;
        }

        a {
            color: #b9dfff;
            font-weight: 700;
            text-decoration: none;
            transition: box-shadow 0.18s ease, text-shadow 0.18s ease;

            &:hover {
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
                text-shadow: 0 0 10px rgba(141, 209, 255, 0.72);
            }
        }
    `,

    LinkGroups: styled.div`
        display: grid;
        justify-items: end;
        gap: 10px;

        .group {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-end;
            gap: 8px;
        }

        .iconLink {
            width: 34px;
            height: 34px;
            display: grid;
            place-items: center;
            border: 1px solid #285173;
            border-radius: 9px;
            background: #10253a;
            color: #b9dfff;
            text-decoration: none;
            transition: box-shadow 0.18s ease, text-shadow 0.18s ease;

            &:hover {
                box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22);
                text-shadow: 0 0 10px rgba(141, 209, 255, 0.72);
            }

            svg {
                width: 15px;
                height: 15px;
            }
        }

        .textLink {
            align-self: center;
            padding: 7px 3px;
            color: #aebed1;
            font-size: 0.82rem;
            text-decoration: none;

            &:hover {
                box-shadow: 0 8px 20px rgba(0, 0, 0, 0.22);
                text-shadow: 0 0 10px rgba(141, 209, 255, 0.72);
            }
        }

        @media (max-width: 760px) {
            justify-items: start;

            .group {
                justify-content: flex-start;
            }
        }
    `,
};
