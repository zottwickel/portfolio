import React from "react"
import { styles } from "../../utils"
import styled from "styled-components"

const Email = () => {
  return (
    <EmailWrapper>
      <form action="https://formspree.io/mrgybnkp" method="POST">
        <label className="label" htmlFor="name">
          Your Name:
        </label>
        <input className="input" type="text" name="name" required />
        <label className="label" htmlFor="_replyto">
          Your Email:
        </label>
        <input className="input" type="email" name="_replyto" required />
        <label className="label" htmlFor="message">
          Your Message:
        </label>
        <textarea className="textarea" name="message" rows="5" required />
        <button className="btn-form" type="submit">
          Send
        </button>
      </form>
    </EmailWrapper>
  )
}

export default Email

const EmailWrapper = styled.section`
  padding: 2rem;
  .label {
    display: block;
    font-size: 1.5rem;
    margin-top: 1rem;
  }
  .input,
  .textarea {
    display: block;
    font-size: 1.5rem;
    width: 100%;
    padding: 0.5rem;
  }
  .btn-form {
    background: none;
    display: inline-block;
    text-decoration: none;
    color: ${styles.colors.mainBlack};
    padding: 1rem 1.5rem;
    cursor: pointer;
    ${styles.transition1};
    border: 2px solid ${styles.colors.mainBlack};
    margin: 1rem 1rem 0 0;
    font-size: 1.5rem;
    text-transform: uppercase;
    &:hover {
      background: ${styles.colors.mainDarkGrey};
      color: ${styles.colors.mainLime};
    }
  }

`
