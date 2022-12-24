import React from 'react'
import { HoamePage } from './homepage';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import store from './sectionDetails/store';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { RegisterUser } from './sectionDetails/register';
import { LogInuser } from './sectionDetails/login';
import { AdminPage } from './sectionDetails/adminpage';



function App() {
  return (
    <Provider store={store} >
      <Router>
        <Routes>
          <Route exact path='/' element={ <HoamePage/> }/>
          <Route exact path='/register' element={ <RegisterUser/> }/>
          <Route exact path='/login' element={ <LogInuser/> }/>
          <Route exact path='/adminPage' element={ <AdminPage/> }/>
        </Routes>
      </Router>
      <ToastContainer/>
    </Provider>
  );
}

export default App;