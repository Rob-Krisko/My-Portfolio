import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import { FaEnvelope, FaUser, FaCommentAlt } from 'react-icons/fa';

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const ContactInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #61dafb;
  border-radius: 5px;
`;

const ContactTextArea = styled.textarea`
  flex-grow: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #61dafb;
  border-radius: 5px;
`;

const ContactButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #61dafb;
  color: #282c34;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #61dafb;
  }
`;

const SocialLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const SocialLink = styled.a`
  color: #61dafb;
  text-decoration: none;
`;

const Error = styled.div`
  color: red;
  margin: 5px 0;
`;

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleValidation = (event) => {
    const { name, value } = event.target;
    let errors = {...formErrors}; // Create a new errors object

    switch (name) {
      case "name":
        errors.name = value.length < 5 ? "Name must be at least 5 characters long!" : "";
        break;
      case "_replyto":
        const emailRegex = /\S+@\S+\.\S+/;
        errors._replyto = !emailRegex.test(value) ? "Email is not valid!" : "";
        break;
      case "message":
        errors.message = value.length < 10 ? "Message must be at least 10 characters long!" : "";
        break;
      default:
        break;
    }

    setFormErrors(errors); // Set the state here
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.values(formErrors).some(error => error.length > 0)) {
      alert("Fill out the form correctly");
      return;
    }

    setIsLoading(true);
    let formData = new FormData(event.target);

    try {
      await fetch("https://formspree.io/f/xwkdvzyj", {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      setShowModal(true);
      event.target.reset();
      setIsLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <ContactContainer>
      <h1>Contact Me</h1>
      <ContactForm onSubmit={handleSubmit}>
        <InputContainer>
          <FaUser />
          <ContactInput type="text" name="name" placeholder="Your name" onChange={handleValidation} required />
        </InputContainer>
        {formErrors.name && <Error>{formErrors.name}</Error>}
        <InputContainer>
          <FaEnvelope />
          <ContactInput type="email" name="_replyto" placeholder="Your email" onChange={handleValidation} required />
        </InputContainer>
        {formErrors._replyto && <Error>{formErrors._replyto}</Error>}
        <InputContainer>
          <FaCommentAlt />
          <ContactTextArea name="message" rows="5" placeholder="Your message" onChange={handleValidation} required />
        </InputContainer>
        {formErrors.message && <Error>{formErrors.message}</Error>}
        <ContactButton type="submit">{isLoading ? 'Loading...' : 'Send'}</ContactButton>
      </ContactForm>
      <p>Or reach me directly at kriskora22@gmail.com</p>
      <SocialLinksContainer>
        <SocialLink href="https://www.linkedin.com/in/robertkrisko/" target="_blank">LinkedIn</SocialLink>
        <SocialLink href="https://github.com/Rob-Krisko" target="_blank">GitHub</SocialLink>
      </SocialLinksContainer>
      {showModal && <Modal closeModal={() => setShowModal(false)} />}
    </ContactContainer>
  );
}

export default Contact;
