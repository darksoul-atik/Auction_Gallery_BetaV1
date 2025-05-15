import React from "react";

const Footer = () => {
  return (
    <div>
      {/* Footer Main container here */}
      <div className="flex flex-col justify-center items-center p-10 mb-3">
        {/* Footer Logo Container */}
        <div className="">
          <a className="btn btn-ghost text-xl ">
            <span className="text-[#003EA4]">Auction</span>
            <span className="-m-1 font-bold text-[#FFD337]">Gallery</span>
          </a>
        </div>

        {/* Footer Slogan */}
        <div className="flex gap-2 mb-6">
          <p>Bid.</p>
          <p>Win.</p>
          <p>Own.</p>
        </div>

        {/* Footer Nav areas */}
        <div className="mb-8">
          <ul>
            <li
              className="poppins-regular text-[14px] flex gap-20 
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

        {/* Footer End Point */}
        <div className="text-[14px]">
          <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
