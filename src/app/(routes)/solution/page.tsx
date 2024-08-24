"use client";

import * as React from "react";
import { LabelInput } from "@/components/shared/label-input";
import { CheckboxReactHookFormMultiple } from "@/components/ui/mutiple-checkbox";
import { ComboboxDemo } from "@/components/ui/combobox";
import BackButton from "@/components/ui/back-button";

const Page = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
      <main className="p-4 bg-gray-50 min-h-screen">
        <div className="max-w-lg mx-auto">
          <div className="mb-6">
            <BackButton />
          </div>

          <div className="bg-white shadow-md rounded-lg p-6 space-y-6">
            <div className="space-y-4">
              <ComboboxDemo />
              <LabelInput type="text" placeholder="예산">
                예산
              </LabelInput>
            </div>

            <div>
              <CheckboxReactHookFormMultiple />
            </div>

            <div className="text-right">
              <button
                  onClick={toggleDropdown}
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
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
