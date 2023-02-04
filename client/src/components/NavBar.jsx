import { Link } from "react-router-dom"

const NavBar = ({basket}) => {
  return (
    <nav className="flex px-4 py-3 md:px-20 transition-all justify-between h-20">
      <div className="flex items-center gap-10">
        <Link to="/"><img src="/pocketlint-logo.png" alt="pocketlint logo" width="156"/></Link>
        <div>
          <Link to="/products" className="text-slate-600 hover:text-slate-800">Products</Link>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <img src="/shopping-cart.svg"/>
        <p className="font-semibold text-[#667085]">{basket ? basket.length : ""}</p>
      </div>
    </nav>
  )
}

export default NavBar