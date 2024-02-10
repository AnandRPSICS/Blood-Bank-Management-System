import { useState, Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import "./adminDashboard.css";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("users");
  const changeActivePage = (page) => {
    setActivePage(page);
  };

  return (
    <>
      <div className="admin-dashboard-container">
        <AdminSidebar
          activePage={activePage}
          changeActivePage={changeActivePage}
        />

      <h1>Admin dashboard </h1>


        
      </div>
    </>
  );
};
export default AdminDashboard;
