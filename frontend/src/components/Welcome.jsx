import React from "react";
import { useSelector } from "react-redux";

const Welcome = () => {
  const { user } = useSelector(state => state.auth);
  return (
    <div className="bg-dark2 w-full min-h-screen overflow-y-hidden">
      <div className="flex mx-10 flex-col justify-center items-end mt-14 ">
        <h1 className="font-medium text-lg uppercase">Dashboard</h1>
        <h2 className="font-medium text-lg uppercase">
          Welcome Back <strong>{user && user.name}</strong>
        </h2>
      </div>
    </div>
    // <div className=" w-full h-full mx-auto flex justify-center items-start mt-14 bg-dark2 px-60">
    //   <div className="flex flex-col w-full">
    //     <div className="overflow-x-auto w-full">
    //       <div className="py-3 pl-2 w-full h-full">
    //         <div className="relative max-w-xs w-full" />
    //         Welcome Back <strong>{user && user.name}</strong>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Welcome;
