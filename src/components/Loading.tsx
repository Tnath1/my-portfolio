// import logo from "../assets/mylogo.jpg";

// const Loading = () => {
//   return (
//     // <div className="flex justify-center items-center h-screen bg-black">
//     //   <img className="mx-2 w-16 h-20 rounded-lg" src={logo} alt="logo loading..." />
//     // </div>
//     <div className="flex justify-center items-center h-screen bg-black">
//       <img
//         className="mx-2 w-16 h-20 rounded-[5px] transform rotate-6 shadow-lg shadow-gray-500"
//         src={logo}
//         alt="logo loading..."
//       />
//     </div>
//   );
// };

// export default Loading;

import React from "react";

const Loading: React.FC = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black  z-50">
      <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-white"></div>
    </div>
  );
};

export default Loading;
