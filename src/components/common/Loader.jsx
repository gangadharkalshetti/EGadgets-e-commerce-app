import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      {/* Spinning circle */}
      <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading text */}
      <p className="text-gray-600 font-medium text-lg animate-pulse">
        Loading, please wait...
      </p>
    </div>
  );
};

export default Loader;
