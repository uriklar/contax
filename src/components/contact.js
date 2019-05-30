import React from "react";
import styled from "styled-components";

const DetailsContainer = styled.div`
  background-color: white;
  padding-top: 30px;
  padding-bottom: 10px;
  position: absolute;
  bottom: 0;
  right: 10px;
  left: 10px;
  transform: translateY(43px);
  transition: transform 0.5s;
`;

const Container = styled.div`
  background-color: white;
  padding: 10px;
  position: relative;
  overflow: hidden;

  &:hover ${DetailsContainer} {
    transform: translateY(0);
  }
`;

const ProfileImage = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
`;

const Icon = styled.img`
  position: absolute;
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 40px;
  top: -20px;
  left: 10px;
  background-color: white;
`;

const Name = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Detail = styled.div`
  font-size: 14px;
  font-weight: lighter;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${props => props.marginTop && `margin-top: ${props.marginTop}px`};
`;

export default function Contact({ contact }) {
  return (
    <Container>
      <ProfileImage src={contact.profile_image} alt="Contact image" />
      <DetailsContainer>
        <Icon src={contact.icon} alt="Contact icon" />
        <Name>{contact.name}</Name>
        <Detail>
          {contact.job} | {contact.company_name}
        </Detail>
        <Detail marginTop="10">Phone number: {contact.phone}</Detail>
        <Detail>{contact.email}</Detail>
      </DetailsContainer>
    </Container>
  );
}
