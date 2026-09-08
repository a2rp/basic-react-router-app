import { FiArrowUpRight, FiCompass, FiLayers, FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import {
    BodyText,
    Card,
    CardGrid,
    Eyebrow,
    Lead,
    Page,
    SectionTitle,
    Surface,
    TextLink,
    Title,
} from "../../components/PageContent";

const Home = () => (
    <Page>
        <header>
            <Eyebrow>React Router starter</Eyebrow>
            <Title>Small routes. Clear navigation. Better foundations.</Title>
            <Lead>
                A compact React application that demonstrates browser routing, lazy-loaded pages,
                accessible navigation, and a responsive layout without unnecessary complexity.
            </Lead>
            <TextLink as={Link} to="/about">
                Explore the project <FiArrowUpRight aria-hidden="true" />
            </TextLink>
        </header>

        <Surface>
            <SectionTitle>What this starter includes</SectionTitle>
            <CardGrid>
                <Card>
                    <FiCompass aria-hidden="true" size={22} color="#7dc4ff" />
                    <h3>Browser routing</h3>
                    <p>Every page has its own URL, including a reliable fallback for unknown routes.</p>
                </Card>
                <Card>
                    <FiLayers aria-hidden="true" size={22} color="#7dc4ff" />
                    <h3>Lazy-loaded pages</h3>
                    <p>Route pages load through Suspense so the interface stays focused and modular.</p>
                </Card>
                <Card>
                    <FiMenu aria-hidden="true" size={22} color="#7dc4ff" />
                    <h3>Responsive navigation</h3>
                    <p>Desktop links become an accessible mobile menu on smaller screens.</p>
                </Card>
            </CardGrid>
            <BodyText>
                Use this project as a clean base for learning navigation patterns before connecting it to a larger API or feature set.
            </BodyText>
        </Surface>
    </Page>
);

export default Home;
