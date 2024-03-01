import sql from "./db";
import Joi from 'joi';

export interface Contact {
  id: number;
  name: string;
  email: string;
  message: string;
  submitted_at: Date;
}

const schema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  message: Joi.string().min(5).required(),
});

export async function list() {
  return sql<Contact[]>`
    SELECT id, name, email, message, submitted_at FROM contacts
    ORDER BY submitted_at DESC
  `;
}

export async function remove(id: number) {
  return sql<Contact[]>`
    DELETE FROM contacts WHERE id=${id}
    RETURNING id
  `;
}

async function create(contact: Omit<Contact, 'id' | 'submitted_at'>) {
  const { error } = schema.validate(contact);
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  return sql<Contact[]>`
    INSERT INTO contacts (name, email, message) VALUES (${contact.name}, ${contact.email}, ${contact.message})
    RETURNING id, name, email, message, submitted_at
  `;
}