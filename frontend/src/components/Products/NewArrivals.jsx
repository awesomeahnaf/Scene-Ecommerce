import { LuCircleChevronLeft } from "react-icons/lu";
import { BiChevronRightCircle } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";


const NewArrivals = () => {
    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [canScrollLeft, setCanScrollLeft ] = useState(false);
    const [canScrollRight, setCanScrollRight]= useState(true);

    const [startScrollLeft, setStartScrollLeft] = useState(0);

    
    const NewArrivals = [
        
        {
        _id: 1,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=1",
                alltext: "style",
            }
        ],
    },
        {
        _id: 2,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=1",
                alltext: "style",
            }
        ],
    },
        {
        _id: 3,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=2",
                alltext: "style",
            }
        ],
    },
        {
        _id: 4,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=3",
                alltext: "style",
            }
        ],
    },
        {
        _id: 5,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=4",
                alltext: "style",
            }
        ],
    },
        {
        _id: 6,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=5",
                alltext: "style",
            }
        ],
    },
        {
        _id: 7,
        name: "T-shirt",
        price: 150,
        images: [

            {
                url: "https://picsum.photos/200?random=5",
                alltext: "style",
            }
        ],
    },

    ]

    const handleMouseDown = (e)=> {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft)
        // setCanScrollLeft(scrollRef.current.scrollLeft);
        setStartScrollLeft(scrollRef.current.scrollLeft);
    }

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = x- startX;
        // const scrollLeft = scrollRef.current.scrollLeft;
        // scrollRef.current.scrollLeft = scrollLeft - walk;
        scrollRef.current.scrollLeft = startScrollLeft - walk;
    }
    const handleMouseUpOrLeave = (e) => {
        setIsDragging(false)

    }

    const scroll = (direction) => {
        const scrollAmount = direction === "left" ? -300:300;
        scrollRef.current.scrollBy({left: scrollAmount, behavior: "smooth"});
    }

    //Update Scroll Buttons
    const updateScrollButtons = () => {
        const container = scrollRef.current;

        if(container) {
            const leftScroll = container.scrollLeft;
            const rightScrollable = container.scrollWidth > leftScroll + container.clientWidth;
            setCanScrollLeft(leftScroll > 0 );
            setCanScrollRight(rightScrollable);

        }


    }
    useEffect(()=> {
                const container = scrollRef.current;
        if(container) {
            container.addEventListener("scroll", updateScrollButtons);
            updateScrollButtons();
            return () => container.removeEventListener("scroll", updateScrollButtons);

        }
    }, [])

  return (
    <section className="py-16 px-4 lg:px-0">
    <div className="container mx-auto text-center mb-10 relative">
      <h2 className="text-3xl font-bold mb-4">See new arrivals</h2>
      <p className="text-lg text-amber-950 mb-8">
        Explore the latest drops and everyday essentials, curated for those who set trends instead of following them.
      </p>

      {/* Scroll Button */}
      <div className="absolute right-0 bottom-[-40px] flex space-x-2 p-4">
        <button 
        onClick= {() => scroll("left")} 
        disabled={!canScrollLeft}
        
        className={`p-2 rounded border 
        ${ canScrollLeft ? "bg-white text-black" : "bg-Wester cursor-not-allowed" }`}>
            <LuCircleChevronLeft className="text-2xl"/>
        </button>
        <button 

        onClick={() => scroll("right")}
        className={`p-2 rounded border 
        ${ canScrollRight ? "bg-white text-black" : "bg-Wester cursor-not-allowed" }`}>
            <BiChevronRightCircle  className="text-2xl"/>
        </button>
      </div>
    </div>
    {/* Scrollable Content */}
    <div 
    
    ref={scrollRef} 

    // Adding select-none to prevent text selection while dragging
    className={`container mx-auto overflow-x-scroll flex space-x-6 relative p-4 select-none ${isDragging ? "cursor-grabbing" : "cursor-grab "

    }`}
    onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUpOrLeave}
    onMouseLeave={handleMouseUpOrLeave}
    >

        {NewArrivals.map((product)=> (
            <div key={product._id} className="min-w-[75%] sm:min-w-[45%] lg:min-w-[24%] relative">
                <img 
                src={product.images[0]?.url} 
                alt={product.images[0]?.alltext || product.name} 
                className="w-full h-[500px] object-cover rounded-lg"
                draggable="false"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-opacity-30 backdrop-blur-md text-white p-1/2 rounded-b-lg">
                    <Link to={`/product/${product._id}`} className="block">
                    <h4 className="font-medium px-1">{product.name}</h4>
                    <p className="mt-1 px-1">৳ {product.price}</p>
                    </Link>
                </div>
            </div>
        ))}
    </div>
</section>
  )
}

export default NewArrivals
