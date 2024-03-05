"use client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Card from "./Card";
import LayoutModal from "./Modal/LayoutModal";
import { useState } from "react";

export default function Builder() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div>Builder</div>
      <div className="flex justify-center">
        <button
          onClick={handleOpenModal}
          className="transition ease-in-out delay-100 bg-blue-500 px-4 py-2 rounded-lg text-white hover:bg-blue-600"
        >
          Open Modal
        </button>
      </div>
      <LayoutModal open={modalOpen} handleClose={handleCloseModal} />
    </DndProvider>
  );
}
