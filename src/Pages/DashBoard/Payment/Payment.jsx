/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData, useLocation } from "react-router-dom";



const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = () => {

   
    const {state} = useLocation();
    
console.log(state);
    return (
        <div className="w-full ml-20">
            <h2>payment continue</h2>
            
            <Elements stripe={stripePromise}>
               <CheckoutForm state={state} price={state.Price} ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;