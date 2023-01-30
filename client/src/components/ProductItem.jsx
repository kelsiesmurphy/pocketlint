const ProductItem = ({ product }) => {
  return (
    <div className="flex flex-col gap-4">
      <img src={product.image} alt={product.title}/>
      <h3 className="text-2xl text-slate-900 font-semibold">{product.title}</h3>
      <div className="flex gap-2">
        <p className="text-slate-700">£{product.price}</p>
        <img src="/arrow-up-right.svg" alt="arrow icon" width="20"/>
      </div>
    </div>
  )
}

export default ProductItem