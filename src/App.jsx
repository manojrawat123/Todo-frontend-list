import React, { useContext, useEffect, useState } from 'react'
import "./index.css"
import { Route, Routes, useNavigate } from 'react-router-dom';
import ApiFetchTodoContext from './myContext';
import Protectedroutes from './protectedRoutes/ProtectedRoutes';
import MyProfile from './MyProfile/MyProfile';
import MyLogin from './LoginForm/MyLogin';


const App = () => {
  return (
<>

<Routes>
      <Route path='' Component={Protectedroutes}>
        <Route path='/' Component={MyProfile}></Route>
      </Route>
      <Route path='/login' Component={MyLogin}></Route>

    </Routes>

    </>)
}

export default App
