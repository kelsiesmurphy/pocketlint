const LatestProducts = () => {
  return (
    <div className="flex flex-col">
        <div className="pt-24 pb-16 px-4 md:px-20 flex flex-wrap gap-4 justify-between">
          <div className="space-y-2">
              <h5 className="text-md font-semibold">LatestProducts</h5>
              <h2 className="text-2xl md:text-4xl text-slate-900 font-semibold">View our collection</h2>
              <p className="text-slate-500">We have a variety of tools and items to suit your EDC needs. You only need to buy it once.</p>
          </div>
          <div>
            <button className="bg-slate-700 text-white rounded-none">View all products</button>
          </div>
        </div>
    </div>
  )
}

export default LatestProducts