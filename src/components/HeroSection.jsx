import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  return (
   <section className="bg-white">
  <div className="max-w-7xl mx-auto px-10">
    <div className="grid md:grid-cols-2 items-center min-h-[80vh] gap-12">

      {/* LEFT CONTENT */}
      <div className="pl-2 md:pl-6">
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          New Collection 2026
        </p>

        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Discover Stylish <br /> Mobile Cover for Every <br /> Mobile
        </h1>

        <p className="text-gray-600 text-lg mb-8 max-w-lg">
          Explore premium Mobile Cover crafted with precision, comfort, and timeless style. Elevate your vision today.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-5">
          <button className="px-8 py-4 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition">
            SHOP NOW
          </button>

          <button className="px-8 py-4 border-2 border-black text-black text-sm font-semibold rounded-full hover:bg-black hover:text-white transition">
            VIEW COLLECTION
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="flex justify-center">
        <div className="bg-gray-50 p-8 rounded-2xl shadow-lg bg-position-[bg-right]">
          <img
            src="https://images.unsplash.com/photo-1625102216615-3a61ee26e4db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob25lJTIwY2FzZXxlbnwwfHwwfHx8MA%3D%3D"
            alt="Eyewear"
            className="max-w-md w-full object-cover animate-float"
          />
        </div>
      </div>

    </div>
  </div>
</section>

  );
};

export default HeroSection;
