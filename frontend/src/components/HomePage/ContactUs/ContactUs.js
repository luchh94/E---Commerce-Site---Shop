import React from "react";

import {
  Container,
  ContactForm,
  Header,
  InputName,
  InputEmail,
  InputPhone,
  TextArea,
  SubmitButton,
  AdressContainer,
  LowerContainer,
} from "./ContactUs.styles";
import ReactMap from "./ReactMap";

const ContactUs = () => {
  return (
    <Container id="contact">
      <Header src="./assets/Tech42Day/ProductHeaders/contactusheader.png" />
      <ContactForm>
        <InputName type="text" placeholder="Your Name..." />
        <InputEmail type="email" placeholder="Your Email..." />
        <InputPhone type="text" placeholder="Your Phone..." />
        <TextArea />
        <SubmitButton>Submit</SubmitButton>
      </ContactForm>
      <LowerContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/eH2N8fondYuNq3ko9"
        >
          <h3>Germany</h3>
          <h3>Alter Wall 44</h3>
          <h3>22529</h3>
        </a>
      </LowerContainer>
    </Container>
  );
};

export default ContactUs;
