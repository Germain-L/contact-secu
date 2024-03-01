// components/ContactForm.tsx
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
                // Handle success (e.g., show a success message, clear the form)
                console.log('Form submitted successfully:', data.contact);
                setFormData({ name: '', email: '', message: '' }); // Clear form
                alert('Thank you for your message. We will get back to you soon!');
            } else {
                // Handle server-side validation error or other errors
                console.error('Form submission error:', data.error);
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            // Handle network errors or unexpected issues
            console.error('Submission error:', error);
            alert('An error occurred while submitting the form. Please check your internet connection and try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}
