import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  listHeader: {
    fontSize: "calc(0.8rem + 1vw)",
  },
  list: {
    marginTop: "30px",
    width: "100%",
    textAlign: "left",
    fontSize: "0.8rem",
  },
}));

export default function ProductAccordion({ name, description }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Description</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {name && description && (
              <div>
                <span className={classes.listHeader}>{name}</span>
                <ul className={classes.list}>
                  {description.map((item, i) => (
                    <li key={i}>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Care and Istruction</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className="makeStyles-list-10 accordianitems">
          <li>
            All Upholstery snag effectively and can be harmed by sharp-edged
            knife, toys, jewelry, clasps, and pets. Snags, when they do happen,
            ought to be cut utilizing scissors. By no means should you endeavor
            to pull it out.
          </li>
          <li>
            Exposure of Direct Sunlight over a long period of time results in
            the lightning of color of upholstery(light in color) and
            additionally may reduce the life span of upholstery. When arranging
            your room, orchestrate your furniture so it is shielded from
            sunlight.
          </li>
          <li>
            Clean your upholstery once per week with a delicate brush or vacuum
            cleaner as collected soil or dirt will quicken wear and dull the
            colors.
          </li>
          <li> Carefully abstain from using bleach when washing your upholstery.</li>
          <li>To prevent leatherette from cracking or peeling, Vinyl conditioner or leather conditioner needs to be applied to the Leatherette every 3 to 4 months for a long product life.</li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Customer Review</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h6 className="accodidanHeading">
          No Review Yet.
        </h6>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
      <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>FAQs</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h6 className="accodidanHeading">
          For any inquiries or explanations regarding with the product, do not
          hesitate to contact our Customer Support on  +91-9899027251.
        </h6>
        <h6 className="accodidanHeading"> Does Lofty Dreams Recliner Chair require Installation?</h6>
        <h6 className="accodidanHeading">Understanding Your Product:</h6>
        <ul className="makeStyles-list-10 accordianitems ">
        <li>
            Self-Installation:- Our product comes you in an almost pre-assembled
            state. Once you received your product, please inform us and asked
            for the installation video we will provide you video for
            installation
          </li>
        </ul>
        <h6 className="accodidanHeading">  What is the warranty period of the product?</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
          This product comes with 2-years warranty which covers manufacturing
            defects, inherent termite and borer issues. For more details please
            visit the "warranty tab"
          </li>
        </ul>
        <h6 className="accodidanHeading">On Delivery:</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
          Would be my wood finish and upholstery color show up equivalent to
          on-site?
          </li>
         
        </ul>
        
        <ul className="makeStyles-list-10 accordianitems">
          <li>
          We guarantee to deliver the ideal product as you see and order.
            There may be conceivable outcomes you will encounter a slight
            variation in upholstery color and wood wrap up, the showed goal can
            make a minor contrast in the physical product. The distinctive
            presentation goal could account for a reason for the distinction in
            the product.
          </li>
         
        </ul>
        <h6 className="accodidanHeading">
        Is my item made out of 100% strong wood?
        </h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            The base arrangement of the furniture item is made utilizing strong
            wood. Then again, certain particular structures are made out of
            auxiliary segments, for example, Ply, Veneer, MDF, or partial board
            that is more qualified.
          </li>
        </ul>
        <h6 className="accodidanHeading">Estimate Time for a delivery ?</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            We dispatch your products within 1 week from the date of the order
            you placed.
          </li>
          <li>
            The course of events fluctuates as per the items, If the item is
            available in the stock, it may get dispatched before to the given
            timetable.
          </li>
        </ul>
        <h6 className="accodidanHeading">Is the delivery FOC "Free Of Cost"?</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Yes, the delivery of your product is free in most of the areas of
            India For some particular pin codes, (in which we do not deliver),
            We charge extra for ODA out of the delivery area. To check out the
            exact amount of shipping generously connect with our help group.
          </li>
        </ul>
        <h6 className="accodidanHeading">Custom Made Products:</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Time period of dispatch will extend for a customized product, as the
            product would be made as per your requirement.
          </li>
          <li>
            Notwithstanding, if there should arise an occurrence of uncommon
            circumstances like vehicle strike, riots, regular disasters (like
            downpours, flood, quakes, and so on.), it may happen that the
            delivery time may surpass than the guaranteed course of time. In
            such circumstances; you will be given updates about your product,
            and Lofty Dreams will be capable to keep your product on priority
            and deliver at most punctual as could reasonably be expected. We
            unassumingly demand your participation in the above remarkable
            circumstances, as your help is fundamental to guarantee that we keep
            on continuing serving you with top-notch furniture.
          </li>
          <li>
            Genuine delivery time may shift as indicated by your shipping area.
            This delivery time is not pertinent for some particular pin codes.
          </li>
        </ul>
        <h6 className="accodidanHeading">
          Is the delivery would be at my doorstep?
        </h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Doorstep delivery is possible on our every listed product all over
            India. only in the case. The product would be delivered on the
            ground floor if the delivery would be above the ground then the
            facility of lift must exist otherwise delivery boy deliver your
            product at ground floor.
          </li>
        </ul>
        <h6 className="accodidanHeading">
          Is my purchase amount inclusive of all taxes?
        </h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Yes, Mentioned Prices on all the products are inclusive of all the
            taxes including delivery charges.
          </li>
        </ul>
        <h6 className="accodidanHeading">
          Do I need to submit any documents for receiving my delivery?
        </h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Yes, You need to submit your ID proof (Adhar Card, Driving Licence,
            Voter Card, etc.).
          </li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Terms and Conditions</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <h6 className="accodidanHeading">
          For any inquiries or explanations regarding with the product, do not
          hesitate to contact our Customer Support on +91-9899027251.
        </h6>
        <h6 className="accodidanHeading">Understanding Your Product:</h6>
        <ul className="makeStyles-list-10 accordianitems ">
          <li>
            Adornments that appeared in the photo are intended for portrayal
            purposes just and are not part of the real item.
          </li>
          <li>
            Furniture products having complex and hand-made subtleties have been
            carefully made by skilled workers, following on the strides of a few
            ages of achieved craftsmen. Each bit of such Furniture is,
            therefore, one of a kind, and there is a possibility of slight
            contrasts between the image and the real product.
          </li>
        </ul>
        <h6 className="accodidanHeading">Before Placing An Order:</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Kindly check the dimensions of your passage/entryway to your area
            before purchasing, so that there is no issue in getting the product
            inside at the hour of delivery. In such a circumstance, we will not
            able to acknowledge return or cancellation.
          </li>
        </ul>
        <h6 className="accodidanHeading">On Delivery:</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            On Delivery: Our support and delivery team will be as a team with
            you for an issue free assembling /installation process.
          </li>
          <li>
            Free delivery is just relevant for the absolute first endeavor on a
            visit to your ship-to address. If there should be an occurrence of a
            missed delivery, (from a client)/an additional visiting charge would
            be appropriate for later assembling/installation. Our delivery
            accomplice will just deliver the product to the ground floor without
            a helping lift in your loft.
          </li>
          <li>
            Additional charges are pertinent for the end of the week or explicit
            time deliveries. Once the ordered product has reached your closest
            delivery place and you neglect to get the product, we would hold the
            items for 10 days, after this timetable, Lofty Dreams will be
            allowed to charge or cancel the order.
          </li>
        </ul>
        <h6 className="accodidanHeading">Damages:</h6>
        <ul className="makeStyles-list-10 accordianitems">
          <li>
            Lofty Dreams delivery to your home has been intended to guarantee a
            zero-damage. Please inform us immediately, If you found any
            defect/damage to the item, get it the notification of delivery
            faculty promptly at the hour of delivery, & report a grievance at
            loftydreams18@gmail.com.
          </li>
          <li>
            Damage & deformity(defect) will be surveyed in 72 hours, and a
            solution will be given. In the event that in the assessment of Lofty
            Dreams, the item is broken, then it may be returned, replaced, or
            repaired, or some other restorative measure may be taken, as
            considered proper by Lofty Dreams, to address the issue.
          </li>
        </ul>
        <h6 className="accodidanHeading">
          Any missing parts required in the installation /assembly of the item
          ought to be quickly informed to our Customer Support team, so they can
          be managed to be delivered to you at the earliest opportunity.
        </h6>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Disclaimer</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className="makeStyles-list-10 accordianitems">
          <li>
            {" "}
            Adornments exhibited in the picture are simply to give a thought
            regarding the arrangement. These are not a piece of the product,
            except if determined.
          </li>
          <li>
            There may be slight distinction in leatherette or fabric color
            between the site pictures and actual product, due to the diverse
            monitor screen settings and resolutions.
          </li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Quality Promise</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <ul className="makeStyles-list-10 accordianitems">
          <li>
            {" "}
            Every product is checked before dispatch. Product is quality tested,
            we have divided the test into five stages which are Mechanisms,
            Wood, Foam, Upholstery, & Packaging.
          </li>
          <li>
            We work intimately with our vendors to guarantee top tier nature of
            raw material and finished product.
          </li>
        </ul>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}