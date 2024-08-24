"use client";

import {useEffect, useState} from "react";
import { useRouter } from 'next/router';
import chatApi from "@/api/twoCardApi";
import BackButton from "@/components/ui/back-button"; // Ensure chatApi is exported as default in testApi
import detailApi from "@/api/detailApi";

interface SolutionMessage {
    basic: {
        title: string;
        price: number;
        solution: string;
    },
    premium: {
        title: string;
        price: number;
        solution: string;
    };
}

export function TwoCard(id: any) {

console.log("check id", id)

// const router = useRouter();
    // console.log("check router", router.query.id);

    const req = {
        query: {
            promptMessage: 'Hello, AI!',  // Example of a query parameter
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                
                const response = await detailApi(id);


                console.log("check response", response);

                // setSolutionMessage(response);

                console.log("API response:", response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
            <div className="w-full max-w-lg px-6 space-y-6">
                <div className="flex justify-start">
                    <BackButton />
                </div>
                <div className="flex justify-center space-x-8 mt-6">
                    {/* Basic Plan */}
                    <div className="w-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col justify-between">
                        <div>
                            {/* <h2 className="text-xl font-bold mb-4 text-gray-800">123123</h2> */}
                            <p className="text-4xl font-bold mb-6 text-gray-900">Basic</p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">웨딩홀 2000만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">웨딩드레스 300만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">스튜디오 촬영 200만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">메이크업 헤어 100만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">뷔페 1,500만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">기타 500만원</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
                            BUY NOW
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="w-72 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow bg-white flex flex-col justify-between">
                        <div>
                            {/* <h2 className="text-xl font-bold mb-4 text-gray-800">Plan</h2> */}
                            <p className="text-4xl font-bold mb-6 text-gray-900">Premium</p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">웨딩홀 3,000만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">웨딩드레스 600만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">스튜디오 촬영 900만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">메이크업 및 헤어 400만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">뷔페 1,500만원</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">기타 1,000만원</span>
                                </li>
                            </ul>
                        </div>
                        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors mt-auto">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoCard;
