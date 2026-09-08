import styled from "styled-components";

export const AppFrame = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`;

export const Main = styled.main`
    width: min(1120px, calc(100% - 40px));
    margin: 0 auto;
    padding: 128px 0 72px;

    @media (max-width: 640px) {
        width: min(100% - 32px, 1120px);
        padding: 104px 0 52px;
    }
`;
