import { useState } from 'react';
import loginUser from '@/api/authApi';
import { useAuth } from "../app/(routes)/(landing)/components/authContext";

interface MemberApiRequest {
    member_id: string;
    member_pw: string;
}

interface ApiResponse {
    data: any;
}

function useLogin() {
    const { email, password } = useAuth();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const login = async (email: string, password: string): Promise<ApiResponse | null> => {
        setLoading(true);
        setError(null);

        const request: MemberApiRequest = {
            member_id: email,
            member_pw: password,
        };

        try {
            const response = await loginUser(request);

            console.log("API response:", response);

            // 성공 처리
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
        login,
    };
}

export default useLogin;
