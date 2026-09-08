import {
    BodyText,
    Card,
    CardGrid,
    Eyebrow,
    Lead,
    Page,
    SectionTitle,
    Surface,
    Title,
} from "../../components/PageContent";

const About = () => (
    <Page>
        <header>
            <Eyebrow>About this project</Eyebrow>
            <Title>A practical example of route-based UI.</Title>
            <Lead>
                This app keeps the routing layer easy to understand while still handling the things a real frontend needs: navigation state, missing pages, loading states, and mobile access.
            </Lead>
        </header>

        <Surface>
            <SectionTitle>Project principles</SectionTitle>
            <CardGrid>
                <Card>
                    <h3>Simple structure</h3>
                    <p>Pages, reusable layout components, and routes have clear responsibilities.</p>
                </Card>
                <Card>
                    <h3>Useful defaults</h3>
                    <p>Scroll position resets between pages and unknown URLs show a dedicated screen.</p>
                </Card>
                <Card>
                    <h3>Accessible controls</h3>
                    <p>The mobile menu uses a real button with labels, keyboard support, and visible focus.</p>
                </Card>
            </CardGrid>
            <BodyText>
                The routes are intentionally static. There is no form submission, database, account system, or hidden data collection in this demo.
            </BodyText>
        </Surface>
    </Page>
);

export default About;
