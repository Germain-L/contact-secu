// index.tsx
import Link from 'next/link';
import ContactForm from "../component/ContactForm";

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
