// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from 'react-router-dom';

// import '../Styles.scss';



// function Login() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const { username, password } = formData;

//   const onChange = (e) =>
//     setFormData({ ...formData, [e.target.name]: e.target.value });

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     console.log(formData);

//     try {
//       const res = await axios.get(`http://localhost:4000/login?username=${username}&password=${password}`);
//       console.log(res.data);
//       // Navigate to the main page if login is successful
//       window.location = "/";
//       window.alert(res.data);
//       localStorage.setItem('isLoggedIn',true);

//     } catch (err) {
//       console.error(err.response.data);
//       window.alert("Invalid username or password");
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1>Login</h1>
//       <form className="login-form" onSubmit={(e) => onSubmit(e)}>
//         <div className="form-group">
//           <input
//             type="text"
//             placeholder="Username"
//             name="username"
//             value={username}
//             onChange={(e) => onChange(e)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <input
//             type="password"
//             placeholder="Password"
//             name="password"
//             value={password}
//             onChange={(e) => onChange(e)}
//             minLength="6"
//             required
//           />
//         </div>
//         <div className="submit-section">
//           <input type="submit" className="btn btn-primary" value="Login" />
//           <div>
//             <Link to={'/'}>Go back home</Link>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

import '../Styles.scss';

function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const res = await axios.get(`http://localhost:4000/login?username=${username}&password=${password}`);
      console.log(res.data);
      window.alert(res.data);
      // Call handleLogin function to set isLoggedIn to true
      handleLogin();
      // Navigate to the main page if login is successful
      navigate("/");
    } catch (err) {
      console.error(err.response.data);
      window.alert("Invalid username or password");
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form className="login-form" onSubmit={(e) => onSubmit(e)}>
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
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <div className="submit-section">
          <input type="submit" className="btn btn-primary" value="Login" />
          <div>
            <Link to={'/'}>Go back home</Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
