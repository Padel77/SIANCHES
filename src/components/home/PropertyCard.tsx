import Image from "next/image";
import React from "react";

const PropertyCard: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="md:w-1/2">
        {/* <Image
          src="/path/to/image.jpg"
          alt="Property"
          className="w-full h-full object-cover"
        /> */}
      </div>
      <div className="p-6 md:w-1/2">
        <h2 className="text-2xl font-bold mb-2">
          We Help You Realize Your Dream Property
        </h2>
        <p className="text-gray-700 mb-4">
          Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget
          felis porttitor volutpat.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Read More
        </button>
        <div className="mt-4 flex space-x-4">
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17h-2v-2.07a6.002 6.002 0 01-4-5.93h2a4 4 0 004 4V7h2v4.07a6.002 6.002 0 014 5.93h-2a4 4 0 00-4-4V17h-2v-2.07z"></path>
            </svg>
            <span className="text-sm">Property Management</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17h-2v-2.07a6.002 6.002 0 01-4-5.93h2a4 4 0 004 4V7h2v4.07a6.002 6.002 0 014 5.93h-2a4 4 0 00-4-4V17h-2v-2.07z"></path>
            </svg>
            <span className="text-sm">Great Local Support</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17h-2v-2.07a6.002 6.002 0 01-4-5.93h2a4 4 0 004 4V7h2v4.07a6.002 6.002 0 014 5.93h-2a4 4 0 00-4-4V17h-2v-2.07z"></path>
            </svg>
            <span className="text-sm">Mortgage Services</span>
          </div>
          <div className="flex flex-col items-center">
            <svg
              className="w-6 h-6 text-blue-500"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14.93V17h-2v-2.07a6.002 6.002 0 01-4-5.93h2a4 4 0 004 4V7h2v4.07a6.002 6.002 0 014 5.93h-2a4 4 0 00-4-4V17h-2v-2.07z"></path>
            </svg>
            <span className="text-sm">Great Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
