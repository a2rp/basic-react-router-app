import { NavLink } from "react-router-dom";
import { Styled } from "./styled";

const Footer = () => (
    <Styled.Footer>
        <Styled.Inner>
            <Styled.Copy>
                &copy; {new Date().getFullYear()}{" "}
                <a
                    href="https://www.ashishranjan.net/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Ashish Ranjan
                </a>
                <span>Built with React Router.</span>
            </Styled.Copy>
            <Styled.Links aria-label="Footer navigation">
                <a href="https://github.com/a2rp" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://codepen.io/ash1198" target="_blank" rel="noopener noreferrer">CodePen</a>
                <a href="mailto:ash.ranjan09@gmail.com">Email</a>
                <a href="https://a2rp-donation-page.netlify.app/" target="_blank" rel="noopener noreferrer">Support</a>
                <a href="https://buymeacoffee.com/a2rp" target="_blank" rel="noopener noreferrer">Buy Me A Coffee</a>
                <a href="https://patreon.com/a2rp" target="_blank" rel="noopener noreferrer">Patreon</a>
                <NavLink to="/privacy-policy">Privacy</NavLink>
                <NavLink to="/terms-of-service">Terms</NavLink>
            </Styled.Links>
        </Styled.Inner>
    </Styled.Footer>
);

export default Footer;
