import React from "react"
import styled from "styled-components"
import { Section, styles } from "../../utils"

const Skills = () => {
  return (
    <Section>
      <SkillsWrapper>
        <h1 className="skills-banner">Highest Proficiencies</h1>
        <div className="skill-wrapper">
          <div className="skill">
            <h2 className="skill-title">HTML5 &amp; CSS3</h2>
            <img className="skill-image" src={require("../../images/html-css.png")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">Sass</h2>
            <img className="skill-image" src={require("../../images/sass.svg")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">TypeScript</h2>
            <img className="skill-image" src={require("../../images/ts.png")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">JavaScript</h2>
            <img className="skill-image" src={require("../../images/js.jpg")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">Angular</h2>
            <img className="skill-image" src={require("../../images/ng.png")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">angularJS(legacy)</h2>
            <img className="skill-image" src={require("../../images/ajs.png")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">ReactJS</h2>
            <img className="skill-image" src={require("../../images/react.svg")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">NodeJS</h2>
            <img className="skill-image" src={require("../../images/nodejs.svg")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">GatsbyJS</h2>
            <img className="skill-image" src={require("../../images/gatsby.png")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">jQuery</h2>
            <img className="skill-image" src={require("../../images/jquery.png")} alt="html/css logo" />
          </div>
          <div className="skill">
            <h2 className="skill-title">Ruby</h2>
            <img className="skill-image" src={require("../../images/ruby.png")} alt="html/css logo" />
          </div>
        </div>
      </SkillsWrapper>
    </Section>
  )
}

export default Skills

const SkillsWrapper = styled.div`
  .skills-banner {
    font-size: 3rem;
  }
  .skill-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    text-align: center;
  }
  .skill {
    padding: 1rem;
    border-radius: 3px;
    margin: 2rem;
    background: ${styles.colors.mainWhite};
    min-width: 150px;
  }
  .skill-title {
    margin-bottom: 1rem;
  }
  .skill-image {
    height: 75px;
  }
`
