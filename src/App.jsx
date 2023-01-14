import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Notfound, Landing, Explore, Chat, Profile, Login } from "./pages"
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/chat/:chatId" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Router>
  )
}

export default App
