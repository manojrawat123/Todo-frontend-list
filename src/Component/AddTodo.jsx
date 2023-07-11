import React, { useContext, useState } from 'react'
import ApiFetchTodoContext from '../myContext';

const AddTodo = () => {
    const { token, fetchGetTodo } = useContext(ApiFetchTodoContext)
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const addTodoFunc = async (e)=>{
        console.log("This is working")
        e.preventDefault();
        try {
          const response = await fetch("http://localhost:3000/todo", {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title:title, desc: description}),
          });
          fetchGetTodo();
      
          if (!response.ok) {
            throw new Error("Request failed");
          }
      
          // Handle successful response here
        } catch (error) {
          console.error("Error:", error.message);
          // Handle error here
        }
    }
  return (
   <>
     <div className="container col-span-10 border-2 rounded p-8 mx-[4rem]">
     <h1 className="text-2xl font-bold mb-4 text-center underline">Add Todos</h1>
      <hr />

      <div className="mb-4">
        <input
          type="text"
          className="border border-gray-300 p-2 w-full"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <textarea
          className="border border-gray-300 p-2 w-full"
          placeholder="Description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>

  <div className='text-center'>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={addTodoFunc}
      >
        Add Todo
      </button>
  </div>


     </div>
   </>
  )
}

export default AddTodo
