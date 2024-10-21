import React from "react";

const TaskCount = ({ data }) => {
  return (
    <div className="flex mt-10  justify-between gap-5 screen">
      <div className="w-[45%] px-6 py-9 bg-red-400  rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.active}</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>

      <div className="w-[45%] px-6 py-9 bg-blue-400  rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.newTask}</h2>
        <h3 className="text-xl font-medium">Accepeted Task</h3>
      </div>

      <div className="w-[45%] px-6 py-9 bg-green-400  rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.completed}</h2>
        <h3 className="text-xl font-medium">Completed Task</h3>
      </div>

      <div className="w-[45%] px-6 py-9 bg-yellow-400  rounded-xl">
        <h2 className="text-3xl font-semibold">{data.taskNumbers.failed}</h2>
        <h3 className="text-xl font-medium">Faild Task</h3>
      </div>
    </div>
  );
};

export default TaskCount;
