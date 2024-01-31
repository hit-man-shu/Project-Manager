import React from "react";
import NewTask from "./NewTask";

const Task = ({ onAdd, onDelete, tasks }) => {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-bold text-stone-700">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="my-4 text-stone-800">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="mt-8 rounded-md bg-stone-100 p-4">
          {tasks.map((task) => {
            return (
              <li key={task.id} className="my-4 flex justify-between">
                <span>{task.text}</span>
                <button
                  className="text-stone-700 hover:text-red-500"
                  onClick={() => onDelete(task.id)}
                >
                  Clear
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Task;
