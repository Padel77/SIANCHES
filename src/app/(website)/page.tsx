import { Background } from "@/components/background/Background";
import BeAmbassador from "@/components/home/BeAmbassador";
import ContactForm from "@/components/home/Contact";
import OurPartners from "@/components/home/OurPartners";
import Properties from "@/components/home/Properties";
import PropertyCard from "@/components/home/PropertyCard";
import RealAdversting from "@/components/home/RealAdversting";
import Carousel from "@/components/ui/carousel";
import { GetDataInServerSide } from "@/lib/action";


export default async function Home() {
  let fetchedData;
  try {
    const response = await GetDataInServerSide("/home");
    fetchedData = response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }

  return (
    <>
      <Background
        imageUrl={fetchedData?.sliders[0]?.image ? fetchedData?.sliders[0]?.image : "https://s3-alpha-sig.figma.com/img/5420/8e91/86a06b633c48008f7af5904b3677f755?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oJTwb69IwPeGSJILMlXROrTAUiAOoN3c1Uvyo2qOWNFKIIMJQAZwgPIodCbG2Z2JcJq4Ds4N6pNx7U5URYUx2ndrgCMO219485STcKNMTT1WOA7TF0xcnOWKM2xb0oH-KRqRorwA-lsrJvtTZYEf7sEqoejEB6hYHnENLtiWSsmn3FbF989o3KTJqCwT0SaQ1xh1oGXcgoyvCQ7m54pBS60CC6daqo0n0gHzAL2-Be8Vvapiw4AHL7UK5JwD3zrKgJj7bxYPX1uBcOQuBVDC8Q1jH4MW-3j6pUOL1uvcrTMKIioDJvW2~oyFoIGl46DoxEuLCisYtFh3fI1588ZbCw__"}
        className="flex h-full text-center items-center justify-center md:text-7xl text-5xl  italic font-bold max-w-lg mx-auto"
        title={fetchedData?.sliders[0]?.title ? fetchedData?.sliders[0]?.title : "We Help You Realize Your Dream Property"}
        showButton={true}
      />
      <div className="container mx-auto ">
        <PropertyCard weHelpYou={fetchedData?.we_help_you} />
        <Properties properties={fetchedData?.properties} />
        <RealAdversting />
        <Carousel items={fetchedData?.recently_added} />
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
