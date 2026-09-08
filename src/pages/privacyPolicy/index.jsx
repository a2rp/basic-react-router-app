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
                The application itself does not request, collect, or store personal data. When you open an external portfolio or email link, that destination&apos;s own policies apply.
            </BodyText>
        </Surface>
    </Page>
);

export default PrivacyPolicy;
