// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../Context/AppContext";
// import { toast } from "react-toastify";
// import axios from "axios";

// const ResetPassword = () => {
//   const { backendUrl } = useContext(AppContext);
//   axios.defaults.withCredentials = true;

//   const navigate = useNavigate();
//   const [email, setEmail] = React.useState("");
//   const [newPassword, setNewPassword] = React.useState("");
//   const [isEmailSent, setIsEmailSent] = React.useState("");
//   const [otp, setOtp] = React.useState(0);
//   const [isOtpSubmitted, setIsOtpSubmitted] = React.useState(false);

//   const inputRefs = React.useRef([]);

//   const handleInput = (e, index) => {
//     if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
//       inputRefs.current[index + 1].focus();
//     }
//   };

//   const handleKeyDown = (e, index) => {
//     if (e.key === "Backspace" && index > 0 && e.target.value === "") {
//       inputRefs.current[index - 1].focus();
//     }
//   };

//   const handlePaste = (e) => {
//     const paste = e.clipboardData.getData("Text");
//     const pasteArray = paste.split("");
//     pasteArray.forEach((element, index) => {
//       if (inputRefs.current[index]) {
//         inputRefs.current[index].value = element;
//       }
//     });
//   };

//   const onSubmitEmail = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/auth/send-reset-otp",
//         {
//           email,
//         }
//       );
//       data.success ? toast.success(data.message) : toast.error(data.message);
//       data.success && setIsEmailSent(true);
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const onSubmitOTP = async (e) => {
//     e.preventDefault();
//     const otpArray = inputRefs.current.map((e) => e.value);
//     setOtp(otpArray.join(""));
//     setIsOtpSubmitted(true);
//   };

//   const onSubmitNewPassword = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await axios.post(
//         backendUrl + "/api/auth/reset-password",
//         {
//           email,
//           otp,
//           newPassword,
//         }
//       );
//       data.success ? toast.success(data.message) : toast.error(data.message);
//       data.success && navigate("/login");
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };
//   return (
//     <>
//       {/* Email form */}
//       {!isEmailSent && (
//         <form onSubmit={onSubmitEmail}>
//           <h1>Reset Password</h1>
//           <p>Enter your registered email address</p>
//           <input
//             type="email"
//             name=""
//             id=""
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button>Submit</button>
//         </form>
//       )}

//       {/* OTP form */}

//       {!isOtpSubmitted && isEmailSent && (
//         <form onSubmit={onSubmitOTP} className="space-y-6">
//           <h1 className="text-2xl font-semibold text-center text-gray-700">
//             Reset password OTP
//           </h1>
//           <p className="text-center text-gray-500">
//             Enter the 6-digit code sent to your email
//           </p>

//           <div
//             className="flex justify-between mb-8 space-x-2"
//             onPaste={handlePaste}
//           >
//             {Array(6)
//               .fill(0)
//               .map((_, index) => (
//                 <input
//                   type="text"
//                   maxLength="1"
//                   key={index}
//                   required
//                   className="w-10 h-10 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
//                   ref={(e) => (inputRefs.current[index] = e)}
//                   onInput={(e) => handleInput(e, index)}
//                   onKeyDown={(e) => handleKeyDown(e, index)}
//                 />
//               ))}
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
//           >
//             Submit
//           </button>
//         </form>
//       )}
//       {/* Enter new password */}
//       {isOtpSubmitted && isEmailSent && (
//         <form onSubmit={onSubmitNewPassword}>
//           <h1>Enter the new password</h1>
//           <p>Enter the new password</p>
//           <input
//             type="password"
//             name=""
//             id=""
//             value={newPassword}
//             onChange={(e) => setNewPassword(e.target.value)}
//             required
//           />
//           <button>Submit</button>
//         </form>
//       )}
//     </>
//   );
// };

// export default ResetPassword;


import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";

const ResetPassword = () => {
  const { backendUrl } = useContext(AppContext);
  axios.defaults.withCredentials = true;

  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [newPassword, setNewPassword] = React.useState("");
  const [isEmailSent, setIsEmailSent] = React.useState(false);
  const [otp, setOtp] = React.useState(0);
  const [isOtpSubmitted, setIsOtpSubmitted] = React.useState(false);

  const inputRefs = React.useRef([]);

  const handleInput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && index > 0 && e.target.value === "") {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    const paste = e.clipboardData.getData("Text");
    const pasteArray = paste.split("");
    pasteArray.forEach((element, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = element;
      }
    });
  };

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/send-reset-otp",
        { email }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && setIsEmailSent(true);
    } catch (error) {
      toast.error(error.message);
    }
  };

  const onSubmitOTP = async (e) => {
    e.preventDefault();
    const otpArray = inputRefs.current.map((e) => e.value);
    setOtp(otpArray.join(""));
    setIsOtpSubmitted(true);
  };

  const onSubmitNewPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        backendUrl + "/api/auth/reset-password",
        { email, otp, newPassword }
      );
      data.success ? toast.success(data.message) : toast.error(data.message);
      data.success && navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Email Form */}
        {!isEmailSent && (
          <form onSubmit={onSubmitEmail} className="space-y-6">
            <h1 className="text-2xl font-semibold text-center text-gray-700">Reset Password</h1>
            <p className="text-center text-gray-500">Enter your registered email address</p>

            <input
              type="email"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        )}

        {/* OTP Form */}
        {!isOtpSubmitted && isEmailSent && (
          <form onSubmit={onSubmitOTP} className="space-y-6">
            <h1 className="text-2xl font-semibold text-center text-gray-700">Reset Password OTP</h1>
            <p className="text-center text-gray-500">Enter the 6-digit code sent to your email</p>

            <div
              className="flex justify-between mb-8 space-x-2"
              onPaste={handlePaste}
            >
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <input
                    type="text"
                    maxLength="1"
                    key={index}
                    required
                    className="w-12 h-12 text-center text-xl border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                    ref={(e) => (inputRefs.current[index] = e)}
                    onInput={(e) => handleInput(e, index)}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                  />
                ))}
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        )}

        {/* New Password Form */}
        {isOtpSubmitted && isEmailSent && (
          <form onSubmit={onSubmitNewPassword} className="space-y-6">
            <h1 className="text-2xl font-semibold text-center text-gray-700">Enter New Password</h1>
            <p className="text-center text-gray-500">Enter your new password</p>

            <input
              type="password"
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
