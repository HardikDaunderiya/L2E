const Navbar = () => {
  return (
    <div > {/* Added w-screen for full width */}
      <nav className="w-screen p-4 bg-gray-300 fixed top-0 left-0 z-10">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-white text-3xl font-bold tracking-wider">
            <span className="text-yellow-500">L</span>
            <span className="text-red-500">2</span>
            <span className="text-blue-500">E</span>
          </div>

          {/* Links */}
          <div className="hidden md:flex space-x-4">
            <a href="#home" className="hover:text-yellow-500">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-500">
              About
            </a>
            <a href="#services" className="hover:text-yellow-500">
              Services
            </a>
            <a href="#contact" className="hover:text-yellow-500">
              Contact
            </a>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button className="text-white focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
