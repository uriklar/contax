import React from "react";
import styled from "styled-components";
import loadingGif from "../images/loader.gif";

import Contact from "./contact";

const LoadingContainer = styled.div`
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Container = styled.main`
  background-color: #d3d3d3;
  padding-bottom: 20px;
`;

const InnerContainer = styled.div`
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export default function ContactList({ contacts }) {
  if (!contacts || !contacts.length) {
    return (
      <LoadingContainer>
        <img src={loadingGif} alt="Loading" />
      </LoadingContainer>
    );
  }
  return (
    <Container>
      <InnerContainer>
        {contacts.map(contact => (
          <Contact contact={contact} />
        ))}
      </InnerContainer>
    </Container>
  );
}
