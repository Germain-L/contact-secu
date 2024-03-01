import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ContactFormState {
    name: string;
    email: string;
    message: string;
}

export default function ContactForm() {
    const [formData, setFormData] = useState<ContactFormState>({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            if (data.success) {
                // Handle success
                console.log('Form submitted successfully:', data.contact);
                setFormData({ name: '', email: '', message: '' }); // Clear form
                alert('Thank you for your message. We will get back to you soon!');
            } else {
                // Handle errors
                console.error('Form submission error:', data.error);
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            // Handle unexpected errors
            console.error('Submission error:', error);
            alert('An error occurred while submitting the form. Please check your internet connection and try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 bg-gray-800 p-6 rounded-lg shadow">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-white">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-indigo-500 focus:bg-gray-600 focus:ring-indigo-500 text-black sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-white">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-indigo-500 focus:bg-gray-600 focus:ring-indigo-500 text-black sm:text-sm"
                />
            </div>
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-white">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-indigo-500 focus:bg-gray-600 focus:ring-indigo-500 text-black sm:text-sm"
                ></textarea>
            </div>
            <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Submit
            </button>
        </form>
    );
}
