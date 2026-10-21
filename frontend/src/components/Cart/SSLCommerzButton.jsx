import { useState } from "react";

export const SSLCommerzButton = ({ amount, cartItems, shippingAddress, onSuccess, onError }) => {
    const [loading, setLoading] = useState(false);

    const handlePayment = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);

            if (onSuccess) {
                onSuccess({ transactionId: "TEST_TRAN_" + Date.now(), amount });
            }

        }, 1500);
    };

    return (
        <button
            type="button"
            onClick={handlePayment}
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded font-medium transition duration-200 shadow-md flex items-center justify-center space-x-2"
        >
            {loading ? (
                <span>Connecting to SSLCommerz...</span>
            ) : (
                <span>Pay ৳ {amount} with SSLCommerz</span>
            )}
        </button>
    );
};
