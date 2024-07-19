import React from 'react';

interface DescriptionProps {
  text: string;
}

export const Description: React.FC<DescriptionProps> = ({ text }) => (
  <div className="p-4 text-xl text-center">{text}</div>
);
