import { useState } from "react";
import "./App.css";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Modal from "./components/Modal";
import Curved from "./components/Curved";
import GenerateCarousel from "./components/GenerateCarousel";
import TopUserCarousel from "./components/TopUserCarousel";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[30%_40%_30%] p-2 md:p-4 lg:p-5 pt-3">
      <LeftPanel setIsModalOpen={setIsModalOpen} setModalType={setModalType} />
      <Curved setIsModalOpen={setIsModalOpen} />
      <RightPanel />

      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
          {modalType === "topUser" ? <TopUserCarousel /> : <GenerateCarousel />}
        </Modal>
      )}
    </div>
  );
}

export default App;
