import React from "react"
import { Section } from "../../utils"
import styled from "styled-components"

const Bio = () => {
  return (
    <Section>
      <BioWrapper>
        <h1 className="heading">A Bit About Music</h1>
        <p className="text">
          I have always been interested in making music from a young age. Some
          of my earlier memories involve playing with a friend's plastic
          saxophone. Ever since I knew what the instrument was, I have been
          seeking after playing it and becoming good at it. Some may call it
          playing the game for the game's own sake. By the time I made it to
          college, that's all I wanted to do. After a few years of some
          professional gigs, I started to crave stability. For the time being,
          music may be on a back burner, but it is still an integral part of who
          I am. Please enjoy some of my more recent videos below.
        </p>
      </BioWrapper>
    </Section>
  )
}

export default Bio

const BioWrapper = styled.div`
  text-align: center;
  .heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .text {
    font-size: 1.5rem;
  }
  @media (min-width: 768px) {
    margin: 1rem auto;
    width: 60vw;
  }
`
