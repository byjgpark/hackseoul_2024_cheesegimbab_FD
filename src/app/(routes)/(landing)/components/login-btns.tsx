"use client";

import { useRouter } from "next/navigation";
import useLogin from "@/hooks/use-signin";
import { Button } from "@/components/ui/button";

export const LoginButton = () => {
    const { login, loading, error } = useLogin();
    const router = useRouter();

    const handleLogin = () => {
        login()
            .then((response) => {
                if (response) {
                    // 로그인 성공 시, 홈 페이지로 이동
                    router.push("/home");
                }
            })
            .catch((err) => {
                console.error("Login failed", err);
            });
    };

    return (
        <div className="flex justify-center">
            <Button onClick={handleLogin} disabled={loading}>
                {loading ? "Logging in..." : "Login"}
            </Button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>
    );
};
