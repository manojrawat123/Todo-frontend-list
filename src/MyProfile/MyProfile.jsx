import AddTodo from '../Component/AddTodo';
import DisplayTodo from '../Component/DisplayTodo';

const MyProfile = () => {
     return (
        <>
    <div className="grid grid-cols-12 gap-10 ml-[100px] my-[100px]">
        <AddTodo className="col-span-6"/>
        <DisplayTodo />
      </div>
        </>
      )
}

export default MyProfile
