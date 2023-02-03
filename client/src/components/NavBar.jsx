import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav className="flex px-4 py-3 md:px-20 transition-all justify-between h-20">
      <div className="flex items-center gap-10">
        <Link to="/"><img src="/pocketlint-logo.png" alt="pocketlint logo" width="156"/></Link>
        <div>
          <Link to="/all" className="text-slate-600 hover:text-slate-800">Products</Link>
        </div>
      </div>
      <div className="flex items-center">
        <img src="/shopping-cart.svg"/>
      </div>
    </nav>
  )
}

export default NavBar