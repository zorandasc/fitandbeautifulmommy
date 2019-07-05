import React from "react"
import styled from "styled-components"
import BacgroundImage from "gatsby-background-image"

const StyledHero = ({ img, children, className, home }) => {
  return (
    <BacgroundImage className={className} fluid={img} home={home}>
      {children}
    </BacgroundImage>
  )
}

//(100vh)100 procenta minus debljina navbara
export default styled(StyledHero)`
  min-height: ${props => (props.home ? "calc(100vh)" : "50vh")};
  background: ${props =>
    props.home
      ? "linear-gradient(rgba(63,208,212,0.7), rgba(0,0,0,0.7))"
      : "none"};
  background-position: center;
  background-size: cover;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
