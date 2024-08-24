"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import useLogin from "@/hooks/use-signin.tsx";

export const LoginButton = () => {
    const { login } = useLogin();

    return (
        <div className="flex justify-center mt-4">
            <Button
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
                onClick={() => login()}
            >
                Login
            </Button>
        </div>
    );
};
