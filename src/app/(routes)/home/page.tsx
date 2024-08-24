"use client";

import React from "react";
import First from "./sections/first";
import { useAuth } from "@/app/authContext";

interface Props {
    params: {
        process: string;
    };
}

const Page = () => {

    const { memberSeq } = useAuth(); // AuthContext에서 memberSeq를 가져옵니다.

    

    React.useEffect(() => {
        console.log("Member Seq:", memberSeq); // memberSeq의 값이 바뀔 때마다 콘솔에 출력합니다.
    }, [memberSeq]);

    const renderProcess = () => {
        return <First />;
    };

    return (
        <main>
            <div className="flex justify-center">{renderProcess()}</div>
        </main>
    );
};

export default Page;
