import sql from "./db";

export interface Contact {
    id: number;
    name: string;
    email: string;
    message: string;
    submitted_at: Date;
}

export async function list() {
    return sql<Contact[]>`
    SELECT id, name, email, message, submitted_at FROM contacts
    ORDER BY submitted_at DESC
  `;
}

export async function create(contact: Omit<Contact, 'id' | 'submitted_at'>) {
    return sql<Contact[]>`
    INSERT INTO contacts (name, email, message) VALUES (${contact.name}, ${contact.email}, ${contact.message})
    RETURNING id, name, email, message, submitted_at
  `;
}

export async function remove(id: number) {
    return sql<Contact[]>`
    DELETE FROM contacts WHERE id=${id}
    RETURNING id
  `;
}
