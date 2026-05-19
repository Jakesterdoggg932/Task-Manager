import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import SiteFooter from './Components/Common/SiteFooter';
import SiteNav from './Components/Common/SiteNav';
import HomePage from './Components/Bookkeeping/HomePage';
import LoginPage from './Components/auth/LoginPage';
import RegisterPage from './Components/auth/RegisterPage';
import AboutPage from './Components/Bookkeeping/AboutPage';
import { Route, Routes } from 'react-router-dom';
import { Authenticator } from '@aws-amplify/ui-react';
import { Amplify } from 'aws-amplify';
import outputs from 'amplify_outputs.json';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(outputs);

function App() {
  return (
    <Authenticator loginMechanisms={['email']}>
      {({ signOut, user }) => (
    <div >
      <SiteNav />
      <Routes>
        <Route path='*' element={<HomePage />}/>
        <Route path='/' exact={true} element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
      <SiteFooter />
    </div>
      )}
    </Authenticator>
  );
}
export default App;
