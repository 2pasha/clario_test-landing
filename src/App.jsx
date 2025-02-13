import About from "./components/About/About";
import Blog from "./components/BLog/Blog";
import Contacts from "./components/Contacts/Contacts";
import Features from "./components/Features/Features";
import Slider from "./components/Slider/Slider";
import Timer from "./components/Timer/Timer"
import { useScrollDetection } from "./hooks/useScrollDetection";

function App() {
  const endDate = new Date(Date.now() + 11 * 60 * 1000);
  useScrollDetection('blog', 'Feature Shown');

  return (
    <>
      <Timer endDate={endDate} />
      <Features />
      <About />
      <Blog /> 
      <Slider />
      <Contacts />
    </>
  )
}

export default App
