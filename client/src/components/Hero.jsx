const Hero = () => {
  return (
    <div className="flex flex-wrap sm:flex-nowrap gap-y-4 justify-between">
        <div className="py-16 px-4 md:px-20 space-y-4 m-auto">
            <h1 className="text-4xl md:text-5xl font-semibold text-slate-800">Welcome to</h1>
            <img src="/pocketlint-logo-2.png" alt="pocketlint logo" />
            <p className="text-slate-500">High quality premium items that we know you’ll carry with you every day.</p>
            <button className="bg-slate-700 text-white rounded-none">View products</button>
        </div>
        <picture className="flex basis-full max-w-4xl">
            <source media="(min-width:640px)" srcSet="/hero.png" />
            <source media="(min-width:288x)" srcSet="/hero-mobile.png" />
            <img src="/hero-mobile.png" alt="hero image of various everyday items" className="flex basis-full object-cover object-left"/>
        </picture>
    </div>
  )
}

export default Hero