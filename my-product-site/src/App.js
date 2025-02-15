import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { auth, provider, signInWithPopup, signOut } from "./firebase";
import "./App.css";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import QnA from "./pages/Qna.js";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user ? user : null);
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <header className="header">กินข้าวกับบังนิ๊น้อง</header>

        {/* Hamburger Menu */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
        <nav className={`navbar ${menuOpen ? "show" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link to="/qna" onClick={() => setMenuOpen(false)}>Q&A</Link>

          {/* ปุ่มล็อกอิน / ออกจากระบบ */}
          {user ? <LogoutButton /> : <LoginButton />}
        </nav>

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/qna" element={<QnA />} />
        </Routes>
      </div>
    </Router>
  );
}

function LoginButton() {
  return (
    <button className="auth-button" onClick={async () => {
      try {
        await signInWithPopup(auth, provider);
        window.location.href = "/";
      } catch (error) {
        console.error("Login Error:", error);
        alert("ล็อกอินล้มเหลว: " + error.message);
      }
    }}>
      ล็อกอินด้วย Google
    </button>
  );
}

function LogoutButton() {
  return (
    <button className="auth-button" onClick={async () => {
      try {
        await signOut(auth);
        window.location.href = "/";
      } catch (error) {
        console.error("Logout Error:", error);
      }
    }}>
      ออกจากระบบ
    </button>
  );
}

export default App;
