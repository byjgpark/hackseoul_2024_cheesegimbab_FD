"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import useLogin  from "@/hooks/use-signin"; 

export const LoginButton = () => {

  const {email, password, login } = useLogin();
  
  // console.log("check emil in the loginbtn", email, "password", password)
  
  return (
    <div className="flex justify-center">
      <Link href="/home">
        <Button onClick={()=> login(email, password)}>Login</Button>
      </Link>
    </div>
  );
};
