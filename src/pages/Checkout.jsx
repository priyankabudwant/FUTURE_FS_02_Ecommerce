import { useCart } from "../context";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const placeOrder = () => {
    if (!form.name || !form.address || !form.phone) {
      alert("Please fill all fields");
      return;
    }

    alert("Order placed successfully 🎉");

    // Clear cart
    cart.forEach((item) => removeFromCart(item._id));

    navigate("/");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <h2 className="text-xl">Cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-8">
      {/* Billing Form */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Billing Details</h2>

        <input
          name="name"
          placeholder="Full Name"
          className="w-full border p-3 mb-3 rounded"
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          className="w-full border p-3 mb-3 rounded"
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone Number"
          className="w-full border p-3 mb-3 rounded"
          onChange={handleChange}
        />

        <button
          onClick={placeOrder}
          className="w-full bg-black text-white py-3 rounded mt-4"
        >
          Place Order
        </button>
      </div>

      {/* Order Summary */}
      <div className="border rounded-lg p-6 h-fit">
        <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

        {cart.map((item) => (
          <div key={item._id} className="flex justify-between mb-2">
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr className="my-4" />

        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>₹{total}</span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
