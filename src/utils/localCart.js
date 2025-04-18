export const getLocalCart = () => {
    return JSON.parse(localStorage.getItem('cart')) || [];
  };
  
  export const addProductToLocalCart = (product) => {
    const cart = getLocalCart();
    const existingProduct = cart.find((item) => item.id === product.id);
  
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
  
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };
  
  export const removeProductFromLocalCart = (productId) => {
    const cart = getLocalCart();
    const updatedCart = cart.filter((item) => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  export const increaseQuantity = (productId) => {
    const cart = getLocalCart();
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };
  
  export const decreaseQuantity = (productId) => {
    const cart = getLocalCart();
    const updatedCart = cart
      .map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      )
      .filter((item) => item.quantity > 0); // remove if quantity drops to 0
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    return updatedCart;
  };
  