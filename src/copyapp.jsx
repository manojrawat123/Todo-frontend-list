const {todos} = useContext(ApiFetchTodoContext);
  
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
 
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title:title, description: description}),
      });
      fetchTodo();
  
      if (!response.ok) {
        throw new Error("Request failed");
      }
  
      // Handle successful response here
    } catch (error) {
      console.error("Error:", error.message);
      // Handle error here
    }
  }
  const onDelete = async(id)=>{
    console.log(id)
    try {
      const response = await fetch(`http://localhost:3000/delete/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      fetchTodo();
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
  <div className="grid grid-cols-12 gap-10 m-[100px]">

    <div className='col-span-12 border-2 border-solid border-gray-600 rounded-2xl'>
      <h1 className='text-2xl font-semibold bg-blue-200 mb-10 py-2 pl-4 text-center rounded-t-2xl'>Add Todo</h1>
      <form onSubmit={handleSubmit} id="todoForm" className='px-4'>
      <label htmlFor="title">Title:</label> <br />
      <input type="text" id="title" name="title" required className='border border-solid border-gray-700 rounded-xl xl:w-[70%] w-[100%] h-[2rem]'
      value={title}
      onChange={(e) => setTitle(e.target.value)}/> <br /><br />

      <label htmlFor="description">Description:</label> <br />
      <textarea id="description" name="description" required className='border border-solid border-gray-700 rounded-xl xl:w-[70%] w-[100%] h-[3rem]'   
      value={description}
      onChange={(e) => setDescription(e.target.value)}></textarea> <br /><br />

<div className='text-center'>
     
      <button type="submit" className='border border-blue-500 bg-transparent hover:bg-blue hover:text-white font-semibold py-2 px-4 text-blue-700 hover:bg-blue-700 rounded-xl'>Add</button>
      <br /><br />
      </div>
    </form>
    </div>
          <div className="container col-span-12">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className='grid grid-cols-12 gap-10'>
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="bg-white p-4 mb-2 items-center justify-between col-span-6 flex border-2  border-gray-800"
        >
          <div className=" rounded-lg p-4 mb-4">
      <h3 className="text-lg font-semibold mb-2">{todo.title}</h3>
      <p className="mb-2">{todo.desc}</p>
      <button
        className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded"
        onClick={() => onDelete(todo._id)}
      >
        Delete
      </button>
    </div>
        </div>
      ))}
      </div>
    </div>
    </div>

      </>
    )