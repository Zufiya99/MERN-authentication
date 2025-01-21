// import React, { useContext } from "react";
// import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../Context/AppContext";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const { userData, backendUrl, setUserData, setIsLoggedIn } =
//     useContext(AppContext);
//   return (
//     <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 bg-white shadow-lg fixed top-0 z-10">
//       <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />
//       {userData ? (
//         <div className="w-8 h-8 flex  justify-center items-center rounded-full bg-black text-white relative group">
//           {userData.name[0].toUpperCase()}
//           <div className="absolute hidden group-hover:block top-0 right-0 z-10 text-black rounded pt-10 ">
//             <ul>
//               <li>Verify Email</li>
//               <li>Logout</li>
//             </ul>
//           </div>
//         </div>
//       ) : (
//         <button
//           onClick={() => navigate("/login")}
//           className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
//         >
//           Login <img src={assets.arrow_icon} alt="arrow" />
//         </button>
//       )}
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {
  const navigate = useNavigate();
  const { userData, backendUrl, setUserData, setIsLoggedIn } =
    useContext(AppContext);

  const sendVerificationOtp = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/send-verify-otp");
      if (data.success) {
        navigate("/email-verify");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  const logout = async () => {
    try {
      axios.defaults.withCredentials = true;
      const { data } = await axios.post(backendUrl + "/api/auth/logout");
      data.success && setIsLoggedIn(false);
      data.success && setUserData(false);
      navigate("/");
    } catch (error) {
      console.error("Error in logout:", error);
    }
  };
  return (
    <div className="w-full flex justify-between items-center p-4 sm:p-6 sm:px-24 bg-white shadow-lg fixed top-0 z-10">
      <img src={assets.logo} alt="Logo" className="w-28 sm:w-32" />
      {userData ? (
        <div className="w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group">
          {userData.name[0].toUpperCase()}
          <div className="absolute hidden group-hover:block top-0 right-0 z-10 bg-white shadow-lg rounded-lg w-40 mt-2 text-black">
            <ul className="py-2">
              {!userData.isAccountVerified && (
                <li onClick={sendVerificationOtp} className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-t-lg">
                  Verify Email
                </li>
              )}
              <li
                onClick={logout}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-b-lg"
              >
                Logout
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login <img src={assets.arrow_icon} alt="arrow" />
        </button>
      )}
    </div>
  );
};

export default Navbar;
