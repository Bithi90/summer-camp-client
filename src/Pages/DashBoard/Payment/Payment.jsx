/* eslint-disable react/prop-types */
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

const Payment = ({price}) => {

   console.log(price);
    

    return (
        <div className="w-full ml-20">
            <h2>payment continue</h2>
            
            <Elements stripe={stripePromise}>
               <CheckoutForm ></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;