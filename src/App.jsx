import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import styled from 'styled-components'
import AppRoutes from './appRoutes'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
    return (
        <>
            <Header />
            <Main>
                <ScrollToTop />
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
