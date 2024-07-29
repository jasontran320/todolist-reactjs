import TodoInput from "./components/TodoInput.jsx";
import TodoList from "./components/TodoList"
import { useState, useEffect } from "react";

function App() {
//TodoList todos={todos} passes todos down to those elements, which they can receive as a prop
//todos is called a react stateful variable? Allows updating elements 

  const [todos, setTodos] = useState(
    []
  )
  const [todoValue, setTodoValue] = useState('')

  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }

  function handleAddTodos (newTodo) {
    const newTodoList = [...todos, newTodo]//... is list operator for spreading list into elements so that it can be copied
    persistData(newTodoList)
    setTodos(newTodoList)
  }

  function handleDeleteTodo (index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  
  function handleEditTodo(index) {
      const valueToBeEdited = todos[index]
      setTodoValue(valueToBeEdited)
      handleDeleteTodo(index)
  }

  useEffect(()=>{
    if (!localStorage) {
      return 
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
        {/*How to comment. Essentially you use this compoennt to nest embed more
                      more html stuff. Nesting components. Also I believe components can act
                      as their own html custom tags?*/}
    </>
  )
}

export default App
