import React, { Component } from "react";
import Faq from "react-faq-component";
import "./oflineVsOnline.css";

const data = {
  title: "OFFLINE vs ONLINE STORE",
  rows: [
    {
      title: "Offline Store",
      content:
        "Spend valuable time to visit 6-7 stores with your family, wait for the personnel to attend to you, compare with prices, features, and discounts, wrangle over the ‘last’ cost, lastly wonder about the quality of wood, upholstery, mechanisms, and workmanship. ",
    },
    {
      title: "Online Store",
      content:
        "Unquestionably there must be a superior method to outfit your fantasy home? At any time anywhere, Online furniture shopping is a quiet and easy way. No need to move here and there, make your life hassle-free.",
    },
    {
      title: "Why hesitate to buy Furniture Online",
      content:
        " When you can buy Household Misc. items, grocery, common assets, vacation packages, and Gadgets on the web, why hesitate to buy furniture on an online platform? The quality is at up to the marks with or far superior to than offline platform. Furniture online is likewise secured under excellent warranty terms. Additionally gives you highly discounts & more wide range of option to select furnitur  We offer you a wide assortment of choices recliners at the online platform. You can browse many designs, categories, colors, functionalities, and sizes, all whenever the timing is perfect",
    },
    {
      title:
        "Offline Platform is time consuming and not possible to keep all the things on display.",
      content:
        "Why follow fixed timings when you can browse whatever you need, whenever you are? Shops can’t show in excess of a fixed number of designs, variants – a limit never faced digitally. While searching for furniture on the web, India shows an unmistakable inclination for spotless & clean, contemporary structures & designs. You can search for numerous such ranges on our site. Browse Now|Amazon.in  One more preferred position of choosing furniture online is that a physical space can never display enough categories, variants or sizes. At the point when you buy recliner furniture online, you can see the features, benefits, functionality, and usefulness of every item. No more relying on the staff to recall and convey each point – anyway large or small. You can likewise sort the items utilizing some parameter, or apply filters according to your requirements, look at the same number of choices as you need, and add your liking products to your wishlist.",
    },
  ],
};

export default class OfflineVsOnline extends Component {
  render() {
    return (
      <div className="online-offline">
        <Faq data={data} />
      </div>
    );
  }
}
