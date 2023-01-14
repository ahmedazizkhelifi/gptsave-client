import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Notfound, Landing, Explore, Chat, Profile } from "./pages"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App
