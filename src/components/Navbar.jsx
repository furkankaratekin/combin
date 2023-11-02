import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between relative z-50">
      <div className="flex justify-between items-center">
        <Link to="/">
          <span className="text-2xl text-blue-800 font-bold font-[Poppins] cursor-pointer">
            OUTFITS
          </span>
        </Link>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={toggleMenu}
        >
          <GiHamburgerMenu />
        </span>
      </div>
      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 ${
          menuOpen ? "opacity-100 top-[80px]" : "opacity-0 top-[-400px]"
        } transition-all ease-in duration-500`}
      >
        <li className="mx-4 my-6 md:my-0">
          <a
            href="#"
            className="text-xl font-medium hover:text-cyan-500 duration-500"
          >
            SOSYAL
          </a>
        </li>
        <Link to='/news'>
          <li className="mx-4 my-6 md:my-0">
            <a
              href="#"
              className="text-xl font-medium hover:text-cyan-500 duration-500"
            >
              HABERLER
            </a>
          </li>
        </Link>
        <li className="mx-4 my-6 md:my-0 relative group">
          <a
            href="#"
            className="text-xl font-medium hover:text-cyan-500 duration-500 group"
          >
            AKIMLAR
          </a>
          <ul
            className={`z-10 absolute top-full left-0 bg-gray-50 p-4 hidden group-hover:block md:w-48 md:ml-0 ml-4 md:py-0 py-4 duration-500`}
          >
            <li>
              <a href="#" className="hover:text-cyan-500">
                Service 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500">
                Service 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-cyan-500">
                Service 3
              </a>
            </li>
          </ul>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link to="/outfits">
            <div
              href="/outfits"
              className="text-xl font-medium hover:text-cyan-500 duration-500"
            >
              KOMBİNLER
            </div>
          </Link>
        </li>
        <li className="mx-4 my-6 md:my-0">
          <Link to="/color">
            <a
              href="#"
              className="text-xl font-medium hover:text-cyan-500 duration-500"
            >
              RENK UYUMU
            </a>
          </Link>
        </li>
        <Link to="/logIn">
          <button className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded">
            ÜYE OL
          </button>
        </Link>

        <h2 className="" />
      </ul>
    </nav>
  );
};

export default Navbar;
