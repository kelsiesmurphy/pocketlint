import React, { useState, useEffect } from "react"
import ProductService from "../services/ProductService"
import Hero from "../components/Hero"
import LatestProducts from "../components/LatestProducts"

const MainContainer = () => {
  
  const [allProducts, setAllProducts] = useState([])

  useEffect(() => {
    ProductService.getProducts().then((allBookings) => {
      setAllProducts(allBookings);
    })
  }, []);

  return (
    <>
      <Hero />
      <LatestProducts allProducts={allProducts}/>
    </>
  )
}

export default MainContainer