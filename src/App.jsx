import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Notfound, Landing, Explore } from "./pages"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App
