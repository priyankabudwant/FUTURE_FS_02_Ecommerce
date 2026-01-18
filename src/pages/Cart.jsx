import { useCart } from "../context";
import { useNavigate } from "react-router-dom";



const Cart = () => {
  const { cart, increaseQty, decreaseQty, removeFromCart } = useCart();
const navigate = useNavigate();
  console.log("🛒 Cart.jsx sees:", cart);

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-xl font-semibold">Your cart is empty 🛒</h2>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Cart Items */}
        <div className="md:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item._id}
              className="flex items-center gap-4 border rounded-lg p-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-gray-500">₹{item.price}</p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => decreaseQty(item._id)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    −
                  </button>

                  <span className="font-medium">{item.quantity}</span>

                  <button
                    onClick={() => increaseQty(item._id)}
                    className="px-3 py-1 border rounded hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ₹{item.price * item.quantity}
                </p>

                <button
                  onClick={() => removeFromCart(item._id)}
                  className="text-red-500 text-sm mt-2 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="border rounded-lg p-6 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Total Items</span>
            <span>{cart.reduce((sum, i) => sum + i.quantity, 0)}</span>
          </div>

          <div className="flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>

          <button onClick={() => navigate("/checkout")}
          className="w-full mt-6 bg-black text-white py-3 rounded hover:bg-gray-800">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
