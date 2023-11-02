import "./App.css";
import Outfits from "./pages/Outfits.jsx";
import Content from "./pages/content";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LogInPages from "./pages/LogInPages";
import ColorPages from "./pages/ColorPages.jsx";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route exact path="/outfits" element={<Outfits />} />
          <Route path="/content" element={<Content />} />
          <Route path="/logIn" element={<LogInPages />} />
          <Route path="/color" element={<ColorPages />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
