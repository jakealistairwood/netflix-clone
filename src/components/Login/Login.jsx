import React, { useState } from 'react';
import styles from './Login.module.scss';
import loginCheck from '../../loginCheck';

const Login = () => {
    const [ username , setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false);

    const onSubmit = async(e) => {
        e.preventDefault();

        setIsLoading(true);
        setError('');

        try {
            await loginCheck({ username, password });
            isUserLoggedIn(true);
        } catch(err) {
            setError('Your username or password was incorrect. Please Try again!');
        }

        setIsLoading(false);
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            {error ? <h1 className="error">{error}</h1> : <h1 className="form__header">Sign In</h1>}
            <label for="username"></label>
            <input 
                type="text" 
                id="username" 
                placeholder="username" 
                value={username} 
                onChange={e => setUsername(e.currentTarget.value)} 
            />
            <label for="password"></label>
            <input 
                type="text" 
                id="password" 
                placeholder="password" 
                value={password} 
                onChange={e => setPassword(e.currentTarget.value)} 
            />
            <button className="login-btn" type="submit" disabled={isLoading}>
                {isLoading ? 'Signing in...' : 'Sign In'}
            </button>
            <div className="form__needHelp"></div>
        </form>
    )
}

export default Login;
