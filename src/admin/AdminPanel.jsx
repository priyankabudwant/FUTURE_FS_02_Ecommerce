import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";
import { Home, ShoppingCart, Users, BarChart2 } from "lucide-react";
import { useNavigate } from "react-router-dom";




const userStats = [
  { month: "Jan", Visits: 100, Pageviews: 200 },
  { month: "Feb", Visits: 150, Pageviews: 220 },
  { month: "Mar", Visits: 200, Pageviews: 250 },
  { month: "Apr", Visits: 180, Pageviews: 300 },
  { month: "May", Visits: 220, Pageviews: 350 },
];

const trafficData = [
  { name: "Organic", value: 44.46, color: "#2563EB" },
  { name: "Referral", value: 5.54, color: "#10B981" },
  { name: "Other", value: 50, color: "#FBBF24" },
];

export default function AdminDashboard() {
  const [activeMenu, setActiveMenu] = useState("Dashboard");
    const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-900 text-white flex flex-col">
        <div className="text-2xl font-bold p-6 border-b border-gray-700">
          Hound
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <button
            className={`flex items-center gap-2 w-full p-2 rounded hover:bg-gray-800 ${
              activeMenu === "Dashboard" ? "bg-red-600" : ""
            }`}
            onClick={() => setActiveMenu("Dashboard")}
          >
            <Home className="w-5 h-5" />
            Dashboard
          </button>
          <button
      className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-800"
      onClick={() => navigate("/admin/add-product")}
    >
     
      E-Commerce
    </button>
          <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-800">
            <Users className="w-5 h-5" />
            Users
          </button>
          <button className="flex items-center gap-2 w-full p-2 rounded hover:bg-gray-800">
            <BarChart2 className="w-5 h-5" />
            Analytics
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-red-500 text-white rounded-xl p-4 shadow">
            <p className="text-xl font-bold">914,001</p>
            <p className="text-sm">Visits</p>
          </div>
          <div className="bg-yellow-400 text-white rounded-xl p-4 shadow">
            <p className="text-xl font-bold">46.41%</p>
            <p className="text-sm">Bounce Rate</p>
          </div>
          <div className="bg-green-500 text-white rounded-xl p-4 shadow">
            <p className="text-xl font-bold">4,054,876</p>
            <p className="text-sm">Pageviews</p>
          </div>
          <div className="bg-blue-500 text-white rounded-xl p-4 shadow">
            <p className="text-xl font-bold">46.43%</p>
            <p className="text-sm">Growth Rate</p>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold mb-4">User Statistics</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={userStats}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="Visits" stroke="#F43F5E" />
                <Line type="monotone" dataKey="Pageviews" stroke="#2563EB" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold mb-4">Visit By Traffic Types</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={trafficData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={80}
                  label
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2">
              {trafficData.map((d) => (
                <div key={d.name} className="flex items-center gap-2">
                  <span
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: d.color }}
                  ></span>
                  <span className="text-gray-700">{d.name}: {d.value}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
