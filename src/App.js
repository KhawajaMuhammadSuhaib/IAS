import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router } from "react-router-dom"
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import ApplicantProfile from "./Pages/ApplicantProfile";
import ForgetPassword from "./Pages/ForgetPassword";
import ChangePassword from "./Pages/ChangePassword";
import CompanyProfile from "./Pages/CompanyProfile";
import CompanyJobPortal from "./Pages/CompanyJobPortal";
import ApplicantJobPortal from "./Pages/ApplicantJobPortal";
import PaymentAndSubscription from "./Pages/CompanySubscription";
import ChatAndSupport from './Pages/ChatAndSupport';
import ApplicantInterview from './Pages/ApplicantInterview';
import CompanyInterview from './Pages/CompanyInterview';
import AdminDashboard from './Pages/AdminDashboard';
import jwt from 'jsonwebtoken'

import { storeToken, getToken, removeToken } from '../src/Cache/User';
import UserContext from '../src/Context/User'

function App() {
  const [user, setUser] = useState('');

  useEffect(() => {
    const token = getToken();
    const data = jwt.decode(token);
    if (data) {
      setUser(data);
    }
    return
  }, [])



  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Router>
        <div>
          <Route path='/Register'>
            <Register />
          </Route>
          <Route path='/user-login'>
            <Login />
          </Route>
          <Route path='/ForgetPassword'>
            <ForgetPassword />
          </Route>
          <Route path='/resetPassword/:token'>
            <ChangePassword />
          </Route>
          <Route path='/ApplicantProfile'>
            <ApplicantProfile />
          </Route>
          <Route path='/CompanyProfile'>
            <CompanyProfile />
          </Route>
          <Route path='/JobPortal'>
            <CompanyJobPortal />
          </Route>
          <Route path='/Jobs'>
            <ApplicantJobPortal />
          </Route>
          <Route path='/PaymentAndSubscription'>
            <PaymentAndSubscription />
          </Route>
          <Route path='/Chat'>
            <ChatAndSupport />
          </Route>
          <Route path='/ApplicantInterview'>
            <ApplicantInterview />
          </Route>
          <Route path='/CompanyInterview'>
            <CompanyInterview />
          </Route>
          <Route path='/AdminDashboard'>
            <AdminDashboard />
          </Route>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
