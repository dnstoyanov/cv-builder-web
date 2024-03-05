import React from "react";

interface DraggableSectionProps {
  name: string;
}

const DraggableSection: React.FC<DraggableSectionProps> = ({ name }) => {
  return (
    <div className="cursor-move p-2 border border-gray-300 my-2">{name}</div>
  );
};

export default DraggableSection;
