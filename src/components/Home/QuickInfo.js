import React from "react"
import { Section, styles } from "../../utils"
import styled from "styled-components"

const QuickInfo = () => {
  return (
    <Section>
      <InfoWrapper>
        <h1 className="info-banner">About Me</h1>
        <p className="text">
          <img className="image" src={require('../../images/scott.jpg')} alt="Scott with a soprano sax" />Hello! My name is Scott and I love to program web pages. My hobbies
          include riding my bike and playing saxophone. I have been interested
          in web application development since 2017. My journey started with
          <a
            href="https://www.theodinproject.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            The Odin Project{" "}
          </a>
          where I learned the basics of web development using JavaScript, HTML,
          CSS, and Ruby. I fell in love. I kept making web pages, improving the
          web pages I've made, and learning and reading about coding since then.
          Soon, I wanted to do programming full-time, and I came across
          <a
            href="https://www.thinkful.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            {" "}
            Thinkful{". "}
          </a>
          I decided to sign up for their Engineering Flex program, as it fit
          nicely with my schedule, and the program has a great track record of
          educating competent developers. It was working with Thinkful that I
          took my programming skills to the next level. Through their rigorous
          program, I was able to make several more projects and learn about
          advanced frameworks like NodeJS and ReactJS. Since then, my appetite
          for making websites has only grown and I find myself practicing all
          the time.
        </p>
      </InfoWrapper>
    </Section>
  )
}

export default QuickInfo

const InfoWrapper = styled.div`
  margin-top: -4rem;
  padding-bottom: 2rem;
  .info-banner {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .text {
    font-size: 1.5rem;
  }
  .link {
    text-decoration: none;
    color: ${styles.colors.mainGreen};
  }
  .image {
    float: left;
  }
  @media (min-width: 768px) {
    margin: -3rem auto 0 auto;
    width: 60vw;
  }
`
