import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";

export default function MessageDialog (props) {
    return (
      <div>
        <Dialog
          open={props.open}
          onClose={props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {props.headerMessage}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {props.message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose} autoFocus>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  };