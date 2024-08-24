"use client";

import { useEffect } from "react";
import chatApi from "@/api/testApi";
import BackButton from "@/components/ui/back-button"; // Ensure chatApi is exported as default in testApi

const TwoCard = () => {
    const req = {
        query: {
            promptMessage: 'Hello, AI!',  // Example of a query parameter
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await chatApi(req);
                console.log("API response:", response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);  // Empty dependency array ensures this runs only once on mount

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
                            <h2 className="text-xl font-bold mb-4 text-gray-800">Basic</h2>
                            <p className="text-4xl font-bold mb-6 text-gray-900">$6.99</p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Reprehenderit in voluptate velit.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Duis aute irure.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-500">&#10007;</span>
                                    <span className="ml-2 text-gray-500">Exercitation ullamco laboris.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-500">&#10007;</span>
                                    <span className="ml-2 text-gray-500">Magna aliqua.</span>
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
                            <h2 className="text-xl font-bold mb-4 text-gray-800">Premium</h2>
                            <p className="text-4xl font-bold mb-6 text-gray-900">$9.99</p>
                            <ul className="mb-6 space-y-2">
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Reprehenderit in voluptate velit.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Duis aute irure.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Exercitation ullamco laboris.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Magna aliqua.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">Reprehenderit in voluptate velit.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-500">&#10007;</span>
                                    <span className="ml-2 text-gray-500">Sed do eiusmod tempor cididunt.</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-gray-500">&#10007;</span>
                                    <span className="ml-2 text-gray-500">Lorem ipsum dolor sit amet.</span>
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
