import { useState, useEffect } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import { Toast, ToastContainer } from "react-bootstrap";
import RequestTable from "../../StationTable/requestTable.jsx";
import MyModel from "./MyModel.jsx";
import "./displayStations.css";
const DisplayReq = () => {
  const [allRequests, setAllRequests] = useState([]);
  const [searchStation, setSearchStation] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");
  const [showModel, setShowModel] = useState(false);
  const [role, setRole] = useState("donor");
  const getAllDonors = () => {
    console.log("get all request  function");
    setAllRequests([
      {
        name: "santosh",
        age: 20,
        bloodGroup: "A+",
        date: "24-02-2024",
        units: 5,
        phoneNumber: "1234567890",
      },
      {
        name: "Akhil",
        age: 24,
        bloodGroup: "B+",
        date: "24-02-2024",
        units: 5,
        phoneNumber: "1234567890",
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
            <h1>Requests</h1>
          </div>
          <div className="table-top-buttons">
            <div onClick={getAllDonors}>All Requests</div>
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
                placeholder="Search Requests"
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
          {allRequests.length === 0 ? (
            <>
              <div className="no-stations"> Sorry Requests Not Found.</div>
            </>
          ) : (
            <RequestTable
              allRequests={allRequests}
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
export default DisplayReq;
