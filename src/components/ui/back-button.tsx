"use client"

import * as React from "react";
import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    const handleBack = () => {
        router.back(); // 이전 페이지로 이동
    };

    return (
        <button
            onClick={handleBack}
            style={{
                padding: "10px 20px",
                fontSize: "16px",
                cursor: "pointer",
                backgroundColor: "#0070f3",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                margin: "10px 0",
            }}
        >
            ← Back
        </button>
    );
}
