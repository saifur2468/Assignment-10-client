import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import DarkModeToggle from "./DarkModeToggle";
import { useAuth } from "./AutSection/AuthoProvider";
import { auth } from "./AutSection/AuthContext";
import { signOut } from "firebase/auth";

const Navbar = () => {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => console.log("Logged out successfully"))
      .catch((err) => console.error(err));
  };

  const navItems = [
    { to: "/home", label: "Home" },
    { to: "/AddReviews", label: "Add Review" },
    { to: "/Reviews", label: "All Reviews" },
    { to: "/MyReviews", label: "My Reviews" },
    { to: "/GameWatchList", label: "Game WatchList" },
  ];

  return (
    <nav className="bg-white/80 dark:bg-gray-900 sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-red-500">
          🎮 GameReview
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4 items-center">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    isActive ? "font-semibold text-red-500" : "text-gray-700 dark:text-gray-200"
                  }`
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <DarkModeToggle />
          </li>

          {/* Login/Logout */}
          <li>
            {user ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white dark:bg-gray-900 p-4 space-y-2 shadow-md">
          {navItems.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.label}
              </Link>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <DarkModeToggle />
          </li>

          {/* Login/Logout */}
          <li>
            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="w-full px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg shadow-md transition duration-200"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                onClick={() => setIsOpen(false)}
                className="w-full px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md block text-center rounded-lg transition duration-200"
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
