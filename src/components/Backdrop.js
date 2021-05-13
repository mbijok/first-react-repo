function Backdrop(props) {
  return (
    <div
      className="bg-red-500 absolute top-1 right-1 w-10 h-10"
      onClick={props.onCancel}
    />
  );
}

export default Backdrop;
