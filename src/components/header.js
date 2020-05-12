import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import BannerBackground from '../images/banner-image.jpg';

const HeaderWrapper = styled.header`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
height: 100vh;
background: #262626 url(${BannerBackground});
padding-top: 3rem;
padding-left: 5rem;
padding-right: 5rem;
box-sizing: border-box;
`

const Presentation = styled.hgroup`
text-align: center;
width: 40%;
h1, h2, h3 {
  color: white;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}

h3 {
  font-size: 1em;
  margin-top: 1.3em;
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

const DownArrowLink = styled(Link)`
display: inline-flex;
justify-content: center;
align-items: center;
width: 3em;
height: 3em;
border: 0.05em solid white;
border-radius: 50%;
transition: all 200ms ease-in-out;
stroke: white;
&:hover {
  stroke: black;
  background: white;
  transition: all 200ms ease-in-out;
}
`

export const Header = () => (
  <HeaderWrapper>
    <Presentation>
      <h1>
        Hello, I’m Júnior. 
      </h1>
      <h2>
        My job is to make your business and software <strong>reliable</strong>
      </h2>
      <h3>
        Please allow me to introduce myself.
      </h3>
      
    </Presentation>
    <DownArrowLink to="/#">
      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L10 10L19 1"/>
      </svg>
    </DownArrowLink>
  </HeaderWrapper>
)
