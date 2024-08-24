"use client";

import * as React from "react";
import {LoginInput} from "./components/login-inputs";
import {LoginButton} from "./components/login-btns";
import {AuthProvider} from "./components/authContext";

const Page = async () => {
    return (
        <AuthProvider>
            <main className="flex items-center justify-center h-screen px-4">
                <div className="w-full max-w-sm bg-white p-6 rounded-lg shadow-md">
                    <h2 className="mb-6 text-center text-2xl font-semibold text-gray-800">
                        AI-Wedding Login
                    </h2>
                    <div className="space-y-4">
                        <LoginInput/>
                        <LoginButton/>
                    </div>
                </div>
            </main>
        </AuthProvider>
    );
};

export default Page;
