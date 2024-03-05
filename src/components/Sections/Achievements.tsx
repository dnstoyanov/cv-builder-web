import React from "react";
import { useDrag } from "react-dnd";

const type = "section";

const Achievements: React.FC<{
  index: number;
  moveSection: (dragIndex: number, hoverIndex: number) => void;
}> = ({ index, moveSection }) => {
  const [{ isDragging }, drag] = useDrag({
    type: "section",
    item: { id: "achievements", index },
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
      Achievements
    </div>
  );
};

export default Achievements;
