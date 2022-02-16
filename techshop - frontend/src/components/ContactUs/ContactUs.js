import React from "react";
import {
  Container,
  ContactBox,
  Left,
  Header,
  InputName,
  InputEmail,
  InputPhone,
  TextArea,
  Right,
  SubmitButton,
} from "./ContactUs.styles";
import ReactMap from './ReactMap'

const ContactUs = () => {
  return (
    <Container>
      <ContactBox>
        <Header src="./assets/Tech42Day/ProductHeaders/contactusheader.png" />
        <Left>
          <InputName type="text" placeholder="Your Name..." />
          <InputEmail type="email" placeholder="Your Email..." />
          <InputPhone type="text" placeholder="Your Phone..." />
          <TextArea />
          <SubmitButton>Submit</SubmitButton>
        </Left>
      </ContactBox>
      <Right>
          <ReactMap/>
        
      </Right>
    </Container>
  );
};

export default ContactUs;
