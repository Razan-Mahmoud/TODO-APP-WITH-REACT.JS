import React from 'react'

export default function TodoCard(props) {
  const { children, deleteTodo, index, editTodo } = props

  return (
    <li className='todoLi'>
      {children}
      <div className='divIcon'>
        
        <i onClick={() => {
          editTodo(index)
        }} className="fa-solid fa-pen-to-square icon"></i>

        <i onClick={() => {
          deleteTodo(index)
        }} className="fa-solid fa-trash-can icon"></i>
      </div>
    </li>
  )
}
