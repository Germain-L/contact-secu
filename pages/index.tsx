// index.tsx
import ContactForm from "../component/ContactForm";
import React from 'react';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="p-6 max-w-md w-full bg-gray-800 rounded-lg shadow-md">
                <h1 className="text-white text-2xl font-bold mb-4">Contact Us</h1>
                <ContactForm />
            </div>
        </div>
    );
};

export default HomePage;
