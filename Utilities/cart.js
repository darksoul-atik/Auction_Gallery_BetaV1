const getItemFromCart = () => {
  const cart = localStorage.getItem("cart");
  if (cart) {
    const storedCart = JSON.parse(cart);
    return storedCart;
  }
  return [];
};
const saveItemToCart = (cart) => {
  const stringifiedCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifiedCart);
};

const addItemToCart = (id) => {
  const cart = getItemFromCart();
  // const newCart = [...cart, id];
  saveItemToCart(cart,id);
};

const removeItemFromCart = (id) => {
  const cart = getItemFromCart();
  const remainingCart = cart.filter((cartid) => cartid !== id);
  saveItemToCart(remainingCart);
};

export { addItemToCart, getItemFromCart, saveItemToCart, removeItemFromCart };
