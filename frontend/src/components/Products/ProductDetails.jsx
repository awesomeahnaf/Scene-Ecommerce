import { useEffect, useState } from "react"
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
    name: "Stylish Jacket",
    price: 120,
    originalPrice: 150,
    description: "This is a stylish jacket perfect for any occasion",
    brand: "FashionBrand",
    material: "Leather",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Red", "Black"],
    images: [
        {
            url: "https://picsum.photos/200?random=1",
            altText: "stylish jacket 1"
        },
        {
            url: "https://picsum.photos/200?random=2",
            altText: "stylish jacket 2"
        },
    ]

}

const similarProducts = [
    {
        _id: 1,
        name: "Product 1",
        price:100,
        images: [{url:"https://picsum.photos/200?random=1"}],
    },
    {
        _id: 2,
        name: "Product 2",
        price:100,
        images: [{url:"https://picsum.photos/200?random=2"}],
    },
    {
        _id: 3,
        name: "Product 3",
        price:100,
        images: [{url:"https://picsum.photos/200?random=3"}],
    },
    {
        _id: 4,
        name: "Product 4",
        price:100,
        images: [{url:"https://picsum.photos/200?random=4"}],
    },

]

const ProductDetails = () => {
    const [mainImage, setMainImage] = useState(null); // console error null suggestion before it was "" 
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [quantity, setQuantity] = useState(1);
    const[isButtonDisabled, setIsButtonDisabled] = useState(false);



    useEffect(() => {
        if (selectedProduct?.images?.length>0){
            setMainImage(selectedProduct.images[0].url);
        }
    }, [selectedProduct])

    const handleQuantityChange = (action) => {
        if (action === "plus") setQuantity((prev) => prev+1)
        if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1 );
    }

    const handleAddToCart = () => {
        if(!selectedSize || !selectedColor){
            toast.error("Select color and size" , {
                duration: 1000,
            });
            return;
        }
        setIsButtonDisabled(true);
        setTimeout(()=> {
            toast.success("Your Product is added to Cart", {
                duration:1000,
            });
            setIsButtonDisabled(false);
        }, 500);
    }
    return (
        <div className="p-6">
            <div className="max-w-6xl mx-auto bg-Wester p-8 rounded-lg">
                <div className="flex flex-col md:flex-row">
                    {/* Left thumbnails */}
                    <div className="hidden md:flex flex-col space-y-4 mr-6 ">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
                                onClick={()=> setMainImage(image.url)}
                            />
                        ))}
                    </div>
                    {/* Main Image */}
                    <div className="md:w-1/2">
                        <div className="mb-4">
                            <img
                                src={mainImage}
                                alt="Main product"
                                className="w-full h-auto object-cover rounded-lg"

                            />
                        </div>
                    </div>
                    {/* Mobile Thumbnail */}
                    <div className="md:hidden flex overscroll-x-scroll space-x-4">
                        {selectedProduct.images.map((image, index) => (
                            <img
                                key={index}
                                src={image.url}
                                alt={image.altText || `Thumbnail ${index}`}
                                className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${mainImage === image.url ? "border-black" : "border-gray-300"}`}
                                onClick={()=> setMainImage(image.url)}

                            />
                        ))}
                    </div>
                    {/* Right Side */}
                    <div className="md:w-1/2 md:ml-10">
                        <h1 className="text-2xl md:text-3xl font-semibold mb-2">
                            {selectedProduct.name}
                        </h1>
                        <p className="text-lg text-amber-950 mb-1 line-through">
                            {selectedProduct.originalPrice && `${selectedProduct.originalPrice}`}
                        </p>
                        <p className="text-xl text-amber-950 mb-2">
                            ${selectedProduct.price}
                        </p>
                        <p className="text-amber-950 mb-4">
                            ৳{selectedProduct.description}
                        </p>
                        <div className="mb-4">
                            <p className="text-amber-950">Color:</p>
                        </div>
                        <div className="flex gap-2 mt-2">
                            {selectedProduct.colors.map((color) => (
                                <button
                                    key={color}
                                    onClick={()=> setSelectedColor(color)}
                                    className={`w-8 h-8 rounded-full border-2 ${selectedColor === color ? "border-4 border-black" : " border-amber-950"}`}
                                    style={{
                                        backgroundColor: color.toLocaleLowerCase(),
                                        filter: "brightness (0.5)",
                                    }}

                                ></button>

                            ))}
                        </div>

                        <div className="mb-4">
                            <p className="text-amber-950">Size:</p>
                            <div className="flex gap-2 mt-2">
                                {selectedProduct.sizes.map((size) => (
                                    <button key={size} 
                                    onClick={() => setSelectedSize(size)}
                                    className={`px-4 py-2 rounded border ${selectedSize === size ? "bg-black text-white" : "" }`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="mb-6">
                            <p className="text-amber-950"> Quantity: </p>
                            <div className="flex items-center space-x-4 mt-2">
                                <button onClick={() => handleQuantityChange("minus")}
                                className="px-2 py-1 bg-white rounded text-lg">
                                    -
                                </button>
                                <span className="text-lg">{quantity}</span>
                                <button onClick={() => handleQuantityChange("plus")}
                                className="px-2 py-1 bg-white rounded text-lg">
                                    +
                                </button>
                            </div>
                        </div>
                        <button onClick={handleAddToCart} 
                        disabled={isButtonDisabled}
                        className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${isButtonDisabled 
                            ? "cursor-not-allowed opacity-50" : "hover:bg-gray-700"
                        }`}>{isButtonDisabled ? "Adding" : "Add To Cart"}</button>
                        <h3 className="text-xl font-bold mb-4">Characteristics</h3>
                        <table className="w-full text-left text-sm text-amber-950">
                            <tbody>
                                <tr>
                                    <td className="py-1">Brand</td>
                                    <td className="py-1">{selectedProduct.brand}</td>
                                </tr>
                                <tr>
                                    <td className="py-1">Material</td>
                                    <td className="py-1">{selectedProduct.material}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-20">
                    <h2 className="text-2xl text-center font-medium mb-4">You may also like</h2>
                    <ProductGrid products={similarProducts}/>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
