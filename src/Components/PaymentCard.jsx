import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useContext } from "react";
import CheckoutForm from "./CheckoutForm";
import { ApiContext } from "../Context/DataContext";

const stripePromise = loadStripe(
  "pk_test_51MlpzGLrYWLOOZ8UljA5X1ANJMi0EXPD3KZWZmLIjyuv5DQgLe3I2dZvA4TPFfa4n0opSlz0POZ3wbxzcy27Necr005pDnWQh8"
);
console.log(stripePromise);

const PaymentCard = () => {
  const { orderInfo } = useContext(ApiContext);

  return (
    <div>
      <section className="mt-3 p-2">
        <div>
          <p className="text-sm text-indigo-500 mb-2">Payment Card Info</p>
          <Elements stripe={stripePromise}>
            <CheckoutForm orderInfo={orderInfo}></CheckoutForm>
          </Elements>
        </div>
      </section>
    </div>
  );
};

export default PaymentCard;
