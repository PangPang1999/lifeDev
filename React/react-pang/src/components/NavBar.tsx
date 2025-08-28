interface Props {
  cartItemsCount: number;
}

const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <>
      <div>NavBar: {cartItemsCount} items</div>
    </>
  );
};

export default NavBar;
