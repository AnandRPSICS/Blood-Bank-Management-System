// UserContext.js
import React, { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [activeUser, setActiveUser] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [allReqArr, setAllReqArr] = useState([]);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  const login = (email, password) => {
    const allUsersData = getAllUsers();
    const activeUserDetails = allUsersData.find(
      (user) => user.email === email && user.password === password
    );

    if (!activeUserDetails) {
      console.log("Email Id or password is wrong");
      return false;
    }
    console.log("act user details", activeUserDetails);
    // Your login logic here...
    localStorage.setItem("bbms-active-user", JSON.stringify(activeUserDetails));
    setActiveUser(activeUserDetails);
    setIsUserLoggedIn(true);
    return true;
  };

  const logout = () => {
    // Your logout logic here...
    if (localStorage.getItem("bbms-active-user")) {
      localStorage.removeItem("bbms-active-user");
    }
    setIsUserLoggedIn(false);
    setActiveUser(null);
  };

  const newRegistration = (newUserDetails) => {
    // Your new registration logic here...
    const newArr = [...allUsers, newUserDetails];
    localStorage.setItem("bbms-all-users", JSON.stringify(newArr));
    setAllUsers([...allUsers, newUserDetails]);
  };

  const getActiveUser = () => {
    const userData = localStorage.getItem("bbms-active-user") || null;
    function setActiveUserFun() {
      setActiveUser(JSON.parse(userData));
      setIsUserLoggedIn(true);
    }

    if (userData) {
      setActiveUserFun();
      return JSON.parse(userData);
    }
    return userData;
  };
  const getAllUsers = () => {
    const allUsersData = localStorage.getItem("bbms-all-users") || null;

    function setAllUsersFun(data) {
      setAllUsers(data);
    }
    if (allUsersData) {
      const data = JSON.parse(allUsersData);
      setAllUsersFun(data);
      return data;
    }

    return [];
  };

  const isMailUnique = (email) => {
    const allUsers = getAllUsers();
    const isMailExist = allUsers.find((user) => user.email === email);
    return !isMailExist;
  };

  const removeUser = (userId) => {
    const allUsers = getAllUsers();
    const newArr = allUsers.filter((user) => user.userId !== userId);
    localStorage.setItem("bbms-all-users", JSON.stringify(newArr));
    setAllUsers(newArr);
  }

  // requests

  const getAllReq = () => {
    const allReq = localStorage.getItem("bbms-all-req") || null;
    if (allReq) {
      const data = JSON.parse(allReq);
      setAllReqArr(data);
      return data;
    }
    return [];
  };

  const addNewReq = (newReq) => {
    const existingReq = getAllReq();

    const newArr = [...existingReq, newReq];
    localStorage.setItem("bbms-all-req", JSON.stringify(newArr));
    setAllReqArr([...allReqArr, newReq]);
  };

  const getRequestAccepted = (reqId) => {
    const existingReq = getAllReq();
    const req = existingReq.find((req) => req.reqId == reqId);
    const newArr = existingReq.filter((req) => req.reqId !== reqId);
    req.isReqAccepted = true;
    const updatedArr = [...newArr, req];

    localStorage.setItem("bbms-all-req", JSON.stringify(updatedArr));
    setAllReqArr(updatedArr);

    // localStorage.setItem("bbms-all-req", JSON.stringify(newArr));
    // setAllReqArr(newArr);
  };



  useEffect(() => {
    getAllUsers();
    getActiveUser();
    getAllReq();
  }, []);
  return (
    <UserContext.Provider
      value={{
        activeUser,
        allUsers,
        isUserLoggedIn,
        allReqArr,
        getRequestAccepted,
        newRegistration,
        login,
        logout,
        getAllUsers,
        getActiveUser,
        isMailUnique,
        getAllReq,
        addNewReq,
        removeUser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserProvider, UserContext };
