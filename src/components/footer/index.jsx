import { NavLink } from 'react-router-dom';
import { Styled } from './styled';

const Contact = () => {
    return (
        <Styled.Wrapper>
            <Styled.Copyright>
                <Styled.CopyrightYear>&copy; {new Date().getFullYear()} <a href="https://www.ashishranjan.net">Ashish Ranjan</a></Styled.CopyrightYear>
                <Styled.NameAllRightsReserved>
                    All rights reserved.
                </Styled.NameAllRightsReserved>
            </Styled.Copyright>

            <Styled.Legal>
                <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                <NavLink to="/terms-of-service">Terms of Service</NavLink>
            </Styled.Legal>
        </Styled.Wrapper>
    )
}

export default Contact

