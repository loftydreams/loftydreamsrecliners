import { makeStyles } from "@material-ui/core/styles";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from "react-share";

const useStyles = makeStyles({
  icon: {
    margin: "0 5px 5px 5px",
    "&:hover": {
      color: "blue !important",
      transform: "scale(1.2)",
    },
  },
});

const ProductShare = ({ name }) => {
  const classes = useStyles();
  const url = window.location.href;

  return (
    name && (
      <>
        <WhatsappShareButton title={name} url={url} className={classes.icon}>
          <WhatsAppIcon fontSize="small" />
        </WhatsappShareButton>
        <FacebookShareButton quote={name} url={url} className={classes.icon}>
          <FacebookIcon fontSize="small" />
        </FacebookShareButton>
        <TwitterShareButton title={name} url={url} className={classes.icon}>
          <TwitterIcon fontSize="small" />
        </TwitterShareButton>
        <LinkedinShareButton title={name} url={url} className={classes.icon}>
          <LinkedInIcon fontSize="small" />
        </LinkedinShareButton>
      </>
    )
  );
};

export default ProductShare;
