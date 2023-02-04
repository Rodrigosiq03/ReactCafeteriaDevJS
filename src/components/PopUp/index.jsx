import React from 'react';
import { Snackbar } from '@mui/material';

export default function PopUp({ message, open, action, handleClose }) {
    

    return (
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message={message}
        action={action}
      />
    )
}