import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="text-center bg-info text-white text-uppercase fixed-bottom p-3"
    >
      RYP GitHub Search App with Firebase Firestore
    </Container>
  );
};

export default Footer;
