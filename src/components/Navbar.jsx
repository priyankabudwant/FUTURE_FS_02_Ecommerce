import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiFilter, FiShoppingBag } from "react-icons/fi";

const Navbar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user")); // optional

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <header className="w-full border-b bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 flex items-center justify-center border rounded-full text-lg">
            👁️
          </div>
          <div className="leading-tight">
            <h1 className="font-semibold text-base tracking-wide">TITAN</h1>
            <p className="text-[10px] tracking-widest text-gray-500">MOBILE COVER</p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-black">Home</Link>
          <Link to="/shop" className="hover:text-black">Shop</Link>
          <Link to="/featured" className="hover:text-black">Featured</Link>
          <Link to="/recommended" className="hover:text-black">Recommended</Link>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">

          <button className="hidden md:flex items-center gap-2 border px-4 py-2 rounded-md text-sm text-gray-600 hover:bg-gray-50">
            <FiFilter />
            Filters
          </button>

          <input
            className="px-4 py-2 border rounded-md text-sm
                       placeholder:text-gray-500
                       focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Search products..."
            type="text"
          />

          {/* Cart */}
          <Link to="/cart" className="relative">
            <FiShoppingBag className="text-xl text-gray-700" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs
                             w-5 h-5 flex items-center justify-center rounded-full">
              1
            </span>
          </Link>

          {/* AUTH SECTION */}
          {!token ? (
            <div className="flex items-center gap-3 text-sm font-medium">
              <Link to="/login" className="hover:text-black">Login</Link>
              <Link
                to="/register"
                className="border px-3 py-1 rounded-md hover:bg-gray-100"
              >
                Register
              </Link>
            </div>
          ) : (
            <div className="hidden sm:flex items-center gap-3">
              <span className="text-sm font-medium text-gray-700">
                {user?.name || "User"}
              </span>
              <img
                src="https://i.pravatar.cc/40"
                alt="user"
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="text-xs text-red-500 hover:underline"
              >
                Logout
              </button>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Navbar;
