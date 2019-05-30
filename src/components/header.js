import React from "react";
import styled from "styled-components";
import searchIcon from "../images/search.svg";

const Container = styled.header`
  background-color: white;
  height: 80px;
`;

const InnerContainer = styled.div`
  max-width: 1024px;
  padding-left: 20px;
  padding-right: 20px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.img`
  position: absolute;
  right: 10px;
  height: 8px;
  width: 8px;
`;

const SearchInput = styled.input`
  height: 20px;
  width: 200px;
  padding-left: 10px;
`;

export default function Header({ query, setQuery }) {
  return (
    <Container>
      <InnerContainer>
        <h1>Contact List</h1>

        <SearchContainer>
          <SearchInput
            placeholder="Search..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          <SearchIcon alt="Search" src={searchIcon} />
        </SearchContainer>
      </InnerContainer>
    </Container>
  );
}
