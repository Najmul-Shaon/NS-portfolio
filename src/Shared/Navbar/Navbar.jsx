import { Link, NavLink } from "react-router-dom";
import { FaArrowDown } from "react-icons/fa";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-white text-lg font-semibold bg-primaryColor"
              : "hover:bg-primaryColor hover:text-white text-primaryColor text-lg font-semibold"
          }
        >
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/portfolio"
          className={({ isActive }) =>
            isActive
              ? "text-white text-lg font-semibold bg-primaryColor"
              : "hover:bg-primaryColor hover:text-white text-primaryColor text-lg font-semibold"
          }
        >
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-white text-lg font-semibold bg-primaryColor"
              : "hover:bg-primaryColor hover:text-white text-primaryColor text-lg font-semibold"
          }
        >
          About
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-white text-lg font-semibold bg-primaryColor"
              : "hover:bg-primaryColor hover:text-white text-primaryColor text-lg font-semibold"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  const handleResume = () => {
    const dwUrl =
      "https://drive.google.com/uc?export=download&id=1IwwpulNnCb19qO3aw-iQ3zIxonCnGH9g";

    const link = document.createElement("a");
    link.href = dwUrl;
    link.download = "Resume of Najmul Shaon.pdf";
    link.click();
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-bgColor shadow-md z-9999">
      <div className="navbar max-w-screen-xl mx-auto px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
            >
              {navLinks}
            </ul>
          </div>
          {/* site branding  */}
          <div>
            <Link to="/" className="text-2xl text-primaryColor font-bold">
              &lt;Najmul/&gt;
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <Link
            onClick={handleResume}
            className="btn bg-primaryColor rounded-2xl text-white border-borderColor btn-sm md:btn-md"
          >
            <FaArrowDown className="text-lg"></FaArrowDown>{" "}
            <span className="text-lg">Resume</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
