import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import MyNotes from "./screens/MyNotes/MyNotes";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";

const App = () => {
  return (
    <Router>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/my-notes" element={<MyNotes />} />
        
        <Route path="/login" element={<LoginScreen/>} />
        <Route path="/register" element={<RegisterScreen />} />
      </Routes>
    </main>
    <Footer />
  </Router>
  );
};

export default App;
