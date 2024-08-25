'use client';

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
            <TwoCard id={id} />
        </main>
    );
};

export default Page;
