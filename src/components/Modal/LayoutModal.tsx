// LayoutModal.tsx
"use client";
import React, { useState, useCallback } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDrop } from "react-dnd";
import Education from "../Sections/Education";
import Achievements from "../Sections/Achievements";
import PersonalInfo from "../Sections/PersonalInfo";
import Skills from "../Sections/Skills";

interface LayoutModalProps {
  open: boolean;
  handleClose: () => void;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const LayoutModal: React.FC<LayoutModalProps> = ({ open, handleClose }) => {
  const [sections, setSections] = useState([
    { id: "education", Component: Education },
    { id: "achievements", Component: Achievements },
    { id: "personalInfo", Component: PersonalInfo },
    { id: "skills", Component: Skills },
  ]);

  const moveSection = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const dragItem = sections[dragIndex];
      const updatedSections = [...sections];
      updatedSections.splice(dragIndex, 1);
      updatedSections.splice(hoverIndex, 0, dragItem);
      setSections(updatedSections);
    },
    [sections]
  );

  const [, drop] = useDrop({
    accept: "section",
    hover(item: { id: string; index: number }, monitor) {
      const dragIndex = item.index;
      const hoverIndex = sections.findIndex((s) => s.id === item.id);

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = (
        monitor.getItem() as HTMLElement
      ).getBoundingClientRect();

      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      const clientOffset = monitor.getClientOffset();

      const hoverClientY = clientOffset!.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveSection(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
    drop(item: { id: string; index: number }, monitor) {},
  });

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} ref={drop}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Arrange Sections
        </Typography>

        {sections.map((sectionItem, index) => {
          const SectionComponent = sectionItem.Component;
          return (
            <SectionComponent
              key={sectionItem.id}
              index={index}
              moveSection={moveSection}
            />
          );
        })}
      </Box>
    </Modal>
  );
};

export default LayoutModal;
