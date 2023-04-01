const addToDb = (name) => {
  let shoppingCart = getShoppingCart();
  const quantity = shoppingCart[name];
  if (!quantity) {
    shoppingCart[name] = 1;
  } else {
    const newQuantity = quantity + 1;
    shoppingCart[name] = newQuantity;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const getShoppingCart = () => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { addToDb, getShoppingCart };
