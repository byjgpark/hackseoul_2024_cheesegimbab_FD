'use client';

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { chatApi } from "/src/api/testApi.ts";

// interface Props {
//   params: {
//     process: string;
//   };
// }

const TwoCard = (
    // { params: { process } }: Props
) => {


    useEffect(() => {
        chatApi();
    });

    return (
        <div>
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex space-x-8 text-black">
                    {/* Starter Plan */}
                    <div className="w-64 p-6  rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold  mb-4">Basic</h2>
                        <p className="text-4xl font-bold  mb-6">$6.99</p>
                        <ul className="mb-6 ">
                            <li className="flex items-center mb-2">
                                <span className="text-blue-500">&#10003;</span>
                                <span className="ml-2">Reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-blue-500">&#10003;</span>
                                <span className="ml-2">Duis aute irure.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Exercitation ullamco laboris.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Magna aliqua.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Sed do eiusmod tempor cididunt.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Lorem ipsum dolor sit amet.</span>
                            </li>
                        </ul>
                        <button className="w-full bg-blue-600  py-2 rounded-lg hover:bg-blue-700">
                            BUY NOW
                        </button>
                    </div>

                    {/* Basic Plan */}
                    <div className="w-64 p-6  rounded-lg shadow-lg">
                        <h2 className="text-xl font-bold  mb-4">Premium</h2>
                        <p className="text-4xl font-bold  mb-6">$9.99</p>
                        <ul className="mb-6 ">
                            <li className="flex items-center mb-2">
                                <span className="text-green-500">&#10003;</span>
                                <span className="ml-2">Reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-green-500">&#10003;</span>
                                <span className="ml-2">Duis aute irure.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-green-500">&#10003;</span>
                                <span className="ml-2">Exercitation ullamco laboris.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-green-500">&#10003;</span>
                                <span className="ml-2">Magna aliqua.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-green-500">&#10003;</span>
                                <span className="ml-2">Reprehenderit in voluptate velit.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Sed do eiusmod tempor cididunt.</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <span className="text-gray-500">&#10007;</span>
                                <span className="ml-2">Lorem ipsum dolor sit amet.</span>
                            </li>
                        </ul>
                        <button className="w-full bg-green-600  py-2 rounded-lg hover:bg-green-700">
                            BUY NOW
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoCard;
