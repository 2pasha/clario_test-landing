import Timer from "./components/Timer/Timer"

function App() {
  const endDate = new Date(Date.now() + 11 * 60 * 1000);

  return (
    <>
      <Timer endDate={endDate} />
    </>
  )
}

export default App
