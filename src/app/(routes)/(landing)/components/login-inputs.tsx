"use client";

import { Input } from "@/components/ui/input";
import * as React from "react";
import { useRouter } from "next/navigation";
import useLogin from "@/hooks/use-signin";

export const LoginInput = () => {
    const { email, password, handleEmailChange, handlePasswordChange } = useLogin();

    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
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
            >
                Sign In
            </button>
        </form>

    );
};
