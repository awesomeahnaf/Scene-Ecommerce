import { Link } from "react-router-dom"
import heroImg from "../../assets/Hero section.png"


const Hero = () => {
  return (

    <section className="relative">
        <img src={heroImg} alt="scene" className="w-full h-[400px] md:h-[600px] lg:h-[750px] object-cover"/>

        <div className="absolute inset-0 bg-black/5 flex item-center justify-center">
          <div className="text-center text-white p-6 translate-y-55">
            <h1 className="text-4x md:text-9xl font-bold tracking-tighter uppercase mb-4">
             Make <br /> The SCENE
            </h1>
            <p className="text-sm tracking-tighter md:text-lg mb-6">
              Discover streetwear that speaks your vibe
            </p>
            <Link to="#" className="bg-white text-amber-950 px-6 py-2 rounded-sm text-lg">Shop now </Link>
          </div>
        </div>
    </section>
  )
}

export default Hero
