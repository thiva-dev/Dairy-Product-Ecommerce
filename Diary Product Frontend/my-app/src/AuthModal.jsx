import { useState } from "react";
import axios from "axios";

function AuthModal({ isOpen, onClose,onLoginSuccess }) {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login/", {
          username: email,
          password: password,
        });
        alert("Welcome " + response.data.username);
        onLoginSuccess({username:response.data.username});
        onClose();
      } catch (error) {
        alert("Invalid email or password!");
      }
    } else {
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      try {
        await axios.post("http://127.0.0.1:8000/api/register/", {
          username: name,
          email: email,
          password: password,
        });
        alert("Account created! Please login.");
        setIsLogin(true);
      } catch (error) {
        alert("Registration failed! Try again.");
      }
    }
  };

  return (
    <div className="auth-overlay">
      <div className="auth-modal">

        <button className="close-btn" onClick={onClose}>
    
        </button>

        <h2>{isLogin ? "Welcome Back 👋" : "Create Account"}</h2>

        <p className="subtitle">
          {isLogin ? "Login to continue shopping" : "Register to continue"}
        </p>

        <form onSubmit={handleSubmit}>

          {!isLogin && (
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <button type="submit" className="auth-btn">
            {isLogin ? "Login" : "Register"}
          </button>

        </form>

        <div className="switch-auth">
          {isLogin ? (
            <>
              Don't have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Register</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Login</span>
            </>
          )}
        </div>

      </div>
    </div>
  );
}

export default AuthModal;