"use client"

import { Input } from "@/components/ui/input"
import * as React from "react"
import Link from 'next/link'
import { useState } from "react";
import { useRouter } from 'next/navigation';
import useLogin  from "@/hooks/use-signin.tsx"; 


 
  export const LoginInput = () => {

    const { email, password, handleEmailChange, handlePasswordChange } = useLogin();

    console.log("check password", password, "email", email);

    // const [username, setUsername] = useState("");
    // const [password, setPassword] = useState("");


    const router = useRouter();
    

    const handleLogin = (e: React.FormEvent) => {
      
      e.preventDefault();

      // console.log("username", username, 'password', password);

      // Perform login logic here
      // Example: send username and password to server for authentication
      // If successful, redirect to dashboard page
      // router.push("/home");
    };

    return (
      <form className="flex flex-col" onSubmit={handleLogin}>
        <Input
          className="mb-4"
          type="text"
          placeholder="Username"
          value={email}
          onChange={(e) => handleEmailChange(e.target.value)}
        />
        <Input
          className="mb-4"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  };

 

