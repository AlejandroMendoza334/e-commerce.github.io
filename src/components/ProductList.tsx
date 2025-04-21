import { useState } from 'react';
import { products, Product } from '../data/product';
import { useCart } from '../context/CartContext';
import SearchBar from './SearchBar';

const ProductList = () => {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  const categories = ['Todas', ...new Set(products.map(product => product.category))];

  const handleSearch = (searchTerm: string, category: string, minPrice: number, maxPrice: number) => {
    const filtered = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'Todas' || product.category === category;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered);
  };

  return (
    <div className="product-list">
      <SearchBar onSearch={handleSearch} categories={categories} />
      <div className="products-header">
        <h2>Nuestros Productos</h2>
        <span className="products-count">
          {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
        </span>
      </div>
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price}</p>
              <p className="category">{product.category}</p>
              <button onClick={() => addToCart(product)}>Agregar al carrito</button>
            </div>
          ))
        ) : (
          <div className="no-results">
            <p>No se encontraron productos que coincidan con tu búsqueda</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList; 