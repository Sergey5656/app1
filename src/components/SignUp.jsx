import React, { useState } from 'react';
import { auth } from '../firebase';
import 'firebase/auth';
import 'firebase/firestore';


const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();

            if (password !== confirmPassword) {
                alert('Passwords do not match');
                return;
            }

            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Вы можете выполнить какие-либо дополнительные действия здесь, например, обновление профиля пользователя.
                    const user = userCredential.user;
                    console.log('User registered:', user);
                })
                .catch((error) => {
                    const errorMessage = error.message;
                    console.error('Registration error:', errorMessage);
                });
        };


    return (
        <form onSubmit={handleRegister}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
            />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;