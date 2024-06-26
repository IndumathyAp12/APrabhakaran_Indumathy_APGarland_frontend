import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import ProductList from './ProductList'; 

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch products from your API or local storage
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      // Fetch products from API endpoint
      const response = await fetch('/products'); 
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setProducts(data); 
    } catch (error) {
      console.error('Error fetching products:', error);
        }
  };

  // Filter products based on search term
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Product List</h1>
      <SearchBar value={searchTerm} onChange={setSearchTerm} />

      <ProductList products={filteredProducts} />
    </div>
  );
};

export default ProductPage;
