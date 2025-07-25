import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-[#03061C] rounded-2xl shadow-md w-full max-w-2xl mx-4 p-6 relative   ">
        <div
          onClick={onClose}
          className="absolute top-4 right-4 text-[#FFFFFF] h-[25px] w-[25px] hover:text-gray-800 hover:cursor-pointer z-999"
        >
          <button className="hover:cursor-pointer">✕</button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
