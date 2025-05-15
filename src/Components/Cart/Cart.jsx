import React from "react";
import { RxCross2 } from "react-icons/rx";
import { removeItemFromCart } from "../../../Utilities/cart";

const Cart = ({
  cartItems,
  setCartItems,
  handleToastifyRemove,
  handleRemovePreviousPrice,
}) => {
  console.log(cartItems);

  const handleRemoveItem = (item) => {
    const newItems = cartItems.filter((cartItem) => cartItem.id !== item.id);
    removeItemFromCart(item.id);
    setCartItems(newItems);
    handleToastifyRemove();
    handleRemovePreviousPrice(item.currentBidPrice);
  };

  return (
    <div>
      {cartItems.map((items) => (
        <div key={items.id}>
          <div className="bg-[#FFFFFF] ">
            <table className="w-full table-fixed sora-regular text-[#2A4A70] text-lg">
              <tbody>
                <tr className="border-b hover:bg-gray-200 border-gray-200">
                  {/* Image */}
                  <td className="w-1/5">
                    <div className="flex items-center justify-center">
                      <img
                        className="size-12 border-2 rounded-lg object-cover"
                        src={items.image}
                        alt=""
                      />
                    </div>
                  </td>

                  {/* Title and Price */}
                  <td className="p-4">
                    <div className="flex gap-2 flex-col items-start justify-center">
                      <p className="sora-bold text-sm">{items.title}</p>

                      <div className="flex gap-6 items-center">
                        {/* Current Bid Price */}
                        <div className="flex flex-col items-center justify-center w-14 ">
                          <p className="text-sm">${items.currentBidPrice}</p>
                        </div>

                        {/* Bids Count */}
                        <div className="flex flex-col items-center justify-center">
                          <p className="text-sm">Bids: {items.bidsCount}</p>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Remove Item Button */}
                  <td className="w-1/5">
                    <div className="flex items-center justify-center">
                      <button
                        onClick={() => {
                          handleRemoveItem(items);
                        }}
                        className="cursor-pointer"
                      >
                        <RxCross2 />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
