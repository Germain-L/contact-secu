import Link from 'next/link';

const HomePage = () => {
    return (
        <div>
            <h1>Welcome to My Next.js App</h1>
            <p>This is the home page. Visit the Todo page to see the Todo app in action.</p>
            <Link href="/todos">Go to Todos</Link>
        </div>
    );
};

export default HomePage;
