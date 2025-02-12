import About from "./components/About/About";
import Features from "./components/Features/Features";
import Timer from "./components/Timer/Timer"

function App() {
  const endDate = new Date(Date.now() + 11 * 60 * 1000);

  return (
    <>
      <Timer endDate={endDate} />
      <Features />
      <About />
    </>
  )
}

export default App
