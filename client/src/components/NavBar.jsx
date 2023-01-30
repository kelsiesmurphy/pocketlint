const NavBar = () => {
  return (
    <nav className="flex px-4 py-3 md:px-20 transition-all justify-between h-20">
      <div className="flex items-center gap-10">
        <img src="/pocketlint-logo.png" alt="pocketlint logo" width="156"/>
        <div>
          <p>Products</p>
        </div>
      </div>
      <div className="flex items-center">
        <img src="/shopping-cart.svg"/>
      </div>
    </nav>
  )
}

export default NavBar