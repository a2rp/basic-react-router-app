import styled, { keyframes } from "styled-components";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const Loader = () => (
    <Wrapper aria-live="polite" aria-label="Loading page">
        <Spinner />
        <span>Loading page</span>
    </Wrapper>
);

export default Loader;

const Wrapper = styled.div`
    min-height: 48vh;
    display: grid;
    place-items: center;
    align-content: center;
    gap: 14px;
    color: #9fb0c4;
`;

const Spinner = styled.span`
    width: 34px;
    height: 34px;
    border: 3px solid #234460;
    border-top-color: #65b8ff;
    border-radius: 50%;
    animation: ${spin} 0.8s linear infinite;
`;
