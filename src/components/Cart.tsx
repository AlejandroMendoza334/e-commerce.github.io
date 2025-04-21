import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, total, clearCart } = useCart();

  const handleCheckout = () => {
    // Aquí podríamos agregar la lógica para procesar el pago
    alert('¡Gracias por tu compra!');
    clearCart();
  };

  return (
    <div className="cart">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div className="cart-item-details">
                  <h3>{item.name}</h3>
                  <p>${item.price} x {item.quantity}</p>
                  <p>Subtotal: ${item.price * item.quantity}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ${total}</h3>
            <div className="cart-actions">
              <button onClick={clearCart} className="clear-cart">Vaciar Carrito</button>
              <button onClick={handleCheckout} className="checkout">Finalizar Compra</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart; 