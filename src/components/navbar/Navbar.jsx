import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const name = localStorage.getItem('name');

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Packages', path: '/packdege' },
    { name: 'Locations', path: '/locations' },
    { name: 'Things To Do', path: '/things' },
  ];

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-sm bg-black/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex justify-between items-center">
  
      <Link to="/" className="flex items-center gap-2 text-white text-xl font-bold">
        <img src={logo} alt="Logo" className="h-10 w-10 rounded-4xl" />
        <span>SmartTravel</span>
      </Link>


        <ul className="hidden md:flex flex-wrap gap-6 bg-white/10 px-4 py-2 rounded-xl">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.path}
                className={`text-white font-medium relative after:block after:h-0.5 after:bg-yellow-300 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left transition-colors duration-200 ${
                  location.pathname === item.path ? 'text-yellow-300' : 'hover:text-yellow-300'
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {!token ? (
            <Link
              to="/signup"
              className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-300 transition"
            >
              Signup / Login
            </Link>
          ) : (
            <>
              <span className="hidden md:block text-white font-semibold">Hi, {name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-red-400 transition"
              >
                Logout
              </button>
            </>
          )}

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-3xl focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-black/80 text-white px-6 py-4 space-y-4">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`block font-medium ${
                location.pathname === item.path ? 'text-yellow-300' : 'hover:text-yellow-300'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
