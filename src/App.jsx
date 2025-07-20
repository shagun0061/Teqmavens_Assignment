import { useState } from "react";
import "./App.css";
import CurvedLayout from "./components/CurvedLayout";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import Carousel from "./components/Carousel";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="grid grid-cols-[30%_40%_30%] p-2 pt-5 min-h-screen bg-[#0E0E1A]">
      <LeftPanel setIsModalOpen={setIsModalOpen} setModalType={setModalType} />
      <CurvedLayout setIsModalOpen={setIsModalOpen} />
      <RightPanel />

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {modalType === "slider" ? <Slider /> : <Carousel />}
        </Modal>
      )}
    </div>
  );
}

export default App;
