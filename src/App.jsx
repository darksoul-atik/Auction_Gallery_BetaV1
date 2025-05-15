import { Suspense, useState } from "react";
import "./App.css";
import Items from "./Components/Items/Items";
import Banner from "./Default Components/Banner/Banner";
import Footer from "./Default Components/Footer/Footer";
import Navbar from "./Default Components/Navbar/Navbar";
import Cart from "./Components/Cart/Cart";
import { FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./Default Components/Loading/Loading";

const itemsPromise = fetch("/itemsAPI.json").then((res) => res.json());

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [totalBidPrice, setTotalBidPrice] = useState(0);
  




  const handleAddToCart = (item) => {
    const newCart = [...cartItems, item];
    setCartItems(newCart);
  };

 

  const handleTotalBidPrice = (price) => {
    setTotalBidPrice((prev) => prev + price);
  };

  const handleRemovePreviousPrice = (price) => {
    setTotalBidPrice((prev) => prev - price);
  };

  const handleToastify = () => {
    toast("Item Added to your Favorite Items");
  };

  const handleToastifyRemove = () => {
    toast.error("Removed Item to your Favorite Items", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  let cartEmpty;

  if (cartItems.length === 0) {
    cartEmpty = true;
  }

  return (
    <>
      <div className="">
        <Navbar></Navbar>
        <Banner></Banner>
        {/* Main App Background Container */}
        <div className="h-[1400px]  mx-auto bg-[#DCE5F3] ">
          {/* Main Interface Wrapper */}
          <div className="w-5/6 flex flex-col h-full mx-auto py-33  gap-8">
            {/* Active Auctions Title */}
            <div className="flex flex-col gap-5">
              <h1 className="text-[#2A4A70] sora-semibold text-3xl">
                Active Auctions
              </h1>
              <p className="text-[#2A4A70] sora-regular text-xl">
                Discover and bid on extraordinary items
              </p>
            </div>

            {/* Dynamic Item Section Container
             */}

            <div className="flex  gap-20 ">
              <ToastContainer />

              <div className="w-14/16 -ml-20 ">
                <Suspense fallback={<Loading></Loading>}>
                  <Items
                    itemsPromise={itemsPromise}
                    setCartItems={setCartItems}
                    handleTotalBidPrice={handleTotalBidPrice}
                    handleToastify={handleToastify}
                    handleAddToCart={handleAddToCart}
                    
                    
                  ></Items>
                </Suspense>
              </div>

              <div className="w-2/5">
                <div className=" bg-white pb-4 rounded-lg ">
                  {/* Cart Header Container */}
                  <div className="flex  p-4 text-[#2A4A70]  items-center justify-center gap-3">
                    <FaRegHeart size={30} />
                    <p className="text-2xl sora-medium">Favourite Items</p>
                  </div>

                  {/* This Part will be visible when cart is empty */}
                  <div
                    className={`border-t border-gray-100 ${
                      cartEmpty ? "block" : "hidden"
                    }`}
                  >
                    <div className="text-[#2A4A70] justify-center items-center p-12 flex flex-col gap-6">
                      <h1 className="sora-medium text-2xl">No favorites yet</h1>
                      <p className="sora-regular text-center text-md">
                        Click the heart icon on any item to add it to your
                        favorites
                      </p>
                    </div>
                  </div>

                  {/* This Part will be visible when I add something in cart */}
                  <div className="border-t border-gray-100">
                    <Cart
                      cartItems={cartItems}
                      setCartItems={setCartItems}
                      handleToastifyRemove={handleToastifyRemove}
                      handleRemovePreviousPrice={handleRemovePreviousPrice}
                      
                    ></Cart>
                  </div>

                  {/* This Part will display total bid price */}
                  <div className=" ">
                    <div className="flex text-[#2A4A70] pt-3 sora-semibold px-10 items-center text-xl justify-between gap-10">
                      <p>Total bids Amount</p>
                      <h1>${Math.abs(totalBidPrice.toFixed(2))}</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
