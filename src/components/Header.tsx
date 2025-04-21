import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const { cart } = useCart();
  const { darkMode, toggleTheme } = useTheme();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="app-header">
      <div className="header-left">
        <h1>🛍️ Mi Tienda Online</h1>
      </div>
      <div className="header-right">
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="cart-summary">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalItems}</span>
          <span className="cart-text">Items</span>
        </div>
      </div>
    </header>
  );
};

export default Header; 