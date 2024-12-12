import React from 'react'


import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faPenToSquare} />
const trashElement = <FontAwesomeIcon icon={faTrashCan} />




export default function TodoCard(props) {
  const { children, deleteTodo, index, editTodo } = props
 
  return (
    <li className='todoLi'>
      {children}
      <div className='divIcon'>

        <button onClick={() => {
          editTodo(index)
        }} className="icon" aria-hidden="true">{element}</button><span className="fa-sr-only">Edit Icon</span>

        <button onClick={() => {
          deleteTodo(index)
        }} className="icon" aria-hidden="true">{trashElement}</button><span className="fa-sr-only">Delete Icon</span>
      </div>
    </li>
  )
}
