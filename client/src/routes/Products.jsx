import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import AllProductsContainer from '../containers/AllProductsContainer'
import { useEffect } from 'react'

const Products = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <>
        <NavBar />
        <AllProductsContainer />
        <Footer />
    </>
  )
}

export default Products