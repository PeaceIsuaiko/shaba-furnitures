export const formatCurrency = (amount) => {
    return `$${amount.toFixed(2)}`;
  };
  
  export const sortByPrice = (products) => {
    return products.sort((a, b) => a.price - b.price);
  };
  
  export const filterByCategory = (products, category) => {
    return products.filter((product) => product.category === category);
  };