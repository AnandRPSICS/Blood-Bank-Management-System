import "./adminDashboard.css";
import Table from "react-bootstrap/Table";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext.jsx";
const UserTable = () => {
  const { getAllUsers, removeUser } = useContext(UserContext);
  const [allUsers, setAllUsers] = useState([]);
  const [countRemoveUser, setCountRemoveUser] = useState(0);
  useEffect(() => {
    const allReqs = getAllUsers();
    setAllUsers(allReqs);
  }, [countRemoveUser]);
  const deleteUser = (userId) => {
    removeUser(userId);
    setCountRemoveUser(countRemoveUser + 1);
    setTimeout(() => {
      alert("User Removed Successfully.");
    }, 300);
  };
  return (
    <Table
      style={{ width: "90%" }}
      className="mx-auto mt-5"
      striped
      bordered
      hover
    >
      <thead>
        <tr>
          <th>No.</th>
          <th>User Name</th>
          <th>User Type</th>
          <th>Blood Group</th>
          <th>Phone Number</th>
          <th>Email Id </th>
          <th>Remove User</th>
        </tr>
      </thead>
      <tbody>
        {allUsers?.map((elem, index) => {
          return (
            <tr key={elem?.userId}>
              <td>{index + 1}</td>
              <td>{elem?.name}</td>
              <td>{elem?.role}</td>
              <td>{elem?.bloodGroup}</td>
              <td>{elem?.phoneNumber}</td>
              <td>{elem?.email}</td>
              <td>
                <button
                  onClick={() => {
                    deleteUser(elem.userId);
                  }}
                  className="btn btn-danger"
                >
                  Remove User
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
export default UserTable;
