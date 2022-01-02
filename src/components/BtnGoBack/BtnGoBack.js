export default function BtnGoBack(props) {
  const { onClick } = props;
  return (
    <button type="button" onClick={onClick}>
      Go back
    </button>
  );
}
