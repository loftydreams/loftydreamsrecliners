import React from "react";
import "./paymentpolicy.css"

export default function PaymentPolicy() {
  return (
    <div className="payment-policy">
      <h1 className="payment__h">Payment and Security Policy</h1>
      <p className="payment__p" >
        Lofty Dreams ensures that every transaction you conduct with us is in a
        safe and secure environment. Please read this given below details on
        payments and how we ensure security.
      </p>
      <h2 className="payment__p_h">What are the payment options which Lofty Dreams provides me?</h2>
      <p className="payment__p">Lofty Dreams provides you to shop with any of the following options</p>
      <div className="payment__main">
        <div className="payment__first">
          <div className="p_f_f">
          <h2>1. Credit and Debit Cards </h2>
            <p className="payment__p">
              Accept payments from all major credit and debit card networks like
              Visa, Mastercard, American Express and RuPay. And now also accept
              international card payments from customers in various countries
              including US, Europe, South East Asia etc.
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FCredit-Cards.jpg?alt=media&token=6a5bb2fb-2d50-40bf-a230-00aa046704bb" alt="credit-debit-card"/>
          </div>
        </div>
        <div className="payment__second">
        <div className="p_f_f">
            <h2>2. EMI on Credit Card </h2>
            <p  className="payment__p">
            Customers can pay in monthly installments on major bank credit cards.
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FEMI-card.jpg?alt=media&token=1b4b7702-d9f8-46f6-b40a-b4a1ebd46450" alt="EMI"/>
          </div>
        </div>
        <div className="payment__third">
        <div className="p_f_f">
            <h2>3. UPI </h2>
            <p className="payment__p">
            UPI is a new mobile-first payment mode for making payments to friends or businesses. Accept UPI payments without writing any additional code or remembering your VPA. Simply use apps like PhonePe, BHIM, WhatsApp, etc. to directly accept payments.
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FUPI.jpg?alt=media&token=1ca16e2e-471d-491e-930b-d9cf18067dca" alt="UPI"/>
          </div>
        </div>
        <div className="payment__fourth">
        <div className="p_f_f">
            <h2>4. E-wallets </h2>
            <p  className="payment__p">
            Customers can pay via popular online wallets like Mobikwik, Freecharge, Amazon Pay, PhonePe, JioMoney, Airtel Money, PayZapp and Ola Money. They can approve payments using OTP  directly for a seamless experience.  
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FE-Wallets.jpg?alt=media&token=2bea83c8-d07a-4d6e-be85-eeb9fd67a35c" alt="E-wallets"/>
          </div>
        </div >
        <div className="payment__fifth">
        <div className="p_f_f">
            <h2>5. 50+ Netbanking Options </h2>
            <p  className="payment__p">
            Accept payments through 50+ banks including SBI, ICICI Bank, HDFC Bank, Axis Bank, Kotak Bank and Yes Bank. The bank page opens in a pop-up window so customers can easily come back to Lofty Dreams website, ensuring a great experience.        
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FBanks.jpg?alt=media&token=def63701-4c22-400a-90ad-5aa5360ad2e7" alt="Netbanking"/>
          </div>
        </div>
        <div className="payment__six">
        <div className="p_f_f">
            <h2>6. NEFT/RTGS/IMPS </h2>
            <p  className="payment__p">
            Payment made via NEFT, RTGS and IMPS using Smart Collect. 
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img"  src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FNEFT-RTGS-IMPS.jpg?alt=media&token=f8a4188c-9366-4f00-9b36-71049d77a47b" alt="NEFT/rtgs/imps"/>
          </div>
        </div>
      </div>
    </div>
  );
}
