interface Props {
  cartItems: string[];
  onClearCart: () => void;
}

const Cart = ({ cartItems, onClearCart }: Props) => {
  return (
    <>
      <div>Cart</div>
      <ul>
        {cartItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <button onClick={onClearCart}>UPDATE</button>
    </>
  );
};

export default Cart;
