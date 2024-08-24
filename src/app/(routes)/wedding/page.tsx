'use client';

import { redirect } from "next/navigation";
import * as React from "react";
import Link from "next/link";
import DropDown from "@/components/ui/dropdown";
import { LabelInput } from "@/components/shared/label-input";
import { Button } from "@/components/ui/button";
import { CheckboxReactHookFormMultiple } from "@/components/ui/mutiple-checkbox";
import { ComboboxDemo } from "@/components/ui/combobox";

const Page =  () => {

    const [isOpen, setIsOpen] = React.useState(false);
  //   redirect('/wedding/1')
  

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <main>
      <div className="flex justify-center">
        

        {/* <div className="grid grid-cols-2 gap-1">
        <DropDown></DropDown>  
        <LabelInput type="text" placeholder="Buget"></LabelInput>
        <input type="checkbox" placeholder="no"></input>
        <DropDown></DropDown>  
        <LabelInput> </LabelInput>
        <LabelInput> </LabelInput>
        <LabelInput> </LabelInput>        
        </div>         */}
        
        <div className="grid grid-cols-1 gap-1">
          <CheckboxReactHookFormMultiple></CheckboxReactHookFormMultiple>
          <div className="flex flex-row w-full h-full">
      <div className="flex-1">
        <ComboboxDemo />
      </div>
      <div className="flex-1">
        <LabelInput />
      </div>
    </div>
    
        </div>

      </div>
      
    </main>
  );
};

export default Page;
