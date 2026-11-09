import {
    BodyText,
    Eyebrow,
    Lead,
    Page,
    SectionTitle,
    Surface,
    Title,
} from "../../components/PageContent";

const PrivacyPolicy = () => (
    <Page>
        <header>
            <Eyebrow>Privacy policy</Eyebrow>
            <Title>Simple by design.</Title>
            <Lead>
                This static frontend does not include a sign-up form, analytics integration, or client-side storage for personal information.
            </Lead>
        </header>
        <Surface>
            <SectionTitle>How this demo handles data</SectionTitle>
            <BodyText>
                The application does not collect or store personal data and does not use analytics. It loads its fonts from Google Fonts, so your browser requests those font files from Google. External portfolio and email destinations follow their own privacy policies.
            </BodyText>
        </Surface>
    </Page>
);

export default PrivacyPolicy;
