import ProductItem from "./ProductItem"

const AllProducts = ({ allProducts }) => {
  const productNodes = allProducts.map((product, index) => {
    return (
      <li key={index}>
        <ProductItem product={product} />
      </li>
    )
  })

  return (
    <div className="flex flex-col">
        <div className="pt-16 pb-16 px-4 md:px-20 flex flex-wrap gap-4 justify-between">
          <div className="space-y-2">
              <h5 className="text-md font-semibold">The Collection</h5>
              <h2 className="text-2xl md:text-4xl text-slate-900 font-semibold">All Products</h2>
              <p className="text-slate-500">
                We have a variety of tools and items to suit your EDC needs. You only need to buy it once.
              </p>
          </div>
        </div>
        <ul className="flex overflow-auto flex-wrap lg:flex-nowrap gap-8 px-4 md:px-20 justify-center">
          {productNodes}
        </ul>
    </div>
  )
}

export default AllProducts