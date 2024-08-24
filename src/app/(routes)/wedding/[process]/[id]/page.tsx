import { redirect } from "next/navigation";

interface Props {
  params: {
    process: string;
  };
}

const Page = async ({ params: { process } }: Props) => {
  
  return (
    <main>
      {/* <div className="flex justify-center">{renderProcess()}</div> */}
      <div className="flex justify-center">this is selected page</div>
    </main>
  );
};

export default Page;
