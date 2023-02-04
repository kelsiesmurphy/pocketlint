import { loadStripe } from '@stripe/stripe-js';
import secret from '../secret';

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    console.log(secret);
    stripePromise = loadStripe(`${secret}`);
  }
  return stripePromise;
};

export default getStripe;