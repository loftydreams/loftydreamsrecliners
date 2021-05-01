import React, { Component } from "react";
import Faq from "react-faq-component";
import "./termsandcondition.css";

const data = {
  title: "Terms and Conditions",
  rows: [
    {
      title: "Terms",
      content:
        "These terms and conditions of use (“Terms of Use” or “Terms”) of the website www.loftydreamsrecliners.com and instances thereof (“Website”) between LOFTY DREAMS PRIVATE LIMITED, a company incorporated under the Companies Act, 1956, (“Company” or “LOFTY DREAMS RECLINERS” and its successors and assigns) and the users of the Website (“You” or “Your” or “Yourself” or “User”) describe the terms on which the Company offers You access to the Website. PLEASE READ THE “TERMS AND CONDITIONS” CAREFULLY BEFORE USING, VIEWING, ACCESSING OR SUBSCRIBING ON THE WEBSITE OR ACCESSING ANY MATERIAL, INFORMATION OR SERVICES THROUGH THE WEBSITE. YOUR USE OF THE WEBSITE OR THE SERVICES PROVIDED BY THE WEBSITE SHALL SIGNIFY YOUR UNCONDITIONAL ACCEPTANCE OF THE TERMS AND YOUR AGREEMENT TO BE LEGALLY BOUND BY THE SAME. ",
    },
    {
      title: "Price",
      content:
        "Prices for items are depicted on our Website and are market seen costs. All Prices are in Indian rupees and may change at Lofty Dreams’s prudence.The prices given on this website are for online orders. Prices and the accessibility of Items are liable to change without notice. Any Prices utilized on this website may not be characteristic of the actual selling prices in the offline store.",
    },
    {
      title: "Service",
      content:
        " loftydreamsrecliners.com offers an online platform to sell recliner furniture products and merchandise on the website. We provide the services through online portal to customers/users to purchase home, office, cinema recliners upon placing an order. Once an order placed by the customer/user, the Company will ship the product, and the customer/user will be entitled to pay for it.",
    },
    {
      title:"Disclaimer",
      content:
        "Lofty Dreams Pvt. Ltd. claims all authority to make changes to the site, related Agreements and Policies, Terms & Conditions, Privacy Policy at any time. The specifications of any product (weight, dimension, color, etc) mentioned with the product photos are only approximate. There may be a little bit variation in the pictures and the respective products. It is consider as normal.At the time of visiting the Lofty Dreams Pvt. Ltd. website, guests are to know that all photos and text on the site which may incorporate ceaselessly any substance showed, is the property of Lofty Dreams Pvt. Ltd. No guest is allowed to duplicate or copy, replicate, or resemble any of the information on the Lofty Dreams website.The user/visitor may painstakingly peruse all the information on products and services as given in pertinent segments. By utilizing any of our services you concur that you have perused, comprehended, and limited by the Terms and Condition of Lofty Dreams Pvt. Ltd. In the event that you would prefer not to be limited by the Terms, you should not register in to or utilize our services.While Lofty Dreams Pvt. Ltd. bends over backward to guarantee content exactness on its site, guests are to be exhorted that delays between cost updates and site changes, stock accessibility, and other specialized and administrative issues may make data be briefly erroneous on the Lofty Dreams Pvt. Ltd. site. In such cases, Lofty Dreams Pvt. Ltd. accepts no accountability for the burden caused. www.loftydreamsrecliners.com deals are “first come, first served” premise. The product isn’t restocked once sold out. No data with respect to the nearness of any Product in our stock will be ensured and we will caution you just when a thing is sold out.",
    },
    {
        title:"Indemnity",
        content:
          "You consent to repay, safeguard and hold innocuous to Lofty Dreams from and against any misfortunes, liabilities, claims, harms, expenses, and costs (remembering lawful expenses and distributions for association therewith and intrigue chargeable consequently) affirmed against or caused by Lofty Dreams that emerge out of, result from, or might be payable by the righteousness of, any penetrate or non-execution of any portrayal, guarantee, pledge or understanding made or commitment to be performed by you as per these Terms.",
      },
      {
        title: "Force Majeure",
        content:
          "No Party will be considered to be in default if the execution of the commitments required by this terms and conditions is deferred or becomes unimaginable as a result of any demonstration of God, War, Fire, Strike or other work unsettling influences, mechanical or common disturbance or interruption, riots, pandemic, demonstrations of Government, its organizations or officials, or whatever other authentic reason which isn’t because of any demonstration or oversight of the Parties, outside the ability to control of the Parties and not being because of lack of funds or financing.",
      },
      {
        title:"Usage Conduct",
        content:
          "To access, utilize and execute on this Website you ought to approach PC types of system/gadgets and Internet connection. Lofty Dreams thusly allows You a non-elite, unreservedly revocable non-transferable access to see, download and print item indexes or some other materials accessible on the Website, subject to the accompanying conditions:You may access and utilize the materials exclusively for individual, educational, and inward purposes, as per the Terms.You may not edit or modify product catalog or some other materials accessible on the website.You may not right to delete/remove any content, copyright or other restrictive notification contained in the product catalog or some other materials accessible on the website.Anything that is accessible on the website is the property of Lofty Dreams. You may not utilize, download or  any product accessible at the website, except if in any case explicitly allowed by Lofty Dreams. You recognize that Lofty Dreams may reach you by means of email or different methods for your request or changes or adjustments to the request or for promotional purpose.",
      },
      {
        title:"Governing Law",
        content:
          "The Terms and all transactions between You and “Lofty Dreams Recliners” will be represented as per the laws of India. without reference to any contention of laws standards and debates emerging in connection hereto shall be subject to the exclusive jurisdiction of the Delhi. Lofty Dreams Pvt. Ltd. will present different offers or schemes on various occasions and Lofty Dreams maintains whatever authority is needed to change/edit/include/erase any of the terms and conditions persuading the distinctive special offers/schemes acquainted in market from time to time.",
      },
      {
        title:"Communication",
        content:
          "You thusly consent to get messages and pamphlets from Lofty Dreams by SMS and E-Messages. You can unregister/quit from getting interchanges and pamphlets from Lofty Dreams at whenever by following the methodology set out in the Website.",
      },
      {
        title:"Color Disclaimer",
        content:
          "Why follow fixed timings when you can browse whatever you need, whenever you are? Shops can’t show in excess of a fixed number of designs, variants – a limit never faced digitally. While searching for furniture on the web, India shows an unmistakable inclination for spotless & clean, contemporary structures & designs. You can search for numerous such ranges on our site. Browse Now|Amazon.in  One more preferred position of choosing furniture online is that a physical space can never display enough categories, variants or sizes. At the point when you buy recliner furniture online, you can see the features, benefits, functionality, and usefulness of every item. No more relying on the staff to recall and convey each point – anyway large or small. You can likewise sort the items utilizing some parameter, or apply filters according to your requirements, look at the same number of choices as you need, and add your liking products to your wishlist.",
      },
  ],
};

export default class TermsAndCondition extends Component {
  render() {
    return (
      <div className="online-offline">
        <Faq data={data} />
      </div>
    );
  }
}
