import React, { forwardRef, useImperativeHandle, useRef } from "react";
import ReactDOM from "react-dom";
import Button from "./Button";

const Modal = forwardRef(({ children, buttonCaption = "Close" }, ref) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return ReactDOM.createPortal(
    <dialog
      ref={dialog}
      className="rounded-md p-4 shadow-md backdrop:bg-stone-900/90"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById("modal-root"),
  );
});

export default Modal;