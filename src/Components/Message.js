import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

// npm i @emailjs/browser

const Message = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qa5o29j",
        "template_uu11zos",
        form.current,
        "Mvmp9SXGSz7j6ZlVY"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    
    <>
    
    <div className="container">

    <StyledContactForm>
      <form ref={form} onSubmit={sendEmail}>
        {/* <label>Name</label> */}
        {/* <input type="text" name="user_name" /> */}
        {/* <label>Email</label> */}
        {/* <input type="email" name="user_email" /> */}
        {/* <label>Message</label> */}
        <textarea name="message" placeholder="Write here"/>
        <input className=" inputClassMessage mt-3" type="submit" value="Send" />
      </form>
    </StyledContactForm>

    </div>
    
    </>
  );
};

export default Message;

// Styles
const StyledContactForm = styled.div`
  width: 100%;
  // background-color:red;

  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 16px;

    input {
      width: 20%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);
    
      
      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

.inputClassMessage{
    margin: auto;
    border: none;
  font-size: 16px;
  font-weight: 600;
  color: #FFFFFF;
  padding: auto;
  width: 200px;
  height: 40px;
  text-align: center;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
}

.inputClassMessage:hover{
    background-color: #6b59d3;
    transform: scale(1.1);
    font-size:20px;
    padding-bottom: 25px;
}

    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 5px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid rgba(0, 206, 158, 1);
      }
    }

    label {
      margin-top: 1rem;
    }

    input[type="submit"] {
      margin-top: 2rem;
      cursor: pointer;
      background: rgb(249, 105, 14);
      color: white;
      border: none;
     
    }
  }
`;
