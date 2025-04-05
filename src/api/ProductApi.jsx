export const searchExternalProducts = async (query) => {
  try {
    const response = await fetch(`https://api.example.com/products?search=${query}`);
    const data = await response.json();
    return data.products || [];
  } catch (error) {
    console.error("Error fetching external products:", error);
    return [];
  }
};
