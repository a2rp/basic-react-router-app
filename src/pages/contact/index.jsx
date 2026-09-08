import { FiArrowUpRight, FiMail } from "react-icons/fi";
import {
    BodyText,
    Eyebrow,
    Lead,
    Page,
    SectionTitle,
    Surface,
    TextLink,
    Title,
} from "../../components/PageContent";

const Contact = () => (
    <Page>
        <header>
            <Eyebrow>Contact</Eyebrow>
            <Title>Let&apos;s connect.</Title>
            <Lead>
                This starter intentionally has no contact form or data storage. Use the direct links below if you would like to reach Ashish Ranjan.
            </Lead>
        </header>

        <Surface>
            <SectionTitle>Contact links</SectionTitle>
            <BodyText>
                For project discussions or professional enquiries, email is the most direct option.
            </BodyText>
            <TextLink href="mailto:ash.ranjan09@gmail.com">
                <FiMail aria-hidden="true" /> ash.ranjan09@gmail.com
            </TextLink>
            <TextLink href="https://www.ashishranjan.net/" target="_blank" rel="noreferrer">
                Visit portfolio <FiArrowUpRight aria-hidden="true" />
            </TextLink>
        </Surface>
    </Page>
);

export default Contact;
