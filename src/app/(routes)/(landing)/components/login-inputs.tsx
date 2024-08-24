

import { Input } from "@/components/ui/input"
import * as React from "react"
import Link from 'next/link'
 
// import { Card, CardContent } from "@/components/ui/card"

export const LoginInput = () => {
  return (
    <form className="flex flex-col">
        <Input className="mb-4" type="username" placeholder="username" />
        <Input className="mb-4" type="password" placeholder="password" />
    </form>
  )
}
