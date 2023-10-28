import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const NotDevelop = ({ isOpen, onClose }) => {
  return (
<Dialog open={isOpen} onClose={onClose}>
      <DialogTitle>This Page is Not Developed Yet</DialogTitle>
      <DialogContent>
        <p>Sorry, the page you are trying to access is currently under development.</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NotDevelop;
