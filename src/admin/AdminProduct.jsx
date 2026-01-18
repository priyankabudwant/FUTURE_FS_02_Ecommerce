import { useEffect, useState } from "react";

const AdminProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const deleteProduct = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error();

      // Remove from UI instantly
      setProducts(products.filter(p => p._id !== id));
    } catch {
      alert("Failed to delete product");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-semibold mb-6 text-gray-700">
        📦 Added Products
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-3">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Price</th>
              <th className="p-3">Category</th>
              <th className="p-3 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map(p => (
              <tr key={p._id} className="border-t hover:bg-gray-50">
                <td className="p-3">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                </td>
                <td className="p-3 font-medium">{p.name}</td>
                <td className="p-3 text-green-600 font-semibold">
                  ₹{p.price}
                </td>
                <td className="p-3">
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {p.category}
                  </span>
                </td>
                <td className="p-3 text-center">
                  <button
                    onClick={() => deleteProduct(p._id)}
                    className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {products.length === 0 && (
          <p className="text-center text-gray-500 mt-4">
            No products available
          </p>
        )}
      </div>
    </div>
  );
};

export default AdminProducts;
