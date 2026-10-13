
import { Link } from 'react-router-dom'
import featured from "../../assets/feature.png";

const FeaturedCollection = () => {
    return (
        <section className='py-16 px-4 lg:px-3'>
            <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-amber-700 rounded-3xl'>
                {/* Left Content */}
                <div className='lg:w-1/2 p-8 text-center lg:text-left'>
                    <h2 className='text-lg font-semibold text-white mb-2'>
                        Fit & Identity
                    </h2>
                    <h2 className='text-4xl lg:text-5xl font-bold mb-6 text-white'>
                        Made for Every Day. Built to Stand Out.
                    </h2>
                    <p className='text-lg text-amber-100 mb-6'>
                        Redefine your everyday look with versatile essentials, effortless fits, and a style that speaks for itself.
                    </p>
                    <Link to="/collections/all" className='bg-amber-950 text-white px-6 py-3 rounded-lg text-lg hover:bg-black'>
                        Shop now
                    </Link>
                </div>
                {/* Right Content */}
                <div className='lg:w-1/2 '>
                    <img src={featured} alt="Featured Collection"
                        className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl '
                    />
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection
