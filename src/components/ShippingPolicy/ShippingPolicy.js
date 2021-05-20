import React from "react";
import "./ShippingPolicy.css";
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
}));

const ShippingPolicy = () => {
  const classes = useStyles();
  return (
    <div className="shipping-policy">
      <h3> SHIPPING & DELIVERY POLICY </h3>
      <div className={classes.root}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong>Do you ship to my city and location ? </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  {" "}
                  We currently deliver in Delhi, Haryana, Uttar Pradesh, Punjab,
                  Rajasthan, Bihar, Kerala, Karnataka, Maharashtra, Gujarat,
                  Madhya Pradesh, Jammu & Kashmir, Telangana, Andhra Pradesh,
                  West Bangal, Odisha, Tamil Nadu, Goa, Uttarakhand, Chandigarh,
                  Chennai, Puducherry, Himachal Pradesh.{" "}
                </li>
              </ul>
              <h6 className="shipping-h6">DELHI</h6>
              <span> New Delhi, Old Delhi</span>

              <h6 className="shipping-h6">Goa</h6>
              <span> Goa </span>

              <h6 className="shipping-h6">Gujarat</h6>
              <span>
                Ahmedabad | Anand | Ankleshwar | Bharuch | Bhuj | Changodar |
                Gandhidham | Gandhinagar | Halol | Himatnagar | Jamnagar |
                Mehsana | Nadiad | Rajkot | Sanand | Surendranagar | Vadodara
              </span>

              <h6 className="shipping-h6">Haryana </h6>
              <span>
                {" "}
                Bahadurgarh | Bawal | Dharuhera | Faridabad | Gurgaon | Jhajjar
                | Karnal | Khandewla | Manesar | Palwal | Panipat | Pataudi |
                Rewari | Rohtak | Sohna | Sonipat{" "}
              </span>

              <h6 className="shipping-h6">Karnataka </h6>
              <span>
                {" "}
                Bangalore | Bangarpet | Chikkaballapura | Chikkatirupati |
                Chintamani | Hassan | Hoskote | Kolar | Mandya | Mulbagal |
                Mysuru | Ramanagara | Shidlaghatta | Tumkur{" "}
              </span>

              <h6 className="shipping-h6">Kerala </h6>
              <span>
                {" "}
                Alappuzha | Arimpur | Ernakulam | Idukki | Kannur | Kochi |
                Kottayam | Kozhikode | Malapuram | Munnar | Palakkad | Ponnani |
                Thiruvalla | Thiruvananthapuram | Thrissur | Tiruvalla |
                Vannapuram{" "}
              </span>

              <h6 className="shipping-h6"> Madhya Pradesh </h6>
              <span> Gwalior </span>

              <h6 className="shipping-h6">Maharashtra</h6>
              <span>
                {" "}
                Alibaug | Ambarnath | Arnala | Aurangabad | Badlapur | Boisar |
                Kalyan | Kamshet | Karad | Karjat | Kolhapur | Lavasa | Lonavla
                | Mahabaleshwar | Mumbai | Nashik | Navi Mumbai | Panchagani |
                Pen | Pune | Sangli | Satara | Sindhudurg | Thane | Uran | Virar
              </span>

              <h6 className="shipping-h6">Pondicherry</h6>
              <span> Pondicherry </span>

              <h6 className="shipping-h6">Rajasthan</h6>
              <span> Alwar | Bhiwadi | Jaipur | Neemrana | Tapukara </span>

              <h6 className="shipping-h6">Tamil Nadu </h6>
              <span>
                Aanamalai | Anikorai | Athikunna | Athipalli | Avanshi |
                Bellevue | Chengalpattu | Chennai | Cherambadi | Cherambadi Tea
                Division | Cherumulli | Coimbatore | Dindigul | Erode |
                Gobichettipalayam | Hosur | Kanchipuram | Karaikudi | Karur |
                Kil Kotagiri Bazaar | Madurai | Mahabalipuram | Namakkal | Ooty
                | Palani | Pattukottai | Salem | Sangagiri | Sathyamangalam |
                Tharapuram | Thirchgode | Thirunallur | Tiruchirappalli |
                Tirupattur | Tiruppur | Udumalaipet | Vallparai | Vellore |
                Virudhunagar | Yercaud
              </span>

              <h6 className="shipping-h6">Telangana</h6>
              <span>
                {" "}
                Amdapur | Arutla | Chinnagolkonda | Gandipet | Hyderabad |
                Secunderabad | Station Ghanpur | Warangal{" "}
              </span>

              <h6 className="shipping-h6">Uttar Pradesh</h6>
              <span>
                {" "}
                Agra | Ghaziabad | Greater Noida | Mathura | Meerut | Moradabad
                | Noida{" "}
              </span>

              <h6 className="shipping-h6">Uttarakhand</h6>
              <span> Almora | Roorkee </span>

              <h6 className="shipping-h6">West Bengal</h6>
              <span>
                {" "}
                Amtala | Asansol | Burdwan | Diamond Harbour | Durgapur |
                Halishahar | Hooghly | Howrah | Ichhapur | Kankinara | Kolkata |
                Nadia | Naihati | Palta | Shyamnagar{" "}
              </span>
              <h6 className="shipping-h6">Andhra Pradesh </h6>
              <span>
                {" "}
                Aler | Anantapur | Bhongir | Chittoor | Cuddapah | Ghatkesar |
                Hindupur | Jangam | Nellore | Palamner | Pocharam | Puttaparthi
                | Tirupati | Yadagirigutta
              </span>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong>
                {" "}
                Are there any shipping charges or any other installation
                charges?{" "}
              </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  We charge for shipments in certain Pincodes. Any extra charges
                  like entry taxes will be borne by us. As you enter a pin-code
                  in the address field at the time of ordering a product, the
                  system will indicate whether we charge for shipments to your
                  pin-code or not.
                </li>
                <li>
                  {" "}
                  However, if in certain remarkable cases, we concur to deliver
                  the product/s in non-serviceable pin-codes, we may deliver the
                  product at your doorstep given the transportation/shipping
                  cost is borne by you at actuals in advance.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong> What is the estimated delivery time? </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              While placing an order please input your Pincode to see the
              estimated delivery time. The estimated delivery time is based on a
              couple of varying factors:
              <ul>
                <li> Availability of Product </li>
                <li> Your Location </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong> How do I track my order? </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  {" "}
                  In order to check your “Order Status” just to sign-up at
                  loftydreamsrecliners.com and go to the order tracking page:
                  www.loftydreamsrecliners.com/orders.
                </li>
                <li>
                  Once you order the product, Lofty Dreams takes 12 days to
                  deliver your ordered product at your mentioned billing
                  address. Sometimes delaying in delivery due to many reasons
                  like Festival Seasons, Disasters, etc. Here we take 15 to 18
                  days maximum for delivery. In that case, our team will inform
                  you in advance through Phone Call or Email and give the status
                  of your product where it is and when will reach.
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong>
                {" "}
                What should I check when the product is delivered to me?{" "}
              </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Please follow all the following steps as below, when the product
              is delivered to you:
              <ul>
                <li>
                  {" "}
                  Customer be ensure that the product you have received is
                  completed packed throughout.
                </li>
                <li>
                  After ensuring the quality of packaging, Customer has to check
                  the external surface or parts of the product whether it is
                  breakages, chip-offs, cracks, or any other defects.{" "}
                </li>
                <li>
                  {" "}
                  The product you have received is exactly the same as you
                  ordered or not.
                </li>
                <li>
                  {" "}
                  For all Manual or Motorized Recliners, followings steps should
                  follow. <p />
                  <ol>
                    <li>
                      Customer has to experience the comfort level of the
                      seating area, arms, and back.{" "}
                    </li>
                    <li>
                      {" "}
                      Be ensure that structure of the recliner is stable with
                      your weight on it or not.
                    </li>
                    <li>
                      While operating the recliner mechanism, be ensure whether
                      there is any unwanted Sound or Vibration coming out from
                      the recliner chair or not.
                    </li>
                    <li>
                      Please check, If there is any additional function in your
                      ordered recliner chair like Rocker+Revolving mechanism,
                      USB Port for charging, LED back light, Cooling Cupholder,
                      Touch sensor, Storage box, DST revolving table etc.{" "}
                    </li>
                  </ol>
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong> What if I receive a damaged product? </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <ul>
                <li>
                  {" "}
                  Lofty Dreams has its own manufacturing unit and has highly
                  skilled workers. Our team inspects each product quality to
                  ensure the product is up to our standards before packing.
                </li>
                <li>
                  {" "}
                  In case you receive a damaged or defective product, Please
                  call us (+919899027251) immediately to our personnel or send a
                  message at loftydreams18@gmail.com
                </li>
                <li>
                  Our team will inspect the damage/defective product and get
                  back to you within 3 business days. Our team will determine
                  the degree of damage whether the product is repairable or not,
                  if not then Lofty Dreams will replace the older one.{" "}
                </li>
              </ul>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography className={classes.heading}>
              {" "}
              <strong> Can I cancel the order? </strong>{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We ensure the quality, design, and durability of our product in
              all aspect. Still, if you do not like the product, or not
              suitable/fit to your space, then you may cancel the order only in
              the following cases and in the following manner.
              <ol>
                <li>
                  {" "}
                  <u>Cancellation before delivery </u> – You can cancel your
                  order at any time within 2 days from the date you placed
                  order, just you have to logging into your account and
                  selecting the ‘Request cancellation’ option. For cancellations
                  made before a Delivery Attempt, any advance paid will be
                  refunded as per Lofty Dreams refunds policy. However, in case
                  of cancellation of any Made To Order (customize) product
                  within 24 hours of placing the order, a full refund will be
                  initiated, after the 24-hour you will be charged 25% of the
                  order value as a restocking fee.{" "}
                </li>
                <li>
                  {" "}
                  <u>Cancellation at the time of delivery </u> – In any case you
                  are unhappy with a product, you may return the same on the
                  spot, at the time of delivery. You have to pay both side
                  delivery charges . Cancellation at the time of delivery is not
                  allowed for Made To Order(Customize) Products.{" "}
                </li>
                <li>
                  {" "}
                  <u> Cancellation after delivery is not allowed </u> – After
                  delivery of the product, only After Sales services will be
                  applicable, and cancellation is not an option.
                </li>
              </ol>
              Is there a cancellation fee applicable?
              <p>
                {" "}
                Cancellation fees is applicable in the case of Made To Order
                (MTO) products. But, if you cancel within 24 hours of placing
                the order, you will receive a full refund. after the 24-hour you
                will be charged 25% of the order value as a restocking fee.
                Please also note that, if you cancel the order at the time of
                delivery then you have to pay delivery charges of both side. We
                do not offer exchanges or cancellations for Made To Order
                Products.
              </p>
              <h7>
                {" "}
                NOTE:-Once we have delivered the product and left the customer’s
                premises, we will not be able to accept any cancellation or
                replacement requests (except as covered by the product
                warranty). We advise customers that customers must be present at
                the time of delivery to check the product at an instant. If a
                customer found any type of defects or damage to their product
                then, please inform our team immediately. If possible then
                please send some photographs or videos also. Our team will
                definitely resolve the issue as soon as possible.
              </h7>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ShippingPolicy;
