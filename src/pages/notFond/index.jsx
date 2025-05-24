import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
    return (
        <Styled>NotFound</Styled>
    )
}

export default NotFound

const Styled = styled.div`
    min-height: 100vh;
    padding: 16vh 50px;

    @media (width<500px) {
        padding: 16vh 15px;
    }
`;