import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Network = styled.a`
color: white;
border: 1px solid white;
padding: 0.5em;
margin-left: 0.6em;
border-radius: 0.2em;
&:hover {
  background: white;
  color: black;
}
`

const SocialBar = styled.nav`
@media (max-width: 900px) {
  display: none;
}

`

export default () => {
  return (
    <SocialBar>
      <Network
        href="https://github.com/jrmmendes"
        target="_new">
        <FontAwesomeIcon icon={faGithub}/>
      </Network>

      <Network
        href="https://twitter.com/jrmmendes"
        target="_new">
        <FontAwesomeIcon icon={faTwitter}/>
      </Network>

      <Network
        href="https://linkedin.com/in/jrmmendes"
        target="_new">
        <FontAwesomeIcon icon={faLinkedin}/>
      </Network>

      <Network
        href="mailto://jrmmendesg@gmail.com"
        target="_new">
        <FontAwesomeIcon icon={faEnvelope} />
      </Network>
    </SocialBar>
  );
}
