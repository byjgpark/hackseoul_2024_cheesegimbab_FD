import { redirect } from "next/navigation";
import TwoCard from "../../twocard/section/two-card";

interface Props {
  params: {
    process: string;
  };
}

const Page = async ({ params: { process } }: Props) => {
  
  return (
    <main>
      {/* <div className="flex justify-center">{renderProcess()}</div> */}
      {/* <div className="flex justify-center">this is selected page</div> */}
      <TwoCard></TwoCard>
    </main>
  );
};

export default Page;
