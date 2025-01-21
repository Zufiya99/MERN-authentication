// import { createContext } from "react";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";

// export const AppContext = createContext();

// export const AppContextProvider = (props) => {
//   axios.defaults.withCredentials = true;

//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [userData, setUserData] = useState(false);

//   const getAuthState = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/auth/is-auth");
//       if (data.success) {
//         setIsLoggedIn(true);
//         getUserData();
//       }
//     } catch (error) {
//       toast.error(error.response.data.message);
//     }
//   };

//   const getUserData = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + "/api/user/data");

//       if (data.success) {
//         setUserData(data.userData);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       // Log error to debug
//       console.error("Error in getUserData:", error);
//       const errorMessage =
//         error.response?.data?.message || "An unexpected error occurred.";
//       toast.error(errorMessage);
//     }
//   };

//   const value = {
//     backendUrl,
//     isLoggedIn,
//     setIsLoggedIn,
//     userData,
//     setUserData,
//     getUserData,
//     getAuthState,
//   };
//   return (
//     <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
//   );
// };

import { createContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
  axios.defaults.withCredentials = true;

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(false);

  // Check if the user is logged in when the app loads
  useEffect(() => {
    const savedIsLoggedIn = localStorage.getItem("isLoggedIn");
    const savedUserData = localStorage.getItem("userData");

    if (savedIsLoggedIn && savedUserData) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(savedUserData));
    } else {
      getAuthState();
    }
  }, []);

  const getAuthState = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/auth/is-auth");
      if (data.success) {
        setIsLoggedIn(true);
        getUserData();
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const getUserData = async () => {
    try {
      const { data } = await axios.get(backendUrl + "/api/user/data");

      if (data.success) {
        setUserData(data.userData);
        localStorage.setItem("userData", JSON.stringify(data.userData)); // Save user data
        localStorage.setItem("isLoggedIn", "true"); // Save login state
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      // Log error to debug
      console.error("Error in getUserData:", error);
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      toast.error(errorMessage);
    }
  };

  const logout = () => {
    // Perform logout and clear local storage
    setIsLoggedIn(false);
    setUserData(false);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userData");
  };

  const value = {
    backendUrl,
    isLoggedIn,
    setIsLoggedIn,
    userData,
    setUserData,
    getUserData,
    getAuthState,
    logout,
  };
  
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
