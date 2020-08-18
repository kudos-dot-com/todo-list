import React, { Component } from 'react';
import Todos from './component/Todos';
import './App.css';

class App extends Component
{
state={
  todos:[
      { id:1,
        work:'study',
        time:'5:00',
        complete:false
      },
      {id:2,
        work:'coding',
        time:'6:00',
        complete:false
      },
      { id:3,
        work:'drawing',
        time:'7:00',
        complete:false
      }
      
  ]
}
markComplete=(id)=>{
  console.log(id);
 this.setState({todos:this.state.todos.map(todo=>{
    if(todo.id===id)
    {
   todo.complete=!todo.complete   
    }
    //console.log(todo);
    return todo;
  })

 });

}
render() {
  
  return (
   
      <Todos todo={this.state.todos} markComplete={this.markComplete}/>
    
    
  );
}
}
export default App;
