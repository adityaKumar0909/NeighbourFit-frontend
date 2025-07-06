
//This file contains all the routes of the website and implemented smooth transition using framer npm-package


import './App.css'
import {useLocation,Routes,Route} from "react-router-dom";
import OnboardingPage  from './pages/OnboardingPage.jsx'
import LoginScreen from './pages/LoginScreen.jsx'
import SignupScreen from './pages/SignupScreen.jsx'
import AuthenticateOTPScreen from './pages/AuthenticateOTPScreen.jsx'
import { AnimatePresence } from 'framer-motion';
import ResetPasswordScreen from "./pages/ResetPassword.jsx";
import ResetPassAuthenticateOTPScreen from "./pages/ResetAuthenticateOTP.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import {UserPreferenceScreen} from "./pages/UserPreferenceScreen.jsx";
import Error404Screen from "./pages/error404Screen.jsx";

function App() {

  const location = useLocation();

  return (
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<OnboardingPage/>} />
          <Route path="/login" element={<LoginScreen/>} />
          <Route path="/sign-up" element={<SignupScreen/>} />
          <Route path="/authenticate" element={<AuthenticateOTPScreen/>} />
          <Route path="/reset-password" element={<ResetPasswordScreen/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/reset-password-otp" element={<ResetPassAuthenticateOTPScreen/>} />
            <Route path="/user-preference" element={<UserPreferenceScreen/>} />
            <Route path="*" element={<Error404Screen/>} />

        </Routes>
      </AnimatePresence>
  )
}

export default App
