
import AdminNavbar from "../../../components/Admin/AdminNavbar/adminNavbar";
import AdminLoginForm from "../../../components/Admin/AdminLoginForm/adminLoginForm";
import AdminFooter from "../../../components/Admin/AdminFooter/adminFooter.jsx";
import "./AdminLogin.css";
const AdminLogin = () => {
  return (
    <div className="admin-login-container">
      <AdminNavbar />
      <AdminLoginForm/>
      <AdminFooter />
    </div>
  );
};

export default AdminLogin;
