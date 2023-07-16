import React, { useEffect } from 'react';
import "./App.css";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import {LoginPage,SignupPage,ActivationPage,HomePage} from "./Routes.js";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios';
// import{server} from "./server";
import Store from './redux/store';
import { loadUser } from './redux/actions/user';


const App = () => {
  useEffect(()=>{
    // axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{
    //   toast.success(res.data.message);
    // }).catch((err)=>{
    //   toast.error(err.response.data.message);
    // });
    Store.dispatch(loadUser());
  },[]);
  return (
<BrowserRouter>
<Routes>
<Route path='/' element={<HomePage/>} />
  <Route path='/login' element={<LoginPage/>} />
  <Route path='/sign-up' element={<SignupPage/>} />
  <Route path='/activation/:activation_token' element={<ActivationPage/>} />
</Routes>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
</BrowserRouter>
  )
}

export default App
