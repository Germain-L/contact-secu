import { useEffect, useState } from "react";
import { Contact } from "../lib/contact";
import React from "react";
import ContactCard from "./ContactCard";

function ContactList() {
  const [contacts, setContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function fetchContacts() {
      const response = await fetch("/api/contacts");
      const data = await response.json();

      if (data.success) {
        setContacts(data.contacts);
      } else {
        console.error(data.error);
      }
    }

    fetchContacts();
  }, []);

  return (
    <div className="space-y-8">
      {contacts.map((contact) => (
        <ContactCard key={contact.id} contact={contact} />
      ))}
    </div>
  );
}

export default ContactList;
