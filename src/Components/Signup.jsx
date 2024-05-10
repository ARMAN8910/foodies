import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import '../Styles.scss';

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const { username, email, password, phone } = formData;
  const signupRef = useRef(null);

  useEffect(() => {
    signupRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      // Implement your signup logic here
      // After signup is successful, navigate back to the main page
      const res = await axios.post("http://localhost:4000/signup", formData);
      console.log(res.data);
      // Navigate to the main page
      window.location = "/login";
    } catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className="signup-container" ref={signupRef}>
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="tel"
            placeholder="+91 _ _  _ _ _  _ _ _ _ _"
            name="phone"
            value={phone}
            onChange={(e) => onChange(e)}
            maxLength="10"
            pattern="[0-9]{10}"
            title="Please enter 10 digit mobile number"
            required
          />
        </div>
        <div className="submit-section">
          <input type="submit" className="btn btn-primary" value="Sign Up" />
          <div>
            <Link to={'/'} >Go back home</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
