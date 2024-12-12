import React, { useEffect, useState } from 'react'
import TodoInput from './Components/TodoInput'
import TodoList from './Components/TodoList'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export default function App() {

  let [todos, setTodos] = useState([]);
  let [todoValue, setTodoValue] = useState("")

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({ todos: newList }))
  }

  function addNewTodo(newTodo) {
    const newTodoList = [...todos, newTodo]
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function deleteTodo(index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    });
    persistData(newTodoList)
    setTodos(newTodoList)
  };

  function editTodo(index) {
    const valueToBeEdited = todos[index]
    setTodoValue(valueToBeEdited)
    deleteTodo(index)
  }

  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos');
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} addNewTodo={addNewTodo} />

      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </>
  )
}