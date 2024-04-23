import React from 'react'
import TodoAddComp from './todoPost/todoPost'
import TodoGet from './todoGet/todoGet'
import { ToastContainer } from 'react-toastify'

const TodoMain = () => {
  return (
    <>
    <ToastContainer />
    <div className='grid grid-cols-2'>
        <div className='col-span-1'>
        <TodoAddComp />
        </div>
        <div className='col-span-1'>
        <TodoGet />
        </div>
    </div>
    </>
  )
}

export default TodoMain
