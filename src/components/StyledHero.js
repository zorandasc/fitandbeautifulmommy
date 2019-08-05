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
      ? "linear-gradient(rgba(209,56,133,0.3), rgba(209,56,133,0.3))"
      : "none"};
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 1 !important;
  display: flex;
  justify-content: center;
  align-items: center;
`
