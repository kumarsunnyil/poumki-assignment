import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-notes" element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </Router>
  );
};

export default App;
