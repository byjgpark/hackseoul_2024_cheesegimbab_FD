"use client";

import { Input } from "@/components/ui/input";
import * as React from "react";
import useLogin from "@/hooks/use-signin";
import { useRouter } from "next/navigation";
import { useAuth } from "./authContext";

export const LoginInput = () => {
    const { email, password, handleEmailChange, handlePasswordChange, login } = useLogin();
    const { setEmail, setPassword, setMemberSeq } = useAuth(); // 수정된 부분
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState<string | null>(null);
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        setLoading(true);
        setError(null);

        login()
            .then((response) => {
                if (response) {
                    console.log("Login successful");
                    // 로그인 성공 시 상태 업데이트
                    setEmail(email);
                    setPassword(password);
                    setMemberSeq(response.data?.member_seq);
                    router.push("/home");
                } else {
                    setError("Login failed. Please check your credentials.");
                }
            })
            .catch((err) => {
                console.error("Login failed", err);
                setError("An unexpected error occurred.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
            <Input
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => handleEmailChange(e.target.value)}
            />
            <Input
                className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => handlePasswordChange(e.target.value)}
            />
            <button
                type="submit"
                className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                disabled={loading}
            >
                {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </form>
    );
};
