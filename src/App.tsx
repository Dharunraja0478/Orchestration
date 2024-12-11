import React from "react";

import SignUpForm from "./pages/SignUpForm";
import OtpVerify from "./pages/OtpVerify";
import CreatePin from "./pages/CreatePin";
import Enterpin from "./pages/Enterpin";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


const App: React.FC = () => ( 

  // this is set the Router
  <Router>
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/otpverify" element={<OtpVerify />} />
        <Route path="/createpin" element={<CreatePin />} />
        <Route path="/enterpin" element={<Enterpin />} />  

        <Route  path="/dashboard" element={<Dashboard />} /> 

      </Routes>
    </div>
  </Router>
);

export default App;
