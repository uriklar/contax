import React from "react";
import styled from "styled-components";

import Contact from "./contact";

const Container = styled.main`
  background-color: #d3d3d3;
  padding-bottom: 20px;
`;

const InnerContainer = styled.div`
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 40px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 270px);
  grid-gap: 1rem;
  justify-content: space-around;
`;

export default function ContactList({ contacts }) {
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
