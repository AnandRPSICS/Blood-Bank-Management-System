import { useState, useEffect } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import { Toast, ToastContainer } from "react-bootstrap";
import StationTable from "../../StationTable/stationTable.jsx";
import MyModel from "./MyModel.jsx";
import "./displayStations.css";
const Displaystations = () => {
  const [allDonors, setallDonors] = useState([]);
  const [searchStation, setSearchStation] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");
  const [showModel, setShowModel] = useState(true);
  const [role, setRole] = useState("donor");
  const getAllDonors = () => {
    console.log("get all stations function");
    setallDonors([
      {
        name: "santosh",
        bloodGroup: "A+",
        phoneNumber: "1234567890",
        email: "UOYQF@example.com",
      },
      {
        name: "xyz",
        bloodGroup: "B+",
        phoneNumber: "1234567890",
        email: "UOYQF@example.com",
      },
    ]);
  };

  useEffect(() => {
    getAllDonors();
  }, []);

  const deleteDonor = () => {
    console.log("delete donor");
  };
  const bookSlot = () => {
    console.log("inside book slot");
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      getStationsByLocation();
    }
  };

  const getStationsByLocation = () => {
    if (searchStation === "") {
      getAllDonors();
      return;
    }
  };

  const requestBlood = () => {
    console.log("handle add station");
    // make this blood request
    setShowModel(true);
  };

  const filterByBloodGroup = () => {
    console.log("filter by blood group");
  };

  return (
    <>
      <div className="display-stations">
        <div className="station-table-container">
          <div className="table-heading-container">
            <h1>List of Donors</h1>
            {/* change this to request blood  */}
            {role !== "user" && (
              <button onClick={requestBlood}>Request Blood </button>
            )}
          </div>
          <div className="table-top-buttons">
            <div onClick={getAllDonors}>All Donors</div>
          </div>

          <div className="table-search-container">
            <InputGroup className="mb-3">
              <InputGroup.Text
                id="basic-addon1"
                onClick={getStationsByLocation}
                className="searchIcon"
              >
                <FaSearchLocation />
              </InputGroup.Text>
              {/* search donors by name  */}
              <Form.Control
                placeholder="Search Donors"
                aria-label="Search Donors"
                aria-describedby="basic-addon1"
                value={searchStation}
                onChange={(e) => setSearchStation(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </InputGroup>
            <div className="mb-3">
              {/* // make this Filter by blood group  */}
              <Form.Select onChange={filterByBloodGroup}>
                <option value="">Filter by Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </Form.Select>
            </div>
          </div>
          {allDonors.length === 0 ? (
            <>
              <div className="no-stations"> Sorry Donors Not Found.</div>
            </>
          ) : (
            <StationTable
              allDonors={allDonors}
              deleteStation={deleteDonor}
              bookSlot={bookSlot}
              role={role}
            />
          )}
          <ToastContainer position="top-center">
            <Toast
              className="toast-msg"
              bg={toastColor}
              onClose={() => setShowAlert(false)}
              show={showAlert}
              animation={true}
              delay={2000}
              autohide
            >
              <Toast.Body>{alertMsg}</Toast.Body>
            </Toast>
          </ToastContainer>
        </div>
      </div>

      {/* make this model to donation request  */}
      <MyModel
        showModel={showModel}
        setShowModel={setShowModel}
        getAllDonors={getAllDonors}
        setShowAlert={setShowAlert}
        setAlertMsg={setAlertMsg}
        setToastColor={setToastColor}
      />
    </>
  );
};
export default Displaystations;
