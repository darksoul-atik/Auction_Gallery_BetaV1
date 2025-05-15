import React, { use } from "react";
import Item from "../Item/Item";


const Items = ({
  itemsPromise,
  handleAddToCart,
  handleTotalBidPrice,
  handleToastify,
 
}) => {
  const items = use(itemsPromise);



  return (
    <div>
      {/* Main Div starts from here */}
      <div>
        {/* Item Table */}
        <div
          className=" bg-[#FFFFFF] 
          rounded-lg pb-10"
        >
          {/* Table Header */}
          <div className="bg-[#FFFFFF] w-full rounded-t-xl">
            <table className=" w-full table-fixed sora-regular text-[#2A4A70] text-lg">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-4 ">
                    <div className="flex ml-40  justify-center">Items</div>
                  </th>

                  <th className="p-4">
                    <div className="flex items-end -mr-35 justify-center">
                      Current Bid
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="flex items-center ml-15 justify-center">
                      Time Left
                    </div>
                  </th>
                  <th className="p-4">
                    <div className="flex items-center ml-8 justify-start">
                      Bid Now
                    </div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          {items.map((item) => (
            <Item
              key={item.id}
              item={item}
              handleAddToCart={handleAddToCart}
              handleTotalBidPrice={handleTotalBidPrice}
              handleToastify={handleToastify}
             
            ></Item>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
