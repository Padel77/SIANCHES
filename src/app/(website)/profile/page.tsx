import { Background } from "@/components/background/Background";
import { GetDataInServerSide } from "@/lib/action";
import Logo1 from "../../../../public/assets/about/Rectangle.svg";

export default async function page() {

  let fetchedData;
  try {
    const response = await GetDataInServerSide("/profile/");
    fetchedData = JSON.stringify(response.data) || response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <Background
        imageUrl={Logo1}
        className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-lg mx-auto"
        title={"Profile"}
        showButton={false}
      />
    </>
  );
}
