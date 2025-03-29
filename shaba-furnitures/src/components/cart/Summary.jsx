const Summary = ({ cart }) => {
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = cart.length > 0 ? 10 : 0;
    const total = subtotal + shipping;
  
    return (
      <div className="p-6 border-t">
        <h2 className="text-xl font-bold">Order Summary</h2>
        <ul className="my-4">
          <li>Subtotal: ${subtotal.toFixed(2)}</li>
          <li>Shipping Fee: ${shipping.toFixed(2)}</li>
          <li className="font-bold">Total Price: ${total.toFixed(2)}</li>
        </ul>
  
        <button className="bg-yellow-500 px-6 py-3 text-black font-semibold rounded-lg hover:bg-yellow-400 transition">
          <a href="#payment">Check Out</a>
        </button>
  
        <p className="mt-2 text-gray-600">Review your selected items before checkout</p>
      </div>
    );
  };
  
  export default Summary;
  