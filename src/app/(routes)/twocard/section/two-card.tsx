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

   // Step 1: Define the useState hook for the JSON data
   const [solutionMessage, setSolutionMessage] = useState({
    basic: {
        dowry: null,
        dowry_address: null,
        dowry_price: null,
        dress: null,
        dress_address: null,
        dress_price: null,
        gift: null,
        gift_address: null,
        gift_price: null,
        hall: false,
        hall_address: "",
        hall_price: null,
        make_up: null,
        make_up_address: null,
        make_up_price: null,
        parent_dress: null,
        parent_dress_address: null,
        parent_dress_price: null,
        parent_make_up: null,
        parent_make_up_address: null,
        parent_make_up_price: null,
        studio: null,
        studio_address: null,
        studio_price: null,
        title: "",
        totalPrice: null
    },
    premium: {
        dowry: null,
        dowry_address: null,
        dowry_price: null,
        dress: null,
        dress_address: null,
        dress_price: null,
        gift: null,
        gift_address: null,
        gift_price: null,
        hall: false,
        hall_address: "",
        hall_price: null,
        make_up: null,
        make_up_address: null,
        make_up_price: null,
        parent_dress: null,
        parent_dress_address: null,
        parent_dress_price: null,
        parent_make_up: null,
        parent_make_up_address: null,
        parent_make_up_price: null,
        studio: null,
        studio_address: null,
        studio_price: null,
        title: "",
        totalPrice: null
    }
});

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await detailApi(id);
            console.log("API response:", response);

            // Step 3: Update the state with the response data
            setSolutionMessage(response);

            console.log("solutionMessage", solutionMessage);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();
}, [id]);

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
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">식장 : {solutionMessage.basic.hall_name}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">식장장소 : {solutionMessage.basic.hall_address}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">식장가격 : {solutionMessage.basic.hall_price}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-blue-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                             
                            </ul>
                        </div>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors mt-auto">
                            총가격 :{solutionMessage.basic.totalPrice}
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
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">식장 : {solutionMessage.premium.hall_name}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">식장장소 : {solutionMessage.premium.hall_address}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700">식장가격 : {solutionMessage.premium.hall_price}</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                <li className="flex items-center">
                                    <span className="text-green-500">&#10003;</span>
                                    <span className="ml-2 text-gray-700"></span>
                                </li>
                                
                            </ul>
                        </div>
                        <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors mt-auto">
                         총가격 :{solutionMessage.premium.totalPrice}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TwoCard;
