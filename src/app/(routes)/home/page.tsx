import First from "./sections/first";

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

    return <First></First>
  };

  return (
      <main>
        <div className="flex justify-center">{renderProcess()}</div>
      </main>
  );
};

export default Page;
