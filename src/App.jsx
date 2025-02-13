import About from "./components/About/About";
import Blog from "./components/BLog/Blog";
import Features from "./components/Features/Features";
import Slider from "./components/Slider/Slider";
import Timer from "./components/Timer/Timer"

function App() {
  const endDate = new Date(Date.now() + 11 * 60 * 1000);

  return (
    <>
      <Timer endDate={endDate} />
      <Features />
      <About />
      <Blog /> 
      <Slider />
    </>
  )
}

export default App
