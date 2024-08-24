"use client";

import * as React from "react";
import { LabelInput } from "@/components/shared/label-input";
import { ComboboxDemo } from "@/components/ui/combobox";
import BackButton from "@/components/ui/back-button";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import {useAuth} from "@/app/authContext";
import { useRouter } from "next/navigation";
import solution from "@/api/solution";

interface ApiRequest {
    member_seq: number;
    region: string;
    budget: number;
    hall: boolean;
    hall_per: number;
    studio: boolean;
    studio_per: number;
    dress: boolean;
    dress_per: number;
    make_up: boolean;
    make_up_per: number;
    gift: boolean;
    gift_per: number;
    dowry: boolean;
    dowry_per: number;
    parent_make_up: boolean;
    parent_make_up_per: number;
    parent_dress: boolean;
    parent_dress_per: number;
}

const Page = () => {

    const { memberSeq } = useAuth();

    const router = useRouter();

    const [region, setRegion] = useState("서울");
    const [budget, setBudget] = useState(1000000);


    const [hallPer, setHallPer] = useState(0);
    const [studioPer, setStudioPer] = useState(0);
    const [dressPer, setDressPer] = useState(0);
    const [makeUpPer, setMakeUpPer] = useState(0);
    const [giftPer, setGiftPer] = useState(0);
    const [dowryPer, setDowryPer] = useState(0);
    const [parentMakeUpPer, setParentMakeUpPer] = useState(0);
    const [parentDressPer, setParentDressPer] = useState(0);


    const handleSubmit = async () => {
        const request: ApiRequest = {
            member_seq: parseInt(memberSeq),
            region,
            budget,
            hall: hallPer > 0,
            hall_per: hallPer / 100,
            studio: studioPer > 0,
            studio_per: studioPer / 100,
            dress: dressPer > 0,
            dress_per: dressPer / 100,
            make_up: makeUpPer > 0,
            make_up_per: makeUpPer / 100,
            gift: giftPer > 0,
            gift_per: giftPer / 100,
            dowry: dowryPer > 0,
            dowry_per: dowryPer / 100,
            parent_make_up: parentMakeUpPer > 0,
            parent_make_up_per: parentMakeUpPer / 100,
            parent_dress: parentDressPer > 0,
            parent_dress_per: parentDressPer / 100,
        };

        try {
            const response = await solution(request);
            console.log("API response:", response);

            router.push("/home");

        } catch (error) {
            console.error("Error submitting data:", error);
        }
    };

    return (
        <main className="flex items-center justify-center p-4 bg-gray-50 min-h-screen">
            <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
                <div className="mb-6">
                    <BackButton />
                </div>

                <div className="space-y-6">
                    <div className="space-y-4">
                        <ComboboxDemo value={region} onChange={setRegion} />
                        <LabelInput
                            label="예산"
                            type="number"
                            placeholder="예산을 입력하세요"
                            value={budget.toString()} // Convert budget to a string if necessary
                            onValueChange={(value) => setBudget(parseInt(value))}
                        />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                웨딩홀 비율: {hallPer}%
                            </label>
                            <Slider value={hallPer} onChange={setHallPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                스튜디오 비율: {studioPer}%
                            </label>
                            <Slider value={studioPer} onChange={setStudioPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                드레스 비율: {dressPer}%
                            </label>
                            <Slider value={dressPer} onChange={setDressPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                메이크업 비율: {makeUpPer}%
                            </label>
                            <Slider value={makeUpPer} onChange={setMakeUpPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                예물 비율: {giftPer}%
                            </label>
                            <Slider value={giftPer} onChange={setGiftPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                혼수 비율: {dowryPer}%
                            </label>
                            <Slider value={dowryPer} onChange={setDowryPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                부모님 메이크업 비율: {parentMakeUpPer}%
                            </label>
                            <Slider value={parentMakeUpPer} onChange={setParentMakeUpPer} />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                부모님 의상 비율: {parentDressPer}%
                            </label>
                            <Slider value={parentDressPer} onChange={setParentDressPer} />
                        </div>
                    </div>

                    <div className="text-right">
                        <button
                            onClick={handleSubmit}
                            className="inline-block px-6 py-3 bg-blue-600 text-white font-medium text-sm leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                        >
                            제출
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Page;
