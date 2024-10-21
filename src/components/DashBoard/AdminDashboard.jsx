import React from "react";
import { AllTask, CreateTask, Header } from "../others";

const AdminDashboard = (props) => {
  return (
    <div className="h-screen w-full p-7">
      <Header />
      <CreateTask />
      <AllTask />
    </div>
  );
};

export default AdminDashboard;
