import React from 'react';
import { Modal, Box, Typography, Button } from '@mui/material';

const ConfirmModal = ({ open, handleClose, onConfirm, title, content }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="confirm-modal-title"
      aria-describedby="confirm-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          direction:'rtl'
        }}
      style={{direction:'rtl'}}

      >
        <Typography id="confirm-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Typography id="confirm-modal-description" sx={{ mt: 2 }}>
          {content}
        </Typography>
        <Box sx={{ mt: 3, display: 'flex', justifyContent: 'flex-end' }}>
          <Button onClick={handleClose} color="secondary">
            إلغاء
          </Button>
          <Button onClick={onConfirm} color="error" sx={{ ml: 2 }}>
            حذف
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ConfirmModal;
