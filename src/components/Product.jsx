// src/components/Product.jsx
import { useCart } from "../context";

const Product = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md transition-transform duration-300 hover:scale-105"
      />

      <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
      <p className="text-sm text-gray-500">{product.description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-lg">${product.price}</span>
        <button
  onClick={() => {
    console.log("clicked", product);
    addToCart(product);
  }}
  className="bg-black text-white px-4 py-2 rounded"
>
  Add to Cart
</button>

      </div>
    </div>
  );
};

export default Product;
