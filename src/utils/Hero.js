import React from "react"
import styled from "styled-components"

const Hero = ({ img, children, home }) => {
  return (
    <HeroWrapper img={img} home={home}>
      {children}
    </HeroWrapper>
  )
}

const HeroWrapper = styled.header`
  min-height: ${props => (props.home ? "100vh" : "60vh")};
  background: url(${props => props.img}) center/cover fixed no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Hero
