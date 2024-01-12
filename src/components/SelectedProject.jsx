import React from "react";
import Task from "./Task";

const SelectedProject = ({ project, onDelete, onAddTask, onDeleteTask,tasks }) => {
  const formatedDate = new Date(project.dueDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mt-16 w-[560px]">
      <header className="mb-4 border-b-2 border-stone-300 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="mb-2 text-3xl font-bold text-stone-600">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-stone-600 hover:text-stone-950"
          >
            Delete
          </button>
        </div>

        <p className="mb-4 text-stone-400">{formatedDate}</p>
        <p className=" whitespace-pre-wrap text-stone-600">
          {project.description}
        </p>
      </header>
      <Task tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask} />
    </div>
  );
};

export default SelectedProject;
