import React from "react";
import { Outlet } from "react-router-dom";

export default function Admin() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user.role === "admin") {
    return (
      <div>
        <h1>admin</h1>
        <Outlet />
      </div>
    );
  }
  return <div>Nono</div>;
}
