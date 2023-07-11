import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const Protectedroutes = () => {
    const [auth, setAuth] = useState()
    useEffect(()=>{
        const checkAuth = ()=>{
            const isAuth = localStorage.getItem("token");
        console.log(isAuth) 
        if (isAuth !== null){
            setAuth(false)
        }
        else{
            setAuth(true);
        }
        
        }
        checkAuth()
    }, [])
  if (auth){
    return <Navigate to={"/login"} />
  }
  else{
    return <Outlet />
  }
}

export default Protectedroutes
