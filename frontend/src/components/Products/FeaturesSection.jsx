import { HiShoppingBag } from "react-icons/hi2";
import { HiMiniArrowPathRoundedSquare } from "react-icons/hi2";
import { HiOutlineCreditCard } from "react-icons/hi2";

const FeaturesSection = () => {
  return (
    <section className='py-16 px-4'> 
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
        {/* Feature 1 */}
        <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full mb-4'>
                <HiShoppingBag className="text-xl"/>
            </div>
            <h4 className="text-amber-900 tracking-tighter mb-2">
                WORLDWIDE SHIPPING. OUR TREAT.
            </h4>
            <p className=" text-sm tracking-tighter">Available on every ৳100+ order.</p>
        </div>
         {/* Feature 2 */}
        <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full mb-4'>
                <HiMiniArrowPathRoundedSquare  className="text-xl"/>
            </div>
            <h4 className="text-amber-900 tracking-tighter mb-2">
                60 DAYS RETURN WINDOW.
            </h4>
            <p className=" text-sm tracking-tighter">MONEY BACK GUARANTEE.</p>
        </div>
         {/* Feature 3 */}
        <div className='flex flex-col items-center'>
            <div className='p-4 rounded-full mb-4'>
                <HiOutlineCreditCard  className="text-xl"/>
            </div>
            <h4 className="text-amber-900 tracking-tighter mb-2">
                SAFE. SIMPLE. SECURE.
            </h4>
            <p className=" text-sm tracking-tighter">Your checkout details are handled with care.</p>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
