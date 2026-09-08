import {
    BodyText,
    Eyebrow,
    Lead,
    Page,
    SectionTitle,
    Surface,
    Title,
} from "../../components/PageContent";

const TermsOfService = () => (
    <Page>
        <header>
            <Eyebrow>Terms of service</Eyebrow>
            <Title>A learning project with clear boundaries.</Title>
            <Lead>
                This repository is a frontend demonstration of React Router patterns and is provided under its MIT license.
            </Lead>
        </header>
        <Surface>
            <SectionTitle>Use of this project</SectionTitle>
            <BodyText>
                You may review, learn from, adapt, and redistribute the code under the terms of the MIT License. The project is provided without warranty.
            </BodyText>
        </Surface>
    </Page>
);

export default TermsOfService;
