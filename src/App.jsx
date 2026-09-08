import AppRoutes from "./appRoutes";
import Footer from "./components/footer";
import Header from "./components/header";
import ScrollToTop from "./components/ScrollToTop";
import { AppFrame, Main } from "./components/layout";

const App = () => (
    <AppFrame>
        <ScrollToTop />
        <Header />
        <Main>
            <AppRoutes />
        </Main>
        <Footer />
    </AppFrame>
);

export default App;
