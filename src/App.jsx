import { useState } from "react";
import "./App.css";
import CurvedLayout from "./components/CurvedLayout";
import LeftPanel from "./components/LeftPanel";
import RightPanel from "./components/RightPanel";
import Modal from "./components/Modal";
import Slider from "./components/Slider";
import Carousel from "./components/Carousel";
import TemplateAiComponent from "./components/TemplateAiComponent";
import Curved from "./components/Curved";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  function closeModal() {
    setIsModalOpen(false);
  }
  return (
    <div className="grid grid-cols-[30%_40%_30%] p-29 pt-5">
      <LeftPanel setIsModalOpen={setIsModalOpen} setModalType={setModalType} />
      {/* <CurvedLayout setIsModalOpen={setIsModalOpen} /> */}
      <Curved setIsModalOpen={setIsModalOpen} />
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
