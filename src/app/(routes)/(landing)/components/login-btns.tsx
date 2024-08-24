"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import useLogin from "@/hooks/use-signin";

export const LoginButton = () => {
    const { email, password, login, loading, error } = useLogin();

    return (
        <div className="flex justify-center">
            <Link href="/home">
                <Button onClick={() => login(email, password)} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                </Button>
            </Link>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};
