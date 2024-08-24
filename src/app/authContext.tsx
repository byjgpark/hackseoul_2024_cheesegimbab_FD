"use client";

import * as React from "react";

interface AuthContextProps {
    email: string;
    password: string;
    handleEmailChange: (email: string) => void;
    handlePasswordChange: (password: string) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
    memberSeq: string;
    setMemberSeq: (memberSeq: string) => void;
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthProvider>
            <html lang="en">
            <body>{children}</body>
            </html>
        </AuthProvider>
    );
}

const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [memberSeq, setMemberSeq] = React.useState<string>("");

    const handleEmailChange = (email: string) => {
        setEmail(email);
    };

    const handlePasswordChange = (password: string) => {
        setPassword(password);
    };

    return (
        <AuthContext.Provider value={{
            email,
            password,
            handleEmailChange,
            handlePasswordChange,
            setEmail,
            setPassword,
            memberSeq,
            setMemberSeq
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
