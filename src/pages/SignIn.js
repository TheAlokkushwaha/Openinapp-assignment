import React from "react";
import { TextField, Button } from "@mui/material";
import { auth, GoogleAuthProvider, signInWithPopup } from "../Auth/firebase"; // Import Firebase functions
import "./SignIn.css";
import { useNavigate } from 'react-router-dom';

const SignIn = ({setIsAuthenticated}) => {
  // Function to handle Google sign-in
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider).then((data) => {
        localStorage.setItem("email", data.user.email);
        localStorage.setItem("userName", data.user.displayName);
        localStorage.setItem("userPhoto", data.user.photoURL);

        setIsAuthenticated("true");
        navigate('/dashboard');
      }); 
    } catch (error) {
      console.error("Google sign-in error:", error);
    }
  };

  return (
    <div className="sign-in">
      <section className="right-side">
        {/* Content for the right side */}
      </section>
      <img className="left-side-icon" alt="" src="/left-side.svg" />
      <h1 className="board">Board.</h1>
      <form className="login-form">
        <div className="card">
          <div className="card1"></div>
        </div>
        <div className="input-field">
          <TextField
            className="input-field1"
            color="primary"
            placeholder="Email address"
            size="medium"
            required={true}
            sx={{ width: 355 }}
            type="email"
            disabled="true"
          />
        </div>
        <TextField
          className="input"
          color="primary"
          size="medium"
          placeholder="Password"
          sx={{ width: 355 }}
          variant="outlined"
          type="text"
          disabled="true"
        />
        {/* Other form fields and buttons */}
        <Button
          className="button-sign-in"
          sx={{ width: 355 }}
          color="primary"
          size="medium"
          variant="contained"
          disabled="true"
        >
          Sign In
        </Button>
        {/* Other text and buttons */}
      </form>
      
      <Button
        className="google-sign-in"
        sx={{ width: 200 }}
        color="primary"
        size="medium"
        variant="contained"
        onClick={handleSignInWithGoogle} // Add onClick handler
      >
        Sign in with Google
      </Button>
      
      <Button
        className="apple-sign-in"
        sx={{ width: 200 }}
        disabled="true"
        size="medium"
        variant="contained"
        startIcon={<img className="apple-1-icon" alt="" src="/apple-1.svg" />}
      >
        Sign in with Apple
      </Button>
      <h1  className="sign-in1">Sign In</h1>
      <div className="sign-in-to">Sign in to your account</div>
      <h3 className="logo">LOGO</h3>
      <div className="vector-parent">
        <button className="image-button">
          <img className="vector-icon" alt="" src="/vector.svg" />
        </button>
        <button className="image-button">
          <img className="vector-icon1" alt="" src="/vector1.svg" />
        </button>
        <button className="image-button carbonlogo-linkedin">
          <img className="vector-icon2" alt="" src="/vector2.svg" />
        </button>
        <button className="image-button carbonlogo-discord">
          <img className="vector-icon4" alt="" src="/vector4.svg" />
        </button>
      </div>
    </div>
  );
};

export default SignIn;
