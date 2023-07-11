import React, { useContext, useEffect, useState } from 'react'
import ApiFetchTodoContext from '../myContext';

const DisplayTodo = () => {

    const { todos, fetchGetTodo, token } = useContext(ApiFetchTodoContext);
    useEffect(()=>{
      console.log(todos);
    },[])
  //  Delete The function of todos
    const onDelete = async (id) => {
      console.log("Ondelete Function is running")
      try {
        const response = await fetch(`http://localhost:3000/tododelete/${id}`, {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${token}`,
          },

        });
        // console.log(response);
        console.log("This is Running")
        fetchGetTodo();
        console.log("Deleted Sucessfully")
        if (!response.ok) {
          throw new Error('Request failed');
        }
        } catch (error) {
        console.error('Error:', error.message);
        // Handle error here
      }
    }
    // Update Function 
    const onDone = async(id)=>{
      try {
        const response = await fetch(`http://localhost:3000/done/${id}`, {
          method: 'PUT',
          headers: {
            Authorization: `Bearer ${token}`,
          },
          
        });
        // console.log(response);
        console.log("This is Running")
        fetchGetTodo();
        console.log("Deleted Sucessfully")
        if (!response.ok) {
          throw new Error('Request failed');
        }
        } catch (error) {
        console.error('Error:', error.message);
        // Handle error here
      }
    }

    
  return (
    <>
  <div className="container mt-8 col-span-12">
      <h1 className="text-3xl font-bold mb-4 underline text-center ">Todo List</h1>
      <table className="">
        <thead>
          <tr>
            <th className="w-1/4 text-left border px-4 py-2">Title</th>
            <th className="w-1/2 text-left border px-4 py-2">Description</th>
            <th className="w-5% text-left border px-4 py-2">Status</th>
            <th className="w-10% text-left border px-4 py-2">Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <tr key={todo._id} className='border px-4 py-2'>
              <td className='border px-4 py-2'>{todo.title}</td>
              <td className='border px-4 py-2'>{todo.desc}</td>
              <td className='border px-4 py-2'>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                 onClick={() => onDone(todo._id) }>
                  {todo.completed?<>Completed</>: <>Pending</>}
                </button>
              </td>
              <td className='border px-4 py-2'>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                onClick={() => onDelete(todo._id) }>
                  Delete 
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



    </>
  )
}

export default DisplayTodo