import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskAsignTo, setTaskAsignTo] = useState("");
  const [taskCategory, setTaskCategory] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const [newTask, setNewTask] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      taskCategory,
      active: false,
      newTask: true,
      completed: false,
      failed: true,
    });

    const data = JSON.parse(localStorage.getItem("employees"));

    data.forEach((elem) => {
      if (taskAsignTo == elem.firstname) {
        elem.tasks.push(newTask);
        console.log(elem);
      }
    });

    setTaskAsignTo("");
    setTaskTitle("");
    setTaskCategory("");
    setTaskDescription("");
    setTaskDate("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
        className="flex flex-wrap w-full items-center justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
              placeholder="Add task title here"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
              value={taskDate}
              onChange={(e) => setTaskDate(e.target.value)}
              placeholder="dd/mm/yyyy"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              value={taskAsignTo}
              onChange={(e) => setTaskAsignTo(e.target.value)}
              placeholder="Empolyee name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              value={taskCategory}
              onChange={(e) => setTaskCategory(e.target.value)}
              placeholder="design, dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea
            className="w-full h-44 text-sm py-1 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
            name=""
            id=""
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            type="text"
            placeholder="Write description here"
          />
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
