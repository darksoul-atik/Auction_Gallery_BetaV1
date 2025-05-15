import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import "./Item.css";


const Item = ({
  item,
  handleAddToCart,
  handleTotalBidPrice,
  handleToastify,

}) => {
  // UseState Section
  const [isHeart, SetIsHeart] = useState(false);
  const [animateHeart, setAnimateHeart] = useState(false);

 

  // Handle Heart Button
  const handleHeartButton = () => {
    SetIsHeart(!isHeart);
    setAnimateHeart(true);
    handleAddToCart(item);
    handleTotalBidPrice(currentBidPrice);
    handleToastify();
  
  };

  // For Showing Heart Animation
  setTimeout(() => {
    setAnimateHeart(false);
  }, 1000);

  // Object Destructure
  const {
    title,
    currentBidPrice,
    timeLeft,
    image,
    // id,
    // description,
    // bidsCount,
  } = item;

  return (
    <div>
      {/* Main Container */}

      {/* Item Table without table Header */}
      <div className="bg-[#FFFFFF] w-full ">
        <table className=" w-full table-fixed sora-regular text-[#2A4A70] text-lg ">
          <tbody>
            <tr className="border-b hover:bg-gray-200 border-gray-200">
              {/* Image Cell */}
              <td className="p-4">
                <div className="flex items-center justify-center">
                  <img
                    className="size-12 rounded-lg object-cover"
                    src={image}
                    alt=""
                  />
                </div>
              </td>

              {/* Title */}
              <td>
                <div className=" flex  font-semibold items-center">
                  <span>{title}</span>
                </div>
              </td>

              {/* Current Bid Price */}
              <td className="p-4">
                <div className="sora-medium   flex items-center">
                  ${currentBidPrice}
                </div>
              </td>

              {/* Time Left */}
              <td className="p-4">
                <div className="sora-medium  flex items-center">
                  {timeLeft} left
                </div>
              </td>

              {/* Bid Now */}
              <td className="p-4">
                <div className="sora-medium flex items-center">
                  <button
                    onClick={handleHeartButton}
                    disabled={isHeart}
                    className="cursor-pointer disabled:text-gray-500 disabled:cursor-not-allowed"
                  >
                    <div
                      className={`heart-icon ${
                        animateHeart ? "animate-heart" : ""
                      }`}
                    >
                      {isHeart ? (
                        <FaHeart size={25} className="text-red-500" />
                      ) : (
                        <FaRegHeart size={25} className="text-gray-500" />
                      )}
                    </div>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Item;
