// index.tsx
import ContactForm from "../component/ContactForm";
import React from 'react';

const HomePage = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-black">
            <div className="text-white">
                <ContactForm />
            </div>
        </div>
    );
};

export default HomePage;
