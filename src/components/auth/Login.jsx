
import { Input } from '../ui/input';  // Ensure correct import path
import { Label } from '../ui/label';  // Ensure correct import path
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const Login = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Label className="block text-sm font-medium mb-2" htmlFor="email">
              Email
            </Label>
            <Input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <Label className="block text-sm font-medium mb-2" htmlFor="password">
              Password
            </Label>
            <Input
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600"
          >
            Login
          </Button>
          <div>
          <p>Dont have an account! <span className="text-blue-400"><Link to={"/signup"}>SignUp</Link></span></p>
        </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
