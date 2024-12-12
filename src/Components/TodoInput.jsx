import React from 'react'

export default function TodoInput(props) {
  const { addNewTodo, todoValue, setTodoValue } = props
  return (

    <div className="container">
      <h1 >Todo List App</h1>
      <form >
        <div className='divInput'>
          <input value={todoValue} onChange={(e) => {
            setTodoValue(e.target.value)
          }} type="text" placeholder='Enter todo...'
            className='todoInput ' />
          <button onClick={(() => {
            addNewTodo(todoValue)
            setTodoValue("")
          })} className='addBtn'>Add</button>
        </div>

      </form>
    </div>
  )
}
