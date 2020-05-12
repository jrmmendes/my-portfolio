import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
background: #262626;
padding-top: 3rem;
padding-left: 5rem;
padding-right: 5rem;
box-sizing: border-box;
`

const Presentation = styled.h1`
color: white;
font-weight: 300;
font-size: 2.5em;
text-align: center;
width: 40%;
p {
  margin: 0;
}
strong {
  font-weight: 300;
  display: inline-flex;
  background: white;
  color: black;
  clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 96%);
  padding: 0.1em;
}
`

export const Header = () => (
  <HeaderWrapper>
    <Presentation>
      <p>
        Hello, I’m Júnior. 
      </p>
      <p>
        My job is to make your business and software <strong>reliable</strong>
      </p>
    </Presentation>
    <Link to="/#"> Next </Link>
  </HeaderWrapper>
)
