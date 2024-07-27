import Image from "next/image";

export default function NoResultFound() {
  return (
    <div className="flex justify-center items-center h-[calc(85vh)] bg-gray-100 rounded-lg">
      <Image
        src="/no-product-found.png"
        alt="no-product-found"
        width={400}
        height={400}
        className="flex items-center justify-center col-span-3"
        sizes="100vw"
        loading="lazy"
      />
    </div>
  );
}
