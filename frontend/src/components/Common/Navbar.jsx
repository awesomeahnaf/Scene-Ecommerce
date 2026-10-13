import { Link } from 'react-router-dom';
import { HiOutlineUserCircle, } from "react-icons/hi";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { GiShoppingBag } from "react-icons/gi";
import SearchBar from './SearchBar';
import CartDrawer from '../Layout/CartDrawer';
import { useState } from 'react';


const Navbar = () => {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);

    const toggleNavDrawer =() => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
        setDrawerOpen(!drawerOpen);

    }
  return (
    <>
    
    <nav className='container mx-auto flex items-center justify-between py-4 px-6'>

        {/* Left - logo */}

        <div>
            <Link to="/" className="text-2xl font-medium">
            Scene
            </Link>
        </div>
        {/* Center - Navigation links */}
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className="text-amber-950 hover:text-black text-sm font-medium uppercase">Men</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className="text-amber-950 hover:text-black text-sm font-medium uppercase">Women</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className="text-amber-950 hover:text-black text-sm font-medium uppercase">The Upper</Link>
        </div>
        <div className='hidden md:flex space-x-6'>
            <Link to="#" className="text-amber-950 hover:text-black text-sm font-medium uppercase">The Lower</Link>
        </div>

        {/* Right - icons */}

        <div className='flex items-center space-x-4'>
            <Link to= "/profile"  className='hover:text-blue-300'>
            <HiOutlineUserCircle className='h-6 w-6 text-gray-700' />
            </Link>

            <button onClick={toggleCartDrawer} className='relative'>
                <GiShoppingBag className='h-6 w-6 text-gray-700  hover:text-black'/>
                <span className='absolute -top-1 bg-scene-black text-white text-xs rounded-full px-2 py-0.5'>4</span>
            </button>
            {/* Search  */}

            <div className='overflow-hidden'>
                <SearchBar/>
            </div>
            

            <button onClick={toggleNavDrawer} className='md:hidden'>
                <HiBars3BottomRight className='h-6 w-6 text-gray-700 hover:text-black' />
            </button>
        </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>

    {/* MObile naviagation */}
    <div className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-Wester shadow-lg transform transition-transform duration-100 z-50 ${
        navDrawerOpen? "translate-x-0" : "-translate-x-full"
    }`}>

        <div className='flex justify-end p-4'>
            <button onClick={toggleNavDrawer}>
                <IoMdCloseCircleOutline className='h-6 w-6 text-gray-600'/>
            </button>
        </div>
        <div className='p-4'>
            <h2 className='text-xl font-semibold mb-4 '> Menu </h2>
            <nav className='space-y-4'>
                <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>
                
                Men

                </Link>
                <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>
                
                Women

                </Link>
                <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>
                
                The upper

                </Link>
                <Link to="#" onClick={toggleNavDrawer} className='block text-gray-700 hover:text-black'>
                
                The lower

                </Link>
            </nav>
        </div>
    </div>
    
    </>
  )
}

export default Navbar
