import React, { useState, useEffect } from "react";
import Toggle from "../components/Toggle";

// Function to find similar products based on name or description
const getSimilarProducts = (products, currentProduct) => {
  return products.filter((product) => {
    // Compare by name or description, you can adjust this logic based on your preference
    return (
      (product.name.toLowerCase().includes(currentProduct.name.toLowerCase()) ||
      product.description.toLowerCase().includes(currentProduct.description.toLowerCase())) &&
      product.id !== currentProduct.id // Exclude the current product
    );
  });
};

function Recom() {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState(null);
  const [purchaseHistory, setPurchaseHistory] = useState([]);

  // Example of customer's purchase history (no categories now)
  const customerPurchaseHistory = [
    { id: 1, name: "Modern Table", price: 250, description: "A stylish modern table" },
    { id: 2, name: "Office Chair", price: 150, description: "Comfortable office chair" },
    { id: 3, name: "Sofa Set", price: 500, description: "Luxurious sofa set" },
    { id: 4, name: "Coffee Table", price: 100, description: "Small coffee table" },
    { id: 5, name: "Desk Lamp", price: 50, description: "Adjustable desk lamp" },
    { id: 6, name: "Dining Table", price: 300, description: "Spacious dining table" }
  ];

  const currentProductId = 1;  // This would come dynamically based on route or context

  // Fetch the current product data (simulated here)
  useEffect(() => {
    const selectedProduct = customerPurchaseHistory.find((product) => product.id === currentProductId);
    setCurrentProduct(selectedProduct);
    setPurchaseHistory(customerPurchaseHistory);  // Normally, you'd fetch the user's purchase history from a backend
  }, [currentProductId]);

  // Update related products when the current product or purchase history changes
  useEffect(() => {
    if (currentProduct && purchaseHistory.length > 0) {
      const related = getSimilarProducts(purchaseHistory, currentProduct);
      setRelatedProducts(related);
    }
  }, [currentProduct, purchaseHistory]);

  return (
    <div>
      <Toggle>
        <div className="container mx-auto px-4 py-8">
          <h3 className="text-2xl font-bold mb-6">Products You May Like</h3>
          <div className="related-products">
            {relatedProducts.length === 0 ? (
              <p>No related products found.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedProducts.map((product) => (
                  <div key={product.id} className="product-card bg-white p-4 rounded-lg shadow-lg">
                    <img
                      src="https://via.placeholder.com/150"
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg mb-4"
                    />
                    <h4 className="text-xl font-semibold">{product.name}</h4>
                    <p className="text-lg font-semibold text-green-600">${product.price}</p>
                    <p className="text-gray-500">{product.description}</p>
                    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full w-full">
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Toggle>
    </div>
  );
}

export default Recom;
