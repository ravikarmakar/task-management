import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const authData = useContext(AuthContext);

  // console.log(authData.employees);
  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-58 overflow-auto">
      <div>
        <div className="bg-red-500 py-2 mb-2 px-4 flex justify-between rounded">
          <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
          <h3 className="text-lg font-medium w-1/5">Task</h3>
          <h5 className="text-lg font-medium w-1/5">Status</h5>
          <h5 className="text-lg font-medium w-1/5">Completed</h5>
          <h5 className="text-lg font-medium w-1/5">Failed</h5>
        </div>
      </div>
      <div className="overflow-auto">
        {authData.employees.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-emerald-600 py-2 mb-2 px-4 flex justify-between rounded"
            >
              <h2 className="text-lg font-medium w-1/5">{elem.firstname}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-400">
                {elem.taskNumbers.newTask}
              </h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">
                {elem.taskNumbers.active}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-green-400">
                {elem.taskNumbers.completed}
              </h5>
              <h5 className="text-lg font-medium w-1/5 text-red-400">
                {elem.taskNumbers.failed}
              </h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
