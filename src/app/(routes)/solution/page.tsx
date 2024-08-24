"use client";

import * as React from "react";
import { LabelInput } from "@/components/shared/label-input";
import { CheckboxReactHookFormMultiple } from "@/components/ui/mutiple-checkbox";
import { ComboboxDemo } from "@/components/ui/combobox";
import BackButton from "@/components/ui/back-button";
import {useEffect} from "react";
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
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: ApiRequest = {
            member_seq: 1,
            region: "서울",
            budget: 1000000,
            hall: true,
            hall_per: 0,
            studio: true,
            studio_per: 0,
            dress: true,
            dress_per: 0,
            make_up: true,
            make_up_per: 0,
            gift: true,
            gift_per: 0,
            dowry: true,
            dowry_per: 0,
            parent_make_up: true,
            parent_make_up_per: 0,
            parent_dress: true,
            parent_dress_per: 0
        };

        const response = await solution(res);

        console.log("API response:", response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
      <main className="flex items-center justify-center p-4 bg-gray-50 min-h-screen">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <ComboboxDemo />
              <LabelInput type="text" placeholder="예산"/>
            </div>

            <div>
              <CheckboxReactHookFormMultiple />
            </div>

            <div className="text-right">
              <button
                  onClick={toggleDropdown}
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