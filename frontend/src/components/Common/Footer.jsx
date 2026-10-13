import { Link } from 'react-router-dom';
import { IoLogoFacebook } from "react-icons/io5";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { BsTelephoneInboundFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className='border-t py-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-12'>
            <div>
                <h3 className='text-lg text-amber-950'>Newsletter</h3>
                <p className='text-black mb-4'>
                    Be the first to hear about new products, exclusive events, and online offers.
                </p>
                <p className='font-medium text-sm text-black mb-6'>
                    Sign up and get 10% off in your order.
                </p>

                {/* Newsletter Form */}
                <form className='flex'>
                    <input type="email" placeholder='Enter your email' className='p-3 w-full text-sm border-t border-l border-b border-amber-950 rounded-l-md focus:outline-none focus:ring-2 focus:ring-amber-950 transition-all' required/>

                    <button
                    type='submit'
                    className='bg-amber-950 text-white px-6 py-3 text-sm rounded-r-md hover:bg-black transition-all'
                    >Subscribe</button>
                </form>
            </div>

            {/* Shop links */}
            <div>
                <h3 className='text-lg text-amber-950'>Shop</h3>
                <ul className='space-y-2 text-black'>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> Men's upper wear </Link>
                    </li>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> Women's upper wear </Link>
                    </li>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> Men's Lower wear </Link>
                    </li>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> Women's Lower wear </Link>
                    </li>
                </ul>
            </div>
            {/* Support links */}
                        <div>
                <h3 className='text-lg text-amber-950'>Support</h3>
                <ul className='space-y-2 text-black'>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> Contact Us </Link>
                    </li>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> About us </Link>
                    </li>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> FAQs </Link>
                    </li>
                    <li>
                        <Link to= "#" className="hover:text-amber-950"> Features </Link>
                    </li>
                </ul>
            </div>
            {/* Follow us */}
            <div>
                <h3 className='text-lg text-amber-950 mb-4'>Follow Us</h3>
                <div className='flex items-center space-x-4 mb-6'>
                    <a 
                    href="https://www.facebook.com"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='hover:text-amber-700'
                    ><IoLogoFacebook className='h-5 w-5'/>
                    </a>
                    <a 
                    href="https://www.instagram.com"
                    target='_blank'
                    rel="noopener noreferrer"
                    className='hover:text-amber-700'
                    ><BiLogoInstagramAlt className='h-5 w-5'/>
                    </a>
                </div>
                <p className='text-amber-950'>Call us </p>
                <p className='hover:text-amber-700'><BsTelephoneInboundFill className='inline-block mr-2' />+880 1811-111111</p>
            </div>
        </div>
        {/* Footer Bottom */}
        <div className='container mx-auto mt-12 px-4 lg:px-0 border-t border-amber-950 pt-6'>
            <p className='text-amber-950 text-sm tracking-tighter text-center'>
                ©2026 Scene. All rights reserved.
            </p>
        </div>
    </footer>
  )
}

export default Footer
