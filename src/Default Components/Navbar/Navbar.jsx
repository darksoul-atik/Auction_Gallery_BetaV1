import React from "react";

const Navbar = () => {
  return (
    <div>
      {/* Navbar Main Container */}
      <div className="navbar flex justify-between bg-base-100 shadow-sm">
        {/* Navbar Logo */}
        <div className="">
          <a className="btn btn-ghost text-xl ">
            <span className="text-[#003EA4]">Auction</span>
            <span className="-m-1 font-bold text-[#FFD337]">Gallery</span>
          </a>
        </div>

        {/* Navbar li links here */}
        <div className="">
          <ul>
            <li
              className="poppins-regular flex gap-20 text-lg
            "
            >
              <a className="hover:text-amber-400 " href="#">
                Home
              </a>
              <a className="hover:text-amber-400 " href="#">
                Auctions
              </a>
              <a className="hover:text-amber-400 " href="#">
                Categories
              </a>
              <a className="hover:text-amber-400 " href="#">
                How to works
              </a>
            </li>
          </ul>
        </div>

        {/* Navbar Cart Section here */}
        <div className="flex items-center justify-center gap-3">
          {/* Notification Bell Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator p-1 bg-gray-200 rounded-full relative">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3 3 0 11-6 0h6z"
                  />
                </svg>
                <span className="badge w-5 bg-gray-400 rounded-full text-white badge-sm indicator-item">
                  8
                </span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Image Dropdown */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User profile"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
