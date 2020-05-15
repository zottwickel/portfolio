import React from "react"
import { Section } from "../../utils"
import styled from "styled-components"

const Videos = () => {
  return (
    <Section>
      <VideosWrapper>
        <iframe
          className="video"
          title="video3"
          src="https://www.youtube.com/embed/8H0QkGWnrsc"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="video"
          title="video4"
          src="https://www.youtube.com/embed/p5fxQClPm88"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="video"
          title="video5"
          src="https://www.youtube.com/embed/Eo35AbM5HVw"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="video"
          title="video6"
          src="https://www.youtube.com/embed/3zWxB0-WMtg"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="video"
          title="video7"
          src="https://www.youtube.com/embed/VTjTdlgpo3Q"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="video"
          title="video8"
          src="https://www.youtube.com/embed/vgO3C0KHflc"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideosWrapper>
    </Section>
  )
}

export default Videos

const VideosWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  .video {
    margin-top: 1rem;
  }
`
