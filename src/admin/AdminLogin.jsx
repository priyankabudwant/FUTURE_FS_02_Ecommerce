import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock } from "lucide-react"; // Login icon (install lucide-react if not already)

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/admins", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("adminToken", data.token);
      navigate("/admin/dashboard");
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-600 to-indigo-500 flex items-center justify-center px-4 overflow-hidden">
      {/* Floating Background Shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-10 left-20 w-72 h-72 bg-yellow-400 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>

      {/* Login Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-10 z-10">
        <div className="flex justify-center mb-6">
          <Lock className="w-12 h-12 text-indigo-600" />
        </div>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Admin Login
        </h2>
        <form onSubmit={loginHandler} className="space-y-6">
         {/* Email Input */}
<div className="relative">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder=" "
    required
    className="peer w-full px-4 pt-7 pb-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
  />
  <label className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm">
    Admin Email
  </label>
</div>

{/* Password Input */}
<div className="relative">
  <input
    type="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder=" "
    required
    className="peer w-full px-4 pt-7 pb-2 border rounded-xl border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white"
  />
  <label className="absolute left-4 top-2.5 text-gray-400 text-sm transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-1 peer-focus:text-indigo-600 peer-focus:text-sm">
    Password
  </label>
</div>


          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6 text-sm">
          &copy; 2026 Your Company. All rights reserved.
        </p>
      </div>

      {/* Animation Styles */}
      <style>
        {`
          @keyframes blob {
            0%, 100% { transform: translate(0px, 0px) scale(1); }
            33% { transform: translate(30px, -50px) scale(1.1); }
            66% { transform: translate(-20px, 20px) scale(0.9); }
          }
          .animate-blob {
            animation: blob 8s infinite;
          }
          .animation-delay-2000 {
            animation-delay: 2s;
          }
          .animation-delay-4000 {
            animation-delay: 4s;
          }
        `}
      </style>
    </div>
  );
}
