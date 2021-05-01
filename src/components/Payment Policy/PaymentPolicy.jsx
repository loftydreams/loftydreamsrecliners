import React from "react";
import "./paymentpolicy.css"

export default function PaymentPolicy() {
  return (
    <div>
      <h1 className="payment__h">Payment and Security Policy</h1>
      <p className="payment__p" >
        Lofty Dreams ensures that every transaction you conduct with us is in a
        safe and secure environment. Please read this given below details on
        payments and how we ensure security.
      </p>
      <p className="payment__p_h">What are the payment options which Lofty Dreams provides me?</p>
      <p className="payment__p">Lofty Dreams provides you to shop with any of the following options</p>
      <div className="payment__main">
        <div className="payment__first">
          <div className="p_f_f">
          <h1>1. Credit and Debit Cards </h1>
            <p className="payment__p">
              Accept payments from all major credit and debit card networks like
              Visa, Mastercard, American Express and RuPay. And now also accept
              international card payments from customers in various countries
              including US, Europe, South East Asia etc.
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/06/Credit-Cards.jpg" alt="credit-debit-card"/>
          </div>
        </div>
        <div className="payment__second">
        <div className="p_f_f">
            <h1>2. EMI on Credit Card </h1>
            <p  className="payment__p">
            Customers can pay in monthly installments on major bank credit cards.
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/06/EMI-card.jpg" alt="EMI"/>
          </div>
        </div>
        <div className="payment__third">
        <div className="p_f_f">
            <h1>3. UPI </h1>
            <p className="payment__p">
            UPI is a new mobile-first payment mode for making payments to friends or businesses. Accept UPI payments without writing any additional code or remembering your VPA. Simply use apps like PhonePe, BHIM, WhatsApp, etc. to directly accept payments.
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/06/UPI.jpg" alt="UPI"/>
          </div>
        </div>
        <div className="payment__fourth">
        <div className="p_f_f">
            <h1>E-wallets </h1>
            <p  className="payment__p">
            Customers can pay via popular online wallets like Mobikwik, Freecharge, Amazon Pay, PhonePe, JioMoney, Airtel Money, PayZapp and Ola Money. They can approve payments using OTP  directly for a seamless experience.  
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/06/NEFT-RTGS-IMPS.jpg" alt="E-wallets"/>
          </div>
        </div >
        <div className="payment__fifth">
        <div className="p_f_f">
            <h1>5. 50+ Netbanking Options </h1>
            <p  className="payment__p">
            Accept payments through 50+ banks including SBI, ICICI Bank, HDFC Bank, Axis Bank, Kotak Bank and Yes Bank. The bank page opens in a pop-up window so customers can easily come back to Lofty Dreams website, ensuring a great experience.        
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img" src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/06/UPI.jpg" alt="Netbanking"/>
          </div>
        </div>
        <div className="payment__six">
        <div className="p_f_f">
            <h1>6. NEFT/RTGS/IMPS </h1>
            <p  className="payment__p">
            Payment made via NEFT, RTGS and IMPS using Smart Collect. 
            </p>
          </div>
          <div className="p_f_s">
              <img className="payment-img"  src="https://www.loftydreamsrecliners.com/wp-content/uploads/2020/06/NEFT-RTGS-IMPS.jpg" alt="NEFT/rtgs/imps"/>
          </div>
        </div>
      </div>
    </div>
  );
}
