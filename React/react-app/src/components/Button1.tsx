interface Props {
  onBtnClick: () => void;
}
function Button1({ onBtnClick }: Props) {
  return (
    <>
      <button type="button" className="btn btn-primary" onClick={onBtnClick}>
        Show live alert
      </button>
    </>
  );
}
export default Button1;
