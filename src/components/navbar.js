import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import Logo from '../images/logo.svg';

const linkMargin = 1;

const NavLink = styled(Link)`
color: white;
text-decoration: none;
font-family: 'Roboto';
font-size: 0.8em;
margin-left: ${linkMargin}em;
margin-right: ${linkMargin}em;
&:hover {
  font-weight: 500;
}
`

const NavbarWrapper = styled.div`
display: flex;
padding: 1.2em;
padding-left: 5rem;
padding-right: 5rem;
align-items: center;
justify-content: space-between;
background-color: rgba(0,0,0,0.5);
width: 100%;
clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
position: fixed;
`

const NavLinks = styled.nav`
list-style: none;
display: flex;
margin: 0;
`

const SocialLink = styled.a`
color: white;
border: 1px solid white;
padding: 0.5em;
margin-left: 0.6em;
border-radius: 0.2em;
&:hover {
  background: white;
  color: black;
}
`;

export const Navbar = () => {
  return (
    <NavbarWrapper>
      <Link to="/">
        <img src={Logo} alt="logo" style={{
          margin: 0,
        }}/>
      </Link>
      <NavLinks>
        <NavLink to="/#about">About</NavLink>
        <NavLink to="/#projects">Projects</NavLink>
        <NavLink to="/#contacts">Contact</NavLink>
        <NavLink to="/#blog">Blog</NavLink>
      </NavLinks>
      <div>
        <SocialLink href="https://github.com/jrmmendes" target="_new">
          <FontAwesomeIcon icon={faGithub}/>
        </SocialLink>

        <SocialLink href="https://twitter.com/jrmmendes" target="_new">
          <FontAwesomeIcon icon={faTwitter}/>
        </SocialLink>

        <SocialLink href="https://linkedin.com/in/jrmmendes" target="_new">
          <FontAwesomeIcon icon={faLinkedin}/>
        </SocialLink>

        <SocialLink href="mailto://jrmmendesg@gmail.com" target="_new">
          <FontAwesomeIcon icon={faEnvelope} />
        </SocialLink>
      </div>

    </NavbarWrapper>
  );
}
