import { useState } from 'react';
import loginUser from '@/api/authApi';
// @/api/testApi

// @/api/testApi

function useLogin() {
    // State to hold email, password, and other user inputs
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log("check email in useLogin", email, "password", password, "from useLogin");
    
    // State to manage loading and error status
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Function to handle email change
    const handleEmailChange = (input: string) => {
        // console.log("check input", input);
        setEmail(input);
    };

    // Function to handle password change
    const handlePasswordChange = (input: string) => {
        // console.log("check input", input);
        setPassword(input);
    };

    // Function to perform the login
    const login = async (email: string, password: string) => {
        // setLoading(true);
        // setError(null);

        
        
        try {
            // Assume you have an API function to handle login, e.g., `loginUser`
            // const response = await loginUser({ email, password });


            console.log("123123 check email", email, "password", password);
            
            // console.log("API response:", response);
            const response = await loginUser({ "member_id": email, "member_pw": password });

            console.log("API response:", response);

            console.log("check email", email, "password", password);
            
            // Handle success, e.g., save token, redirect, etc.
            // console.log("Login successful", response);
            
            // setLoading(false);
        } catch (err) {
            // Handle error, e.g., show error message to user
            // setError('Login failed. Please check your credentials.');
            // setLoading(false);
        }
    };

    return {
        email,
        password,
        loading,
        error,
        handleEmailChange,
        handlePasswordChange,
        login,
    };
}

export default useLogin;
