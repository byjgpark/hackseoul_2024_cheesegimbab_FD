"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const LoginButton = () => {
  return (
    <div className="flex justify-center">
      <Link href="/wedding">
        <Button>Login</Button>
      </Link>
    </div>
  );
};
