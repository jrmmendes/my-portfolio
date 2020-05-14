import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Video from '../videos/coding.mp4'

const breakpoint = '1200px';

const HeaderWrapper = styled.header`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(0,0,0, 0.8);
  padding: 3rem 0 5rem;
  box-sizing: border-box;
  height: 100vh;
`

const Presentation = styled.hgroup`
overflow: hidden;
text-align: center;
width: 20rem;
h1, h2, h3 {
  color: white;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
  @media (max-width: 400px) {
    font-size: 2.3em;
  }
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
width: 3rem;
height: 3rem;
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

const VideoBackground = styled.video`
pointer-events: none;
position: absolute;
top: 0;
right: 0;
margin: 0;
z-index: -1;
align-self: center;

@media (max-width: ${breakpoint}) {
  height: 100%;
}
@media (min-width: ${breakpoint}) {
  width: 100%;
}
`

export const Header = () => (
  <HeaderWrapper>
    <VideoBackground
      loop
      autoPlay
      muted
      src={Video}
    ></VideoBackground>
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
