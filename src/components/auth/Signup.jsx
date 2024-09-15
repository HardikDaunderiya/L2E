import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add form submission logic here
  };

  return (
    <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white border border-gray-300 p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="font-bold text-xl mb-5">Signup</h1>
        <div>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-1 w-full"
          />
        </div>

        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-1 w-full"
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-1 w-full"
          />
        </div>

        <Button type="submit" className="w-full bg-indigo-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-600">
          Sign Up
        </Button>
        <div>
          <p>Already have an account <span className="text-blue-400"><Link to={"/login"}>Login</Link></span></p>
        </div>
      </form>
    </div>
    <Footer/>
    </>
  );
};

export default Signup;
