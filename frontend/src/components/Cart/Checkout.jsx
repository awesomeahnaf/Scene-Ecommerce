import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { SSLCommerzButton } from "./SSLCommerzButton";

const cart = {

    products: [
        {
            name: "Stylish Jacket",
            size: "M",
            color: "Black",
            price: 220,
            image: "https://picsum.photos/150?random=1",

        },
        {
            name: "Casul Sneaker",
            size: "Xl",
            color: "green",
            price: 85,
            image: "https://picsum.photos/150?random=2",

        },
    ],

    totalPrice: 305,


};

export const Checkout = () => {

    const navigate = useNavigate();
    const [checkoutId, setCheckoutId] = useState(null)
    const [shippingAddress, SetShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: ""
    })

    const handleCreateCheckout = (e) => {
        e.preventDefault();
        setCheckoutId(123);

    }

    const handlePaymentSuccess = (details) => {
        console.log("Payment Successful" , details);
        navigate("/order-confirmation")
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter">
            {/* Left Section */}
            <div className="bg-gray-100 rounded-lg p-6">
                <h2 className="text-2xl uppercase">checkout</h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className="text-lg mb-4">
                        Contact Details
                    </h3>
                    <div className="mb-4">
                        <label className="block text-amber-900">Email</label>
                        <input
                            type="email"
                            value="user@example.com" className="w-full p-2 border rounded" disabled
                        />
                    </div>
                    <h3 className="text-lg mb-4">Delivery</h3>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-amber-950">First name</label>
                            <input
                                type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) => SetShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-amber-950">Last name</label>
                            <input
                                type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) => SetShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-amber-950">Address</label>
                        <input
                            type="text"
                            value={shippingAddress.address}
                            onChange={(e) => SetShippingAddress({
                                ...shippingAddress,
                                address: e.target.value
                            })
                            }
                            className="w-full p-2 border rounded" required
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-amber-950">City</label>
                            <input
                                type="text"
                                value={shippingAddress.city}
                                onChange={(e) => SetShippingAddress({ ...shippingAddress, city: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-amber-950">Postal Code</label>
                            <input
                                type="text"
                                value={shippingAddress.postalCode}
                                onChange={(e) => SetShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                                className="w-full p-2 border rounded"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-amber-950">Country</label>
                        <input
                            type="text"
                            value={shippingAddress.country}
                            onChange={(e) => SetShippingAddress({
                                ...shippingAddress,
                                country: e.target.value
                            })
                            }
                            className="w-full p-2 border rounded" required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-amber-950">Phone Number</label>
                        <input
                            type="tel"
                            value={shippingAddress.phone}
                            onChange={(e) => SetShippingAddress({
                                ...shippingAddress,
                                phone: e.target.value
                            })
                            }
                            className="w-full p-2 border rounded" required
                        />
                    </div>
                    <div className="mt-6">
                        {!checkoutId ? (
                            <button type="submit" className="w-full bg-black text-white py-3 rounded">Continue to Payment </button>
                        ): (
                            <div>
                                <h3 className="text-lg mb-4 ">Pay with sslcommerz</h3>

                                {/* sslcommerz component */}
                                <SSLCommerzButton 
                                amount={cart.totalPrice} 
                                onSuccess={handlePaymentSuccess}
                                onError={(err)=> alert("payment failed. Try again")}
                                />
                            </div>
                        )}
                    </div>
                </form>
            </div>

            {/* Right Section */}
            <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg mb-4">Order Summary</h3>
                <div className="border-t py-4 mb-4">
                    {cart.products.map((product,index)=> (
                        <div 
                        key={index} 
                        className="flex items-start justify-between py-2 border-b">
                            <div className="flex items-start">
                                <img src={product.image} alt={product.name} className="w-20 h-24 object-cover mr-4"
                                 />
                                 <div>
                                    <h3 className="text-md">{product.name}</h3>
                                    <p className="text-amber-950">Size: {product.size}</p>
                                    <p className="text-amber-950">Color: {product.color}</p>
                                 </div>
                                
                            </div>
                             <p className="text-xl">৳ {product.price?.toLocaleString()}</p>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center text-lg mb-4">
                    <p> Subtotal</p>
                    <p>৳ {cart.totalPrice?.toLocaleString()}</p>
                </div>
                <div className="flex justify-between items-center text-lg">
                    <p>Shipping</p>
                    <p>Free</p>
                </div>
                <div className="flex justify-between items-center text-lg mt-4 border-t pt-4">
                    <p>Total</p>
                    <p>৳ {cart.totalPrice?.toLocaleString()}</p>
                </div>
            </div>
        </div>
    )
}
