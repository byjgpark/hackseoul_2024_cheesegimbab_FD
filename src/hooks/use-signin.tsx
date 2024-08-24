import { useState } from 'react';
import loginUser from '@/api/authApi';
import { useAuth } from "../app/authContext";

interface MemberApiRequest {
    member_id: string;
    member_pw: string;
}

interface ApiResponse {
    code: string;
    member_seq: number;
}

function useLogin() {
    const { email, password, setEmail, setPassword, setMemberSeq } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleEmailChange = (email: string) => {
        setEmail(email);
    };

    const handlePasswordChange = (password: string) => {
        setPassword(password);
    };

    const login = async (): Promise<ApiResponse | null> => {
        setLoading(true);
        setError(null);

        const request: MemberApiRequest = {
            member_id: email,
            member_pw: password,
        };

        try {
            const response = await loginUser(request);

            console.log("API response:", response);

            if (response && response.code === '0000') {
                setMemberSeq(response.member_seq.toString());
            } else {
                setError('Login failed. Invalid response from the server.');
                return null;
            }

            setLoading(false);
            return response;
        } catch (err) {
            console.error('Login failed:', err);
            setError('Login failed. Please check your credentials.');
            setLoading(false);
            return null;
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
