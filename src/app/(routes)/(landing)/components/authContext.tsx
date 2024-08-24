import * as React from "react";

// AuthContext에서 제공할 데이터와 함수를 정의한 인터페이스
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

// Context 생성 및 초기값 설정
const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);

// AuthProvider 컴포넌트 정의
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

// AuthContext를 사용하기 위한 커스텀 훅
export const useAuth = () => {
    const context = React.useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
