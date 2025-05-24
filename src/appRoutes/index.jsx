import { Box, CircularProgress } from '@mui/material';
import React, { lazy, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const NotFound = lazy(() => import("../pages/notFond"));

const AppRoutes = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Navigate to={"/"} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />

                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </>
    )
}

export default AppRoutes

const Loader = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "transparent",
            }}
        >
            <CircularProgress />
        </Box>
    );
};
