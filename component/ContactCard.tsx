import React from "react";
import { Contact } from "../lib/contact"; // Adjust the import path as necessary

interface ContactCardProps {
  contact: Contact;
}

const ContactCard: React.FC<ContactCardProps> = ({ contact }) => {
  return (
    <div className="bg-gray-700 text-white shadow-lg overflow-hidden sm:rounded-lg mb-4">
      <div className="p-5">
        <h3 className="text-lg leading-6 font-medium text-gray-300">Contact Information</h3>
        <p className="mt-1 max-w-2xl text-sm text-gray-400">Personal details and message.</p>
      </div>
      <div className="border-t border-gray-600">
        <dl className="sm:divide-y sm:divide-gray-600">
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-200">Name</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">{contact.name}</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 ">
            <dt className="text-sm font-medium text-gray-200">Email</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">{contact.email}</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-200">Message</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">{contact.message}</dd>
          </div>
          <div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
            <dt className="text-sm font-medium text-gray-200">Submitted at</dt>
            <dd className="mt-1 text-sm text-gray-200 sm:mt-0 sm:col-span-2">
              {new Date(contact.submitted_at).toLocaleString()}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default ContactCard;
