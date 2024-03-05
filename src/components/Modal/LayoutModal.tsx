import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";

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
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Arrange Sections
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Drag and drop sections to rearrange your CV layout.
        </Typography>
        {/* Draggable sections will be added here */}
      </Box>
    </Modal>
  );
};

export default LayoutModal;
