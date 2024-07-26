import React from "react";

interface BreadcrumbProps {
  items: { label: string; href: string }[];
  children?: React.ReactNode;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, children }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            <a href={item.href} className="text-gray-500 hover:text-gray-700">
              {item.label}
            </a>
            {index < items.length - 1 && (
              <svg
                className="w-4 h-4 mx-2 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </li>
        ))}
      </ol>
      {children}
    </nav>
  );
};

export default Breadcrumb;