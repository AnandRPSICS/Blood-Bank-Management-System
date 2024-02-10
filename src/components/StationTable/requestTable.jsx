import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./stationTable.css";

const RequestTable = ({ allRequests, deleteStation, bookSlot, role }) => {
  return (
    <div className="ev-table-container">
      <Table className="" striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Patient Name</th>
            <th>Patient Age</th>
            <th>Required Blood Group</th>
            <th>Phone Number</th>
            <th>Date </th>
            <th>Accept Request</th>

            {/* change this based on the donor and recepient  */}
            {/* {role !== "ev-station" && <th>Book Slots</th>}

            {role !== "user" && <th> Delete Station</th>} */}
          </tr>
        </thead>
        <tbody>
          {allRequests?.map((elem, index) => {
            return (
              <tr key={elem._id}>
                <td>{index + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.age}</td>
                <td>{elem.bloodGroup}</td>
                <td>{elem.phoneNumber}</td>
                <td>{elem.date}</td>
                <td>
                  <button type="btn" className="btn btn-success">
                    Accept
                  </button>
                </td>
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