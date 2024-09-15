const Footer = () => {
  return (
    <footer className="w-screen p-4 bg-gray-300 shadow-lg fixed bottom-0 left-0 z-10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6">
        {/* Left Section - Company Name or Logo */}
        <div className="text-2xl font-bold tracking-wider mb-4 md:mb-0">
          <span className="text-yellow-500">L</span>
          <span className="text-red-500">2</span>
          <span className="text-blue-500">E</span>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="flex space-x-4 text-center mb-4 md:mb-0">
          <a href="#privacy" className="hover:text-yellow-500">Privacy Policy</a>
          <a href="#terms" className="hover:text-yellow-500">Terms of Service</a>
          <a href="#contact" className="hover:text-yellow-500">Contact Us</a>
        </div>

        {/* Right Section - Copyright */}
        <div className="text-sm text-center">
          &copy; {new Date().getFullYear()} L2E. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

  