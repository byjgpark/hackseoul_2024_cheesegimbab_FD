// 'use client'

// import * as React from "react";
// import { Separator } from "@radix-ui/react-separator";
// import { useRouter } from 'next/navigation';
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"; // 카드 컴포넌트를 import 합니다.

// const First = (props: any) => {

//   console.log("First props", props);

//   const router = useRouter();

//   const testData = [
//     { id: 1, name: "결혼하지 마세요" },
//     { id: 2, name: "결혼은 비싸여" },
//     { id: 3, name: "" },
//     { id: 4, name: "Bob test 123 123 123123 123 " },
//     { id: 5, name: "Bob test 123 123 123123 123 " },
//     { id: 6, name: "Bob test 123 123 123123 123 " },
//     { id: 7, name: "Bob test 123 123 123123 123 " },
//     { id: 8, name: "Bob test 123 123 123123 123 " },
//     { id: 9, name: "Bob test 123 123 123123 123 " },
//     { id: 10, name: "Bob test 123 123 123123 123 " },
//     { id: 11, name: "Bob test 123 123 123123 123 " },
//   ];

//   const handleClick = () => {
//     router.push(`../../twocard`);
//   }

//   return (
//       <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
//         {testData.map((item) => (
//             <Card key={item.id} onClick={() => handleClick()} className="cursor-pointer hover:shadow-lg transition-shadow">
//               <CardHeader>
//                 <CardTitle>{props.title}</CardTitle>
//                 <CardDescription>ID: {item.id}</CardDescription>
//               </CardHeader>
//               <CardContent>
//                 <p>Additional content can go here.</p>
//               </CardContent>
//               <CardFooter>
//                 <span>Footer content</span>
//               </CardFooter>
//               <Separator className="mt-4" />
//             </Card>
//         ))}
//       </div>
//   );
// };

// export default First;
'use client'

import * as React from "react";
import { Separator } from "@radix-ui/react-separator";
import { useRouter } from 'next/navigation';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

interface ListItem {
  id: number;
  title: string;
  subTitle: string;
}

interface FirstProps {
  prop: ListItem[];
}

const First: React.FC<FirstProps> = ({ prop }) => {
  const router = useRouter();

  console.log("First props", prop);

  const handleClick = () => {
    router.push(`../../twocard`);
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-4">
      {prop.map((item) => (
        <Card key={item.id} onClick={() => handleClick()} className="cursor-pointer hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>ID: {item.id}</CardDescription>
          </CardHeader>
          <CardContent>
            <p>{item.subTitle}</p>
          </CardContent>
          <Separator className="mt-4" />
        </Card>
      ))}
    </div>
  );
};

export default First;
