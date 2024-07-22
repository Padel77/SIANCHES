import { Background } from "@/components/background/Background";
import BeAmbassador from "@/components/home/BeAmbassador";
import ContactForm from "@/components/home/Contact";
import OurPartners from "@/components/home/OurPartners";
import Properties from "@/components/home/Properties";
import PropertyCard from "@/components/home/PropertyCard";
import RealAdversting from "@/components/home/RealAdversting";
import { GetDataInServerSide } from "@/lib/action";

export default async function Home() {
  let fetchedData;
  try {
    const response = await GetDataInServerSide("/home/");
    fetchedData = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <Background
        imageUrl={fetchedData?.sliders[0]?.image}
        className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-lg mx-auto"
        title={fetchedData?.sliders[0]?.title}
        showButton={true}
      />
      <div className="container mx-auto ">
        <PropertyCard weHelpYou={fetchedData?.we_help_you} />
        <Properties properties={fetchedData?.properties} />
        <RealAdversting />
        {/* <RecentlyAdded recently_added={fetchedData?.recently_added} /> */}
        <BeAmbassador />
        <OurPartners partners={fetchedData?.partners} />
        <ContactForm
          phoneNumber={fetchedData?.contact_info?.phone}
          emailAddress={fetchedData?.contact_info?.email}
        />
      </div>
    </>
  );
}
