import React from "react";

const Loading = () => {
  return (
    <div>
      <div>
        <div className="flex items-center justify-center h-[300px] w-full">
          <div className="flex flex-col items-center space-y-4">
            <div className="w-12 h-12 border-4 border-t-transparent border-[#2A4A70] rounded-full animate-spin"></div>
            <p className="text-[#2A4A70] font-semibold text-lg animate-pulse">
              Loading, please wait...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
