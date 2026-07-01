import { FaCartArrowDown } from "react-icons/fa";
import { IoPersonCircleSharp } from "react-icons/io5";
import { IoPersonAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useState, useEffect } from "react";
import "./AuthModal.css";
import AuthModal from "./AuthModal";

function Topbar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    } else {
      setShowAuthModal(true);
    }
  }, []);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
    setShowAuthModal(false);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setShowAuthModal(true);
  };

  return (
    <>

    <div className="top">
        <p>Free delivery on orders above Rs.499</p>
        <ul className="toplist">
            {user ? (
              <li className="user-info mt-2">
                <span className="username">{user.username}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            ) : (
              <li>
                  <a href="#" onClick={(e) => {
                    e.preventDefault();
                    setShowAuthModal(true);
                    }}>
                    <IoPersonCircleSharp size={20}/>
                  </a>
              </li>
            )}

        </ul>
    </div>
    <div className="nav">
        <img src="../logo.png"  style={{width:"150px"}} alt="Logo" />
        <ul className="navlist mt-3 fw-medium">
          <li><a href="/">Home</a></li>
          <li><a href="/Categories">Categories</a></li>
          <li><a href="">About us</a></li>
          <li><a href="">Contact</a></li>
        </ul>
    <div className="position-relative ms-5 ps-3" style={{ width: "400px" }}>
      <input
        type="text"
        className="form-control rounded-pill ps-4 pe-5"
        placeholder="Search for products..."
      />
      <CiSearch className="position-absolute top-50 end-0 translate-middle-y me-3"
    size={20} />
    </div>
      <a href="/Addtocart"><FaCartArrowDown className="me-5 pe-2" size={40}/></a>
    </div>

    <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onLoginSuccess={handleLoginSuccess}
      />
  </>
  )
}

export default Topbar