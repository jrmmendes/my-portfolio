import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-family: 'Roboto';
  font-size: 0.8em;
  margin: 0 1em;
  &:hover {
    font-weight: 500;
  }
`

const SiteNavigation = styled.nav`
  list-style: none;
  display: flex;
  margin: 0;
  margin-left: 5em;
@media (max-width: 900px) {
  display: none;
}
`

export default () => (
  <SiteNavigation>
    <NavLink to="/#about">About</NavLink>
    <NavLink to="/#projects">Projects</NavLink>
    <NavLink to="/#contacts">Contact</NavLink>
    <NavLink to="/#blog">Blog</NavLink>
  </SiteNavigation>
)
