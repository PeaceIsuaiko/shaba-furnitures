import Head from "./Head";
import CartList from "./CartList";
import Summary from "./Summary";
import Footer from "../home/Footer";

const Cart = ({ cart, addToCart, removeFromCart, minusFromCart }) => {
  return (
    <div>
      <Head />
      <CartList cart={cart} addToCart={addToCart} minusFromCart={minusFromCart} removeFromCart={removeFromCart} />
      <Summary cart={cart} />
      <Footer />
    </div>
  );
};

export default Cart;
