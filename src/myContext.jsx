import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const ApiFetchTodoContext = createContext();
export default ApiFetchTodoContext;

const DataContext = ({children}) => {

    const [todos, setTodos] = useState([]);
    const [url, setUrl] = useState('http://localhost:3000/todo') /// Replace with your API endpoint
    const [token, setToken] = useState(localStorage.getItem("token")) /// Replace with your JWT token

    // ///// ///  This is get function For todo ///////////
  const fetchGetTodo = async()=>{
    setToken(localStorage.getItem("token"))
    const data = await fetch(url, {headers:{
      Authorization: `Bearer ${token}`
    }})
    const result = await data.json()
    setTodos(result.data)
    console.log(result)
  }
/// here The getFunction to get todo is finished

  //// login function start here
  const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Add your login logic here          
        try {
            const response = await axios.post("http://localhost:3000/login",{
                username: e.target.username.value, 
                password: e.target.password.value
            })
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            console.log(localStorage.getItem("token"))
            fetchGetTodo()
            navigate("/")
        } catch (error) {
            console.log(error);
            localStorage.removeItem("token");
        }
      };


  useEffect(()=>{
    
    fetchGetTodo();
  },[token])


    const [name, setName] = useState("Manoj Rawat");
  return (
    <ApiFetchTodoContext.Provider value={{todos, fetchGetTodo, handleSubmit, token}}>
        {children}
    </ApiFetchTodoContext.Provider>
  )
}
 
export { DataContext }
