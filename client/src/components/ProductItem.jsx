import { Link } from "react-router-dom"

const ProductItem = ({ product }) => {

  return (
    <Link to={`/products/${product._id}`} className="flex flex-col gap-4">
      <img src={product.image} alt={product.title}/>
      <h3 className="text-2xl text-slate-900 font-semibold">{product.title}</h3>
      <div className="flex gap-2">
        <p className="text-slate-700">£{product.price}</p>
        <img src="/arrow-up-right.svg" alt="arrow icon" width="20"/>
      </div>
    </Link>
  )
}

export default ProductItem