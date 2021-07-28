import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default function AlertDialog({ open, handleClose }) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {"Payment service is not available!"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description"> <strong>
          Payment service is currently not available. Please! buy our products
          from Pepperfry!
          </strong>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          href="https://www.pepperfry.com/site_product/search?q=Lofty+dreams"
          target="_blank"
          color="primary"
        >
       <strong> Pepperfry </strong>   
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
