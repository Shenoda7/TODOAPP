import React from "react";
import { Dialog, DialogTitle, DialogActions, Button } from "@mui/material";

function TodoDetails({ todoDetails, openDialog, setOpenDialog, setDetails }) {
  function handleClose() {
    setOpenDialog(false);
    setDetails(null);
  }
  return (
    <>
      <Dialog open={openDialog} onClose={handleClose}>
        <DialogTitle>{todoDetails?.todo}</DialogTitle>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default TodoDetails;
