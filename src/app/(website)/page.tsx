import Properties from "@/components/home/Properties";
import PropertyCard from "@/components/home/PropertyCard";
import RealAdversting from "@/components/home/RealAdversting";
import RecentlyAdded from "@/components/home/RecentlyAdded";
import { NavbarProps } from "@/lib/types";
interface HomeProps {
  data: [];
}
const Home: React.FC<HomeProps> = ({ data }) => {
  console.log("customProp",data);

  return (
    <div className="container mx-auto py-4">
      <PropertyCard />
      <Properties />
      <RealAdversting />
      <RecentlyAdded />

    </div>
  );
}

export default Home;
