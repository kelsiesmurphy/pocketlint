import React, { useState, useEffect } from "react"
import ProductService from "../services/ProductService"
import AllProducts from "../components/AllProducts"

const AllProductsContainer = () => {
  
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    ProductService.getProducts().then((allBookings) => {
      setAllProducts(allBookings);
    })
  }, []);

  return (
    <>
      <AllProducts allProducts={allProducts}/>
    </>
  )
}

export default AllProductsContainer