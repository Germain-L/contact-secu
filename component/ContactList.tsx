import { useEffect, useState } from 'react';
import { Contact } from '../lib/contact';
import React from 'react';

function ContactList() {
    const [contacts, setContacts] = useState<Contact[]>([]);

    useEffect(() => {
        async function fetchContacts() {
            const response = await fetch('/api/contacts');
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
        <div>
            {contacts.map((contact) => (
                <div key={contact.id}>
                    <p>Name: {contact.name}</p>
                    <p>Email: {contact.email}</p>
                    <p>Message: {contact.message}</p>
                    <p>Submitted at: {contact.submitted_at.toString()}</p>
                </div>
            ))}
        </div>
    );
}

export default ContactList;