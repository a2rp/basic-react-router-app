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
                    rel="noreferrer"
                >
                    Ashish Ranjan
                </a>
                <span>Built with React Router.</span>
            </Styled.Copy>
            <Styled.Links aria-label="Legal navigation">
                <NavLink to="/privacy-policy">Privacy</NavLink>
                <NavLink to="/terms-of-service">Terms</NavLink>
            </Styled.Links>
        </Styled.Inner>
    </Styled.Footer>
);

export default Footer;
