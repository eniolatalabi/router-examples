import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="w-screen h-40 bg-black flex justify-evenly items-center">
      <ul className="flex py-2">
        <li className="text-orange-400 font-bold  text 2x1 px-10">
          <Link to="/Homepage">Home</Link>
        </li>
        <li className="text-orange-400 font-bold  text 2x1 px-10">
          <Link to="/About">About</Link>
        </li>
        <li className="text-orange-400 font-bold  text 2x1 px-10">
          <Link to="/Blog">Blog</Link>
        </li>
        <li className="text-orange-400 font-bold  text 2x1 px-10">
          <Link to="/Services">Services</Link>
        </li>
        <li className="text-orange-400 font-bold  text 2x1 px-10">
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar
