import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* ---- Brand Info ---- */}
        <div>
          <h2 className="text-2xl font-extrabold text-white mb-3">E-Gadgets</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover the best gadgets and electronics for your tech lifestyle.  
            Quality. Innovation. Performance.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
              <Facebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
              <Instagram size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400 transition">
              <Twitter size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* ---- Quick Links ---- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/collection" className="hover:text-blue-400 transition">Collection</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* ---- Customer Support ---- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Support</h3>
          <ul className="space-y-2">
            <li><Link to="/faq" className="hover:text-blue-400 transition">FAQ</Link></li>
            <li><Link to="/returns" className="hover:text-blue-400 transition">Returns & Refunds</Link></li>
            <li><Link to="/shipping" className="hover:text-blue-400 transition">Shipping Info</Link></li>
            <li><Link to="/privacy" className="hover:text-blue-400 transition">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* ---- Contact Info ---- */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Contact Us</h3>
          <p className="flex items-center gap-2 text-gray-400">
            <Mail size={18} className="text-blue-400" /> support@egadgets.com
          </p>
          <p className="flex items-center gap-2 text-gray-400 mt-2">
            <Phone size={18} className="text-blue-400" /> +91 98765 43210
          </p>
          <p className="text-gray-400 mt-2">Solapur, Maharashtra, India</p>
        </div>
      </div>

      {/* ---- Copyright ---- */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} <span className="text-white font-semibold">E-Gadgets</span>. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
