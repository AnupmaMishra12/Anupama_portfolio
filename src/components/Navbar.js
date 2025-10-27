import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  const items = ["Home", "About", "Skills", "Projects", "Education", "Contact"];
  return (
    <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Anupama<span className="text-pink-500">.</span>
        </h1>
        <div className="hidden md:flex gap-5">
          {items.map((name) => (
            <Link
              key={name}
              to={name.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              className="text-gray-300 hover:text-pink-400 cursor-pointer"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
