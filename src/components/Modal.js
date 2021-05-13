function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="absolute top-10 left-1/2 bg-gray-900 text-gray-100 p-5">
      <p>Are you sure?</p>
      <button
        onClick={cancelHandler}
        className="border-yellow-300 border-dotted border-2"
      >
        Cancel
      </button>
      <button
        onClick={confirmHandler}
        className="border-green-300 border-dotted border-2"
      >
        Confirm
      </button>
    </div>
  );
}

export default Modal;
