// contacts/index.tsx
import { ChangeEvent, useState } from 'react';
import ContactList from '../../component/ContactList';
import React from 'react';

function ProtectedPage() {
    const [password, setPassword] = useState<string>('');
    const [authenticated, setAuthenticated] = useState<boolean>(false);

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleLogin = () => {
        if (password === 'q') {
            setAuthenticated(true);
        } else {
            alert('Wrong password');
        }
    };

    if (!authenticated) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-black">
                <div className="text-center p-6 bg-gray-800 rounded-lg shadow-lg">
                    <input 
                        className="text-black p-2 rounded bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white" 
                        type="password" 
                        value={password} 
                        onChange={handlePasswordChange} 
                        placeholder="Enter password"
                    />
                    <button 
                        className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
            <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                <h1 className="text-xl font-bold mb-4">Protected content</h1>
                <ContactList />
            </div>
        </div>
    );
}

export default ProtectedPage;
