// contacts/index.tsx
import { ChangeEvent, useState } from 'react';
import ContactList from '../../component/ContactList';

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
                <div className="text-center">
                    <input className="text-black" type="password" value={password} onChange={handlePasswordChange} />
                    <button className="bg-blue-500 text-white p-2 rounded" onClick={handleLogin}>Login</button>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-black text-white">
            <div>
                <h1>Protected content</h1>
                <ContactList />
            </div>
        </div>
    );
}

export default ProtectedPage;
