// import React, { useState, useRef, useEffect } from "react";
// import "./App.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Navbar from "./Components/Navbar";
// import ReceipesSection from "./Components/ReceipesSection";
// import Signup from "./Components/Signup";
// import Login from "./Components/Login";

// function App() {
//   const receipesSectionRef = useRef(null);
//   const [receipeResult, setReceipeResult] = useState([]);

//   useEffect(() => {
//     // Check if user is already logged in
//     localStorage.setItem('isLoggedIn',false);
//   }, []);



//   const scrollToReceipesSection = () => {
//     receipesSectionRef.current.scrollIntoView({ behavior: "smooth" });
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <>
//               <Navbar scrollToReceipesSection={scrollToReceipesSection} setReceipeResult={setReceipeResult} />
//               <ReceipesSection receipeResult={receipeResult} />
//               <div ref={receipesSectionRef}></div>
//             </>
//           }
//         />
//         <Route path="/signup" element={<Signup />} />
//         <Route path="/login" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import Navbar from "./Components/Navbar";
import ReceipesSection from "./Components/ReceipesSection";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  const receipesSectionRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [receipeResult, setReceipeResult] = useState([]);

  useEffect(() => {
    // Check if user is already logged in
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    if (loggedInStatus === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => {
    // Set isLoggedIn to true and store it in local storage
    setIsLoggedIn(true);
    localStorage.setItem('isLoggedIn', 'true');
  };

  const handleLogout = () => {
    // Set isLoggedIn to false and remove it from local storage
    setIsLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  const scrollToReceipesSection = () => {
    receipesSectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar
                isLoggedIn={isLoggedIn}
                handleLogout={handleLogout}
                scrollToReceipesSection={scrollToReceipesSection}
                setReceipeResult={setReceipeResult}
              />
              <ReceipesSection receipeResult={receipeResult} />
              <div ref={receipesSectionRef}></div>
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
