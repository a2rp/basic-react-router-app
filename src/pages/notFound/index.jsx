import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Eyebrow, Lead, Page, TextLink, Title } from "../../components/PageContent";

const NotFound = () => (
    <Page>
        <header>
            <Eyebrow>404</Eyebrow>
            <Title>This page is not available.</Title>
            <Lead>
                The address may be incorrect or the page may have moved. Use the link below to return to the homepage.
            </Lead>
            <TextLink as={Link} to="/">
                <FiArrowLeft aria-hidden="true" /> Back to home
            </TextLink>
        </header>
    </Page>
);

export default NotFound;
