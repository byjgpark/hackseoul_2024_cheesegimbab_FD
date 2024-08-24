import { redirect } from "next/navigation";
import First from "./sections/first";
import Second from "./sections/second";
import Third from "./sections/third";

interface Props {
  params: {
    process: string;
  };
}

const Page = async ({ params: { process } }: Props) => {
  console.log("check", typeof process);

  const parsedProcess = parseInt(process, 10);

  console.log("check parsedProcess", parsedProcess);

  const renderProcess = () => {     

    if (parsedProcess === 1) return <First></First>
    if (parsedProcess === 2) return <Second></Second>
    if (parsedProcess === 3) return <Third></Third>
  };

  return (
    <main>
      <div className="flex justify-center">{renderProcess()}</div>
    </main>
  );
};

export default Page;
