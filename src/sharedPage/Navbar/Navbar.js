import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import "./Navbar.css";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("clicked");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="navbar neutral my-5  rounded-xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>

            {user?.email ? (
              <>
                <label
                  htmlFor="dashboard-drawer"
                  className="btn btn-primary drawer-button"
                >
                  Open drawer
                </label>
                <Link to="/dashboard" className="justify-between">
                  Dashboard
                </Link>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </ul>
        </div>
        <div className="avatar online placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
            <img src="https://i.ibb.co/NNNYxtS/logo.jpg" alt="logo" />
          </div>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case font-semibold text-2xl"
        >
          RT
          <sub className="text-green-300">
            <small>ReliableTech</small>
          </sub>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          {user?.email ? (
            <li>
              <Link to="/dashboard" className="justify-between">
                Dashboard
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user?.email && (
          <>
            <div className="badge badge-outline">{user?.email}</div>
            <button onClick={handleSignOut} className="btn">
              Sign Out
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
