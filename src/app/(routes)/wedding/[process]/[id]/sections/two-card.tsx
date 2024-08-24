'use client';


import { useEffect, useState } from "react";

import { chatApi } from "@/api/testApi";

// interface Props {
//   params: {
//     process: string;
//   };
// }

const TwoCard = (
    // { params: { process } }: Props
) => {

    const [aiResponse, setAiResponse] = useState(null);
    const [error, setError] = useState(null);

    const req = {
        query: {
          promptMessage: 'Hello, AI!',  // Example of a query parameter
        },
      } as any;

    useEffect(() => {
        // chatApi(req);


        const fetchAiResponse = async () => {
            try {
              const promptMessage = '결혼식 언제 할까'; // Your prompt message
              const encodedPromptMessage = encodeURIComponent(promptMessage);
              const url = `http://172.18.8.126:8080/api/v1/ai-generate?promptMessage=${encodedPromptMessage}`;
      
              const response = await fetch(url, {
                method: 'GET',
                headers: {
                  'Accept': '*/*',
                },
              });
      
              if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
              }
      
              const data = await response.json();
              console.log("check ", data)
              setAiResponse(data); // Assuming the response is JSON
            } catch (error) {
              setError(error.message);
            }
          };
      
          fetchAiResponse();
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
