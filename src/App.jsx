import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import styled from 'styled-components'
import AppRoutes from './appRoutes'

const App = () => {
    return (
        <>
            <Header />
            <Main>
                <AppRoutes />
            </Main>
            <Footer />
        </>
    )
}

export default App

const Main = styled.main`
    min-height: 100vh;
`;
