import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoLogoFacebook } from "react-icons/io5";

const Topbar = () => {
  return (
    <div className='bg-scene-black text-white'>
        <div className='container mx-auto flex justify-between items-center py-3 px-4'>
            <div className="hidden md:flex items-center space-x-4">
                <a href="#" className='hover:text-gray-300'>
                <BiLogoInstagramAlt   className='h-5 w-5'/>
                </a>
                <a href="#" className='hover:text-gray-300'>
                <IoLogoFacebook   className='h-4 w-4'/>
                </a>
            </div>
            <div className="text-sm text-center flex-grow">
                <span>Made to Be Seen</span>
            </div>
            <div className="text-sm hidden md:block">
                <a href="tel:+018111111" className="hover:text-gray-300"> +880 1811-111111</a>
            </div>
        </div>
      
    </div>
  )
}

export default Topbar
