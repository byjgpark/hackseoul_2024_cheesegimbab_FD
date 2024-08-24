'use client';

import { redirect } from "next/navigation";
import TwoCard from "../../twocard/section/two-card";

interface Props {
  params: {
    id: string;
  };
}

const Page = async ({ params: { id } }: Props) => {

    console.log("check id", id);
  
  return (
    <main>
      {/* <div className="flex justify-center">{renderProcess()}</div> */}
      {/* <div className="flex justify-center">this is selected page</div> */}
      <TwoCard prop={id}></TwoCard>
    </main>
  );
};

export default Page;
