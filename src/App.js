import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Navbar from './Components/Navbar'
import Homepage from './Components/Homepage'
import About from './Components/About'
import Blog from './Components/Blog'
import Services from './Components/Services'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
