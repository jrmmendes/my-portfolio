import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import SocialNetworks from './SocialNetworks'
import SiteNavigation from './SiteNavigation'

import LogoFile from '../../images/logo.svg'

const Navbar = styled.div`
  display: flex;
  z-index: 10;
  padding: 1.2rem 5rem;
@media (max-width: 500px) {
  padding: 1.2rem 3rem;
}
  align-items: center;
  justify-content: space-between;
  background-color: #26262600;
  width: 100%;
  clip-path: polygon(0 0, 100% 0, 100% 88%, 0% 100%);
  position: fixed;
`

const Logo = styled.img`
  margin: 0;
  height: 2.5rem;
`


export default () => {
  return (
    <Navbar>
      <Link to="/">
        <Logo src={LogoFile} alt="logo" />
      </Link>

      <SiteNavigation />
      <SocialNetworks />
      <button> M </button>
    </Navbar>
  )
}
