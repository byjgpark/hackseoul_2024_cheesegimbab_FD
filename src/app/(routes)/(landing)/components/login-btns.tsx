"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useLogin  from "@/hooks/use-signin.tsx"; 

export const LoginButton = () => {


  const { login } = useLogin();
  
  return (
    <div className="flex justify-center">
      <Link href="/">
        <Button onClick={()=> login()}>Login</Button>
      </Link>
    </div>
  );
};
