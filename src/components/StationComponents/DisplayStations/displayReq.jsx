import { useContext, useState, useEffect } from "react";
import { InputGroup, Form } from "react-bootstrap";
import { FaSearchLocation } from "react-icons/fa";
import { Toast, ToastContainer } from "react-bootstrap";
import RequestTable from "../../StationTable/requestTable.jsx";
import MyModel from "./MyModel.jsx";
import { UserContext } from "../../../context/userContext.jsx";
import "./displayStations.css";
const DisplayReq = () => {
  const { getAllReq, getActiveUser, allReqArr, activeUser } =
    useContext(UserContext);

  const [allRequests, setAllRequests] = useState([]);
  const [sameBloodGroupReqs, setSameBloodGroupReqs] = useState([]);
  const [searchStation, setSearchStation] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [alertMsg, setAlertMsg] = useState("");
  const [toastColor, setToastColor] = useState("dark");
  const [showModel, setShowModel] = useState(false);
  const [role, setRole] = useState("");
  const [reqAcceptingTrack, setReqAcceptingTrack] = useState(false);

  useEffect(() => {
    const data = getAllReq();
    // call getActiveUser for store data to context api from LS.
    const preUserData = getActiveUser();
    const allBloodReq = getAllReq();
    setAllRequests(data);
    if (preUserData) {
      filterReqByActiveUserBloodGroup(preUserData, allBloodReq);
    } else {
      console.log("Login Again.");
    }
  }, [reqAcceptingTrack]);

  const filterReqByActiveUserBloodGroup = (actUser, allBloodReq) => {
    const sameGroup = allBloodReq.filter((req) => {
      return req.bloodGroup == actUser.bloodGroup;
    });
    setSameBloodGroupReqs(sameGroup);
  };
  const getAllDonors = () => {
    const data = getAllReq();
    setAllRequests(data);
  };

  const deleteDonor = () => {
    console.log("delete donor");
  };
  const bookSlot = () => {
    console.log("inside book slot");
  };

  return (
    <>
      <div className="display-stations">
        <div className="station-table-container">
          <div className="table-heading-container">
            <h1>Requests</h1>
          </div>
          <div className="table-top-buttons mb-4">
            <div onClick={getAllDonors}>All Requests</div>
          </div>

          {allRequests.length === 0 ? (
            <>
              <div className="no-stations"> Sorry Requests Not Found.</div>
            </>
          ) : (
            <RequestTable
              allRequests={sameBloodGroupReqs}
              deleteStation={deleteDonor}
              bookSlot={bookSlot}
              role={role}
              reqAcceptingTrack={reqAcceptingTrack}
              setReqAcceptingTrack={setReqAcceptingTrack}
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
