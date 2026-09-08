import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const Home = lazy(() => import("../pages/home"));
const About = lazy(() => import("../pages/about"));
const Contact = lazy(() => import("../pages/contact"));
const PrivacyPolicy = lazy(() => import("../pages/privacyPolicy"));
const TermsOfService = lazy(() => import("../pages/termsOfService"));
const NotFound = lazy(() => import("../pages/notFound"));

const AppRoutes = () => {
    const location = useLocation();

    return (
        // The key remounts the loading boundary when a new page route is selected.
        <Suspense key={location.pathname} fallback={<Loader />}>
            <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Suspense>
    );
};

export default AppRoutes;
