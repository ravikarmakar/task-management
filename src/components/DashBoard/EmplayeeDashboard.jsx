import React from "react";
import { Header, TaskCount } from "../others/index.js";
import TaskList from "../TaskList/TaskList.jsx";

const EmplayeeDashboard = (props) => {
  // console.log(data);
  return (
    <div className="p-10 bg-[#1c1c1c] h-screen">
      <Header userChange={props.UserChange} data={props.data} />
      <TaskCount data={props.data} />
      <TaskList data={props.data} />
    </div>
  );
};

export default EmplayeeDashboard;
