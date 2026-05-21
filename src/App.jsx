import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SiteFooter from './Components/Common/SiteFooter';
import SiteNav from './Components/Common/SiteNav';
import HomePage from './Components/Bookkeeping/HomePage';
import LoginPage from './Components/auth/LoginPage';
import AboutPage from './Components/Bookkeeping/AboutPage';
import TaskManager from './Components/App/TaskManager';
import { Route, Routes } from 'react-router-dom';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react';
import { signOut } from 'aws-amplify/auth';
import { Amplify } from 'aws-amplify';
import outputs from "../amplify_outputs.json";
import '@aws-amplify/ui-react/styles.css';
import Button from 'react-bootstrap/Button';
import RegisterPage from './Components/auth/RegisterPage';
import ValidatePage from './Components/auth/ValidatePage';
import { useState } from 'react';

Amplify.configure(outputs);
console.log(outputs)

function App() {

  const { isAuthenticated, setIsAuthenticated } = useState(false);

  return (
    <div >
      <SiteNav isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path='*' element={<HomePage />}/>
        <Route path='/' exact={true} element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage isAuthenticated={isAuthenticated} />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/validate' element={<ValidatePage />} />
        <Route path='/app' element={<TaskManager />} />
      </Routes>
      <SiteFooter />
    </div>
  );
}
export default App;
