import AppBar from "../views/AppBar/AppBar";
import { Route, Routes } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { FaSpinner } from 'react-icons/fa';
import Phonebook from "../views/Phonebook/Phonebook";
import HomePage from "../views/HomePage/HomePage";
import RegisterView from "../components/RegisterView/RegisterView";
import LoginView from "../components/LoginView/LoginView";
import { useDispatch } from "react-redux";
import { fetchCurrentUser } from "redux/operaitions";
// import PrivatRoute from "./PrivatRoute";


const fallbackStyle = {
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: 60,
  color: '#525151'
}



export default function App () {

const dispatch = useDispatch()

useEffect(()=>{ dispatch(fetchCurrentUser())},[dispatch])

  return (<>
    <AppBar/>
      <Suspense fallback={<div style={fallbackStyle}><FaSpinner/></div>}>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
            <Route path="register" element={<RegisterView />} />
            <Route path="login" element={<LoginView/>}/>
            <Route path="contacts" element={<Phonebook/>}/>
           <Route path="*" element={<HomePage/>} />
        </Routes>
      </Suspense>
      </>
  );
};


