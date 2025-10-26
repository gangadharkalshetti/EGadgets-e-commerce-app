import { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingCart,
  Home,
  ShoppingBag,
  Phone,
  Info,
  Search,
  User,
  LogOut,
  Package,
  Heart,
  UserCircle2,
  ChevronDown,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "Collection", path: "/collection", icon: ShoppingBag },
  { name: "Contact", path: "/contact", icon: Phone },
  { name: "About", path: "/about", icon: Info },
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const dropdownRef = useRef(null);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {/* ===== Navbar ===== */}
      <header className="bg-sky-400 text-white sticky top-0 z-50 shadow-md backdrop-blur-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
          {/* ===== Left: Menu + Logo ===== */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleSidebar}
              aria-label="Toggle Menu"
              className="p-1 hover:bg-sky-500 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            >
              <Menu size={26} />
            </button>

            <NavLink
              to="/"
              className="font-bold text-2xl tracking-wide hover:bg-sky-500 rounded-md p-1 transition"
            >
              E-Gadgets
            </NavLink>
          </div>

          {/* ===== Center: Search bar ===== */}
            <form
            onSubmit={handleSearch}
            className="hidden sm:flex flex-1 max-w-md mx-4 relative"
          >
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
            >
              <Search size={20} />
            </button>
          </form>

          {/* ===== Middle: Desktop Nav (Icons Only) ===== */}
          <nav className="hidden sm:flex text-sm gap-6 font-medium">
            {navLinks.map(({ name, path, icon: Icon }) => (
              <NavLink
                key={name}
                to={path}
                title={name}
                className={({ isActive }) =>
                  `p-1 rounded-md transition-all duration-200 ${
                    isActive
                      ? "bg-sky-500 text-white"
                      : "hover:bg-sky-500 text-white"
                  }`
                }
              >
                <Icon size={22} />
              </NavLink>
            ))}
          </nav>

          {/* ===== Right: Profile + Cart ===== */}
          <div className="flex items-center gap-4 relative" ref={dropdownRef}>
            {/* === Profile Dropdown === */}
            <div className="relative">
              <button
                onClick={() => setShowProfileMenu((prev) => !prev)}
                className="flex items-center gap-1 p-1 rounded-md hover:bg-sky-500 transition-all"
              >
                <User size={22} />
                <span className="hidden sm:inline font-medium">Login</span>
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    showProfileMenu ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white text-sky-900 rounded-lg shadow-xl border border-gray-100 z-50 animate-fadeIn">
                  <div className="flex flex-col py-2 text-sm">
                    <NavLink
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-sky-50 transition"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <UserCircle2 size={18} /> My Profile
                    </NavLink>

                    <NavLink
                      to="/orders"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-sky-50 transition"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <Package size={18} /> My Orders
                    </NavLink>

                    <NavLink
                      to="/wishlist"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-sky-50 transition"
                      onClick={() => setShowProfileMenu(false)}
                    >
                      <Heart size={18} /> Wishlist
                    </NavLink>

                    <button
                      onClick={() => {
                        setShowProfileMenu(false);
                        alert("Logged out!");
                      }}
                      className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 transition"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* === Cart Icon === */}
            <NavLink
              to="/cart"
              className="relative flex items-center gap-2 p-1 rounded-md hover:bg-sky-500 transition-colors"
            >
              <ShoppingCart size={24} />
              <span className="hidden sm:inline font-medium">Cart</span>
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                2
              </span>
            </NavLink>
          </div>
        </div>
         <div className="sm:hidden px-4 pb-3">
          <form onSubmit={handleSearch} className="relative w-full">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 rounded-full bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-800"
            />
            <button
              type="submit"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-900"
            >
              <Search size={20} />
            </button>
          </form>
        </div>
      </header>

      {/* ===== Overlay ===== */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40 backdrop-blur-sm"
          onClick={toggleSidebar}
          aria-hidden="true"
        ></div>
      )}

      {/* ===== Sidebar ===== */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 bg-white text-sky-900 shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 border-b border-sky-200 bg-sky-100">
          <h2 className="text-lg font-bold text-sky-800">Hello, User 👋</h2>
          <button
            onClick={toggleSidebar}
            aria-label="Close Menu"
            className="text-sky-700 hover:text-sky-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-1 p-4 font-medium">
          {navLinks.map(({ name, path, icon: Icon }) => (
            <NavLink
              key={name}
              to={path}
              onClick={toggleSidebar}
              className={({ isActive }) =>
                `flex items-center gap-3 py-2 px-3 rounded-md transition-colors ${
                  isActive
                    ? "bg-sky-100 text-sky-800 font-semibold"
                    : "hover:bg-sky-100 hover:text-sky-800"
                }`
              }
            >
              <Icon size={20} className="text-sky-600" />
              {name}
            </NavLink>
          ))}

          {/* Profile Options in Sidebar */}
          <NavLink
            to="/profile"
            className="flex items-center gap-3 py-2 px-3 hover:bg-sky-100 rounded-md"
            onClick={toggleSidebar}
          >
            <UserCircle2 size={20} className="text-sky-600" />
            My Profile
          </NavLink>
          <NavLink
            to="/orders"
            className="flex items-center gap-3 py-2 px-3 hover:bg-sky-100 rounded-md"
            onClick={toggleSidebar}
          >
            <Package size={20} className="text-sky-600" />
            My Orders
          </NavLink>
          <NavLink
            to="/wishlist"
            className="flex items-center gap-3 py-2 px-3 hover:bg-sky-100 rounded-md"
            onClick={toggleSidebar}
          >
            <Heart size={20} className="text-sky-600" />
            Wishlist
          </NavLink>
       
        </nav>

        {/* Sidebar Footer */}
        <div className="mt-auto flex flex-col border-t border-sky-200 p-4 text-sm text-sky-700">
          <p className="font-semibold">Need help?</p>
          <NavLink
            to="/contact"
            onClick={toggleSidebar}
            className="hover:text-sky-600"
          >
            Contact Support
          </NavLink>
          
        </div>

       <div className="p-1 font-medium fixed bottom-0">
         <button
            onClick={() => {
              toggleSidebar();
              alert("Logged out!");
            }}
            className="flex  items-center  gap-3 py-2 px-6 text-red-600 hover:bg-red-50 rounded-md"
          >
            <LogOut size={20} /> Logout
          </button>
       </div>

      </aside>
    </>
  );
}

export default Navbar;