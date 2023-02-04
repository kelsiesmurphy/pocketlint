import { useState, useEffect } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import ProductService from '../services/ProductService'
import { useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import getStripe from '../../lib/getStripe';

const ProductPage = () => {

  let { id } = useParams()
  const [urlID, setUrlID] = useState(id)
  const [product, setProduct] = useState({})
  const [basket, setBasket] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    ProductService.getSingleProduct(id).then((result) => {
      setProduct(result);
    })
  }, [urlID]);

  /**
   * Future Basket Functionality
   */
      // const handleBasketAdd = () => {
      //   let basketClone = [... basket]
      //   basketClone.push(product)
      //   setBasket(basketClone)
      //   toast('Added to basket!', {
      //     icon: '🛒',
      //   });
      // }

  async function handleCheckout() {
    console.log("running");
    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: product.stripe_price_id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      successUrl: `http://localhost:5173`,
      cancelUrl: `http://localhost:5173/products/${product._id}`,
      customerEmail: 'customer@email.com',
    });
    console.warn(error.message);
  }

  return (
    <>
      <div>
        <Toaster/>
      </div>
      <NavBar basket={basket} />
      <div className="py-12 px-4 flex basis-full justify-center">
        <div className="flex flex-1 justify-between max-w-5xl gap-8">
          <img src={product.image} alt={product.title}/>
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="mt-8 text-4xl text-slate-900 font-semibold">{product.title}</h1>
            <p className="text-slate-700">{product.description}</p>
            <p className="text-slate-700 text-2xl">£{product.price}</p>
            <button onClick={handleCheckout} className='bg-slate-700 text-white rounded-none w-fit'>Purchase</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProductPage