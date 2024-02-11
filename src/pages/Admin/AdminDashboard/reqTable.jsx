import "./adminDashboard.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../context/userContext.jsx";
import Table from "react-bootstrap/Table";
const ReqTable = () => {
  const { getAllReq } = useContext(UserContext);
  const [allReq, setAllReq] = useState([]);
  useEffect(() => {
    const allReqs = getAllReq();
    setAllReq(allReqs);
  }, []);

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
          <th> Name</th>
          <th>Phone Number</th>
          <th> Blood Group</th>
          <th>Required Units</th>
          <th>Phone Number</th>
          <th>Date </th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {allReq?.map((elem, index) => {
          console.log("elem", elem);
          return (
            <tr key={elem?.reqId}>
              <td>{index + 1}</td>
              <td>{elem?.name}</td>
              <td>{elem?.phoneNumber}</td>
              <td>{elem?.bloodGroup}</td>
              <td>{elem?.requiredUnits}</td>
              <td>{elem?.phoneNumber}</td>
              <td>{elem?.date}</td>
              <td>
                {elem?.isReqAccepted ? (
                  <p className="text-success"> Accepted </p>
                ) : (
                  <p className="text-danger"> Pending</p>
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default ReqTable;
