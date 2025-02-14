import { useEffect, useState } from "react";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contacts from "./components/Contacts/Contacts";
import Features from "./components/Features/Features";
import Slider from "./components/Slider/Slider";
import Timer from "./components/Timer/Timer";
import { useScrollDetection } from "./hooks/useScrollDetection";
import { ExitModal } from "./components/ExitModal/ExitModal";

function App() {
  const [showExitModal, setShowExitModal] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const endDate = new Date(Date.now() + 5 * 60 * 1000);
  useScrollDetection("blog", "Feature Shown");

  useEffect(() => {
    const handleUserInteraction = () => setHasUserInteracted(true);

    document.addEventListener("mousemove", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("click", handleUserInteraction);

    return () => {
      document.removeEventListener("mousemove", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("click", handleUserInteraction);
    };
  }, []);

  useEffect(() => {
    const handleMouseLeave = (e) => {
      if (e.clientY < 10 && hasUserInteracted) {
        setShowExitModal(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasUserInteracted]);

  const handleCloseModal = () => {
    setShowExitModal(false);
  };

  const handleConfirmExit = () => {
    setShowExitModal(false);
    window.location.href = "about:blank";
  };

  return (
    <>
      <Timer endDate={endDate} />
      <Features />
      <About />
      <Blog />
      <Slider />
      <Contacts />
      <ExitModal
        isOpen={showExitModal}
        onClose={handleCloseModal}
        onConfirm={handleConfirmExit}
      />
    </>
  );
}

export default App;
