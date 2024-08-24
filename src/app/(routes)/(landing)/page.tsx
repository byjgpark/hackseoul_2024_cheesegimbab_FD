import * as React from "react";
import { LoginInput } from "./components/login-inputs";
import { LoginButton } from "./components/login-btns";

const Page = async () => {
  return (
    <main className="flex items-center justify-center mt-6">
      <div>
        <h2 className="mb-4 text-center font-medium">AI-Wedding Login</h2>
        <div>
          <LoginInput></LoginInput>
          <LoginButton></LoginButton>
        </div>      
      </div>
    </main>
  );
};

export default Page;
