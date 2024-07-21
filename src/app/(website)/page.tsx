import Properties from "@/components/home/Properties";
import PropertyCard from "@/components/home/PropertyCard";
import RealAdversting from "@/components/home/RealAdversting";
import RecentlyAdded from "@/components/home/RecentlyAdded";

export default async function Home() {
  return (
    <div className="container mx-auto py-4">
      <PropertyCard />
      <Properties />
      <RealAdversting />
      <RecentlyAdded />

    </div>
  );
}
