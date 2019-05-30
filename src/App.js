import React, { useState, useEffect, useMemo } from "react";
import Header from "./components/header";
import ContactList from "./components/contact-list";
import { fetchContacts } from "./utils/api";

function App() {
  const [contacts, setContacts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => fetchContacts().then(setContacts), []);

  const filteredContacts = useMemo(
    () =>
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(query.toLowerCase())
      ),
    [contacts, query]
  );

  return (
    <>
      <Header query={query} setQuery={setQuery} />
      <ContactList contacts={filteredContacts} />
    </>
  );
}

export default App;
