import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      {/* Main Container */}
      <div className="banner flex items-center justify-start">
        {/* Banner Texts and Info */}
        <div className="flex flex-col gap-5 items-start  w-180 p-10 ml-15">
          <h1 className="sora-semibold text-white text-5xl">
            Bid on Unique Items from Around the World
          </h1>
          <h4 className=" font-thin text-2xl text-white">
            Discover rare collectibles, luxury goods, and vintage treasures in
            our curated auctions
          </h4>

          <button className="btn rounded-3xl hover:bg-amber-100">Explore Auctions</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
