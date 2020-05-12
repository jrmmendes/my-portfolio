import React from "react"
import styled from "styled-components"

const HeaderWrapper = styled.header`
height: 100vh;
background: #262626;
padding-top: 7rem;
padding-left: 5rem;
padding-right: 5rem;
box-sizing: border-box;
`

export const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    Hello world
  </HeaderWrapper>
)
