import React from 'react';
import './App.css';
import TodoItem from './TodoItem';
import todosData from "./todosData";

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      todos : todosData
    }
    this.handalChange = this.handalChange.bind(this)
  }
  //  inside the setState parenthesis which takes arro function and function takes prevState parameter
  handalChange(id){
    this.setState(prevState => {
      
      const  updatedTodos = prevState.todos.map(todo => {
        if(todo.id===id){
          todo.completed = !todo.completed
        }
        return todo
      })
      // here prevState have todos key and return updated todos
         return {
           todos : updatedTodos
            }
    })
  }
  
  // item whose is left to the equal is used to props calling
  render(){

  const dataitem = this.state.todos.map(item => <TodoItem key={item.id} item ={item} 
       handalChange = {this.handalChange}/>)
  
  return (
    <div className="todo-list">
        {dataitem}
    </div>
)
  }

}

export default App
