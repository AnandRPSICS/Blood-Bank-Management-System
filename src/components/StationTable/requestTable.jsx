import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import "./stationTable.css";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext.jsx";
const RequestTable = ({
  allRequests,
  reqAcceptingTrack,
  setReqAcceptingTrack,
}) => {
  const { getRequestAccepted, getActiveUser } = useContext(UserContext);

  const [role, setrole] = useState("");

  useEffect(() => {
    const preUserData = getActiveUser();
    if (preUserData) {
      setrole(preUserData.role);
    }
  }, []);
  const handleAccept = (reqId) => {
    getRequestAccepted(reqId);

    setReqAcceptingTrack(!reqAcceptingTrack);
  };

  return (
    <div className="ev-table-container">
      <Table className="" striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Patient Name</th>
            <th>Contact Number</th>
            <th>Required Blood Group</th>
            <th>Required Units</th>
            <th>Phone Number</th>
            <th>Date </th>

            {role === "donor" && <th>Accept Request</th>}

            {/* change this based on the donor and recepient  */}
            {/* {role !== "ev-station" && <th>Book Slots</th>}

            {role !== "user" && <th> Delete Station</th>} */}
          </tr>
        </thead>
        <tbody>
          {allRequests?.map((elem, index) => {
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

                {role === "donor" && (
                  <td>
                    {elem?.isReqAccepted ? (
                      <p className="text-success"> Accepted </p>
                    ) : (
                      <button
                        type="btn"
                        className="btn btn-success"
                        onClick={() => {
                          handleAccept(elem?.reqId);
                        }}
                      >
                        Accept
                      </button>
                    )}
                  </td>
                )}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

RequestTable.propTypes = {
  allRequests: PropTypes.array,
  deleteStation: PropTypes.func,
  bookSlot: PropTypes.func,
  role: PropTypes.string,
};

export default RequestTable;
