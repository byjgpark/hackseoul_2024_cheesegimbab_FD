"use client";

import {useEffect, useState} from "react";
import chatApi from "@/api/twoCardApi";
import BackButton from "@/components/ui/back-button"; // Ensure chatApi is exported as default in testApi

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

export function TwoCard() {

    const[solutionMessage, setSolutionMessage] = useState<SolutionMessage>();

    const req = {
        query: {
            promptMessage: 'Hello, AI!',  // Example of a query parameter
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = {
                    status: (statusCode: number) => ({
                        json: (data: any) => data,
                    }),
                };
                const response = await chatApi(req);

                setSolutionMessage(response);

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
                            <h2 className="text-xl font-bold mb-4 text-gray-800">{solutionMessage?.basic?.title}</h2>
                            <p className="text-4xl font-bold mb-6 text-gray-900">{solutionMessage?.basic?.price}</p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">{solutionMessage?.basic?.solution}</span>
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
                            <h2 className="text-xl font-bold mb-4 text-gray-800">{solutionMessage?.premium?.title}</h2>
                            <p className="text-4xl font-bold mb-6 text-gray-900">{solutionMessage?.premium?.price}</p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">{solutionMessage?.premium?.solution}</span>
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
