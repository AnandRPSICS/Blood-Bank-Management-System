import Table from "react-bootstrap/Table";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./stationTable.css";

const StationTable = ({ allDonors, deleteStation, bookSlot, role }) => {
  return (
    <div className="ev-table-container">
      <Table className="" striped bordered hover>
        <thead>
          <tr>
            <th>No.</th>
            <th>Donor Name</th>
            <th>Blood Group</th>
            <th>Phone Number</th>
            <th>Email Id </th>

            {/* change this based on the donor and recepient  */}
            {/* {role !== "ev-station" && <th>Book Slots</th>}

            {role !== "user" && <th> Delete Station</th>} */}
          </tr>
        </thead>
        <tbody>
          {allDonors?.map((elem, index) => {
            return (
              <tr key={elem._id}>
                <td>{index + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.bloodGroup}</td>
                <td>{elem.phoneNumber}</td>
                <td>{elem.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

StationTable.propTypes = {
  allDonors: PropTypes.array,
  deleteStation: PropTypes.func,
  bookSlot: PropTypes.func,
  role: PropTypes.string,
};

export default StationTable;
