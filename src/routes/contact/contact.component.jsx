import React, { useState } from "react";
import Button from "../../components/button/button.component";
import {
  Container,
  Heading,
  Subheading,
  ContactForm,
  Input,
  TextArea,
  SubmissionContainer
} from "./contact.styles";

const FORM_ENDPOINT =
  "https://public.herotofu.com/v1/f1fbba50-1638-11ee-a6b0-17653bd30bd3";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Form response was not ok");
        }

        setSubmitted(true);
      })
      .catch((err) => {
        e.target.submit();
      });
  };
  if (submitted) {
    return (
      <SubmissionContainer>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </SubmissionContainer>
    );
  }

  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Subheading>Don't hesitate to reach out to us with any inquiries or suggestions. We welcome all feedback and are here to help!</Subheading>

      <ContactForm action={FORM_ENDPOINT} onSubmit={handleSubmit} method="POST">
        <Input type="text" placeholder="Your name" name="name" required />
        <Input type="email" placeholder="Email" name="email" required />
        <TextArea placeholder="Your message" name="message" required />
        <Button type="submit"> SEND</Button>
      </ContactForm>
    </Container>
  );
};

export default Contact;
