import React, { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Header from "./components/header";
import ContactList from "./components/contact-list";
import { fetchContacts } from "./utils/api";

const Container = styled.div`
  height: 100%;
`;

function App() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => fetchContacts().then(setContacts), []);

  return (
    <>
      <Header />
      <ContactList contacts={contacts} />
      {/* <div>
            Icons made by{" "}
            <a href="https://www.flaticon.com/authors/yannick" title="Yannick">
              Yannick
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>{" "}
            is licensed by{" "}
            <a
              href="http://creativecommons.org/licenses/by/3.0/"
              title="Creative Commons BY 3.0"
              target="_blank"
            >
              CC 3.0 BY
            </a>
          </div> */}
    </>
  );
}

export default App;
