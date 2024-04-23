import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import API_BASE_URL from '../../../config';
import Cookies from 'js-cookie';
import { DataContext } from '../../../context';
import { ToastContainer, toast } from 'react-toastify';
import TodoSupport from './todoSupport';
import NoDataPage from '../../../Component/NoDataPage/NoDataPage';

const TodoGet = () => {

    const { todoListGetFunc, todoList } = useContext(DataContext);
    const [button, setButton] = useState(false);

    useEffect(() => {
        todoListGetFunc();
    }, []);

    return (
        <div className=' bg-blue-50 py-10'>
            <h2 className="bg-gray-100 text-green-600 text-3xl py-4 px-6  font-semibold text-center">Todo List</h2>
            { todoList.length == 0 ? <><NoDataPage domain={"No Todo Added"}/></> : 
                todoList?.map((element, index) => {
                    return (
                        <TodoSupport element={element} index={index} key={index} />
                    )
                })
            }
        </div>
    )
}

export default TodoGet
