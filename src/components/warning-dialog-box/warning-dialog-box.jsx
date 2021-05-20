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
        <DialogContentText id="alert-dialog-description">
          Payment service is currently not available. Please! buy our products
          from amazon.in!
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          href="https://www.amazon.in/s?me=A1YF33ZDTB7JEG&marketplaceID=A21TJRUUN4KGV"
          target="_blank"
          color="primary"
        >
          amazon.in
        </Button>
        <Button onClick={handleClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
