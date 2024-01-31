import React, { useRef, useState } from "react";
import Modal from "./Modal";

const NewTask = ({ onAdd }) => {
  const modal = useRef();

  const [enterTask, setEnterTask] = useState("");

  const handleChange = (e) => {
    setEnterTask((prev) => {
      return e.target.value;
    });
  };

  const handleClick = () => {
    if (enterTask.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd(enterTask);
    setEnterTask("");
  };

  return (
    <>
      <Modal ref={modal}>
        <h2 className="my-4 text-xl font-bold text-stone-700">Invalid Input</h2>
        <p className="mb-4 text-stone-600">
          Oops ... loks like you forgot to enter a value.
        </p>
        <p className="mb-4 text-stone-600">
          Please make sure you provide a valid value for input feild.
        </p>
      </Modal>
      <div className="flex items-center gap-4">
        <input
          type="text"
          className="w-64 rounded-sm bg-stone-200 px-2 py-1"
          onChange={handleChange}
          value={enterTask}
          placeholder="Enter a Task"
        />
        <button
          className="text-stone-700 hover:text-slate-950"
          onClick={handleClick}
        >
          Add Task
        </button>
      </div>
    </>
  );
};

export default NewTask;
