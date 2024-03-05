import React from "react";
import { useDrag } from "react-dnd";

const type = "section";

const Education: React.FC<{
  index: number;
  moveSection: (dragIndex: number, hoverIndex: number) => void;
}> = ({ index, moveSection }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "section",
    item: { id: "education", index },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult<{ hoverIndex: number }>();
      if (item && dropResult) {
        moveSection(item.index, dropResult.hoverIndex);
      }
    },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      Education
    </div>
  );
};

export default Education;
