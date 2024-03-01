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
            <div>
                <input type="password" value={password} onChange={handlePasswordChange} />
                <button onClick={handleLogin}>Login</button>
            </div>
        );
    }

    // Your protected content goes here
    return <div>
        <h1>Protected content</h1>
        <ContactList></ContactList>
    </div>;
}

export default ProtectedPage;