import { useState, Fragment, useEffect } from "react";
import AdminSidebar from "../../../components/Admin/AdminSidebar/AdminSidebar";
import "./adminDashboard.css";
import ReqTable from "./reqTable";
import UserTable from "./userTable";

const AdminDashboard = () => {
  const [activePage, setActivePage] = useState("users");
  const changeActivePage = (page) => {
    setActivePage(page);
  };

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <>
      <div className="admin-dashboard-container">
        <AdminSidebar
          activePage={activePage}
          changeActivePage={changeActivePage}
        />
        {activePage === "users" && (
          <div className="admin-main-view pt-5">
            <h3 className="text-center "> All Users </h3>
            <UserTable />
          </div>
        )}
        {activePage !== "users" && (
          <div className="admin-main-view pt-5">
            <h3 className="text-center "> All Requests </h3>
            <ReqTable />
          </div>
        )}
      </div>
    </>
  );
};
export default AdminDashboard;
