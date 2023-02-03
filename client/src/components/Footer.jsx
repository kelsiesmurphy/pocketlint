import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="flex flex-col px-4 md:px-20 py-16 transition-all">
      <div className='flex flex-wrap justify-between gap-12'>
        <div className='space-y-8'>
          <img src="/pocketlint-logo.png" alt="pocketlint logo" width="156" />
          <ul className='flex flex-wrap gap-x-8 gap-y-3'>
            <li className='w-36 md:w-min'>Wallets</li>
            <li className='w-36 md:w-min'>Watches</li>
            <li className='w-36 md:w-min'>Keys</li>
            <li className='w-36 md:w-min'>Torches</li>
            <li className='w-36 md:w-min'>Notebooks</li>
            <li className='w-36 md:w-min'>More</li>
          </ul>
        </div>
        <form className='flex flex-col gap-4'>
          <label htmlFor="newsletter" className='text-sm font-semibold text-slate-900'>Stay up to date</label>
          <div className='flex gap-4'>
            <input
              type="email"
              id="newsletter"
              placeholder="Enter your email"
              className='rounded-none border px-2 border-slate-300 shadow-sm'
              />
            <button className='bg-slate-700 text-white rounded-none'>Submit</button>
          </div>
        </form>
      </div>
      <hr className='mt-16'/>
      <div className='py-8 flex flex-wrap-reverse justify-between gap-4'>
        <p>© 2023 Pocket Lint. All rights reserved.</p>
        <ul className='flex gap-4'>
          <li>
            <Link to="/terms" className="text-slate-600 hover:text-slate-800">Terms</Link>
          </li>
          <li>
            <Link to="/privacy" className="text-slate-600 hover:text-slate-800">Privacy</Link>
          </li>
          <li>  
            <Link to="/cookies" className="text-slate-600 hover:text-slate-800">Cookies</Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer