import { useState } from "react";
import { useRouter } from "next/router";
import { loginUser } from "../lib/auth";

const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();//to confirm
        setError(null);

        try {
            await loginUser(username, password);
            router.push('/dashboard')
        } catch (error) {
            if (error instanceof Error)
                setError(error.message);
            else
                setError('An unexpected error occurred.')
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    )
};

export default Login;