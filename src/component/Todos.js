/* eslint-disable no-undef */

import React,{ Component } from 'react';
import TodosItem from './TodoItem';
import PropTypes from 'prop-types';



 class Todos extends Component{
   
    render(){

       //console.log(this.props.todo);
    return this.props.todo.map((todos)=>
    <TodosItem key={todos.id} todos={todos} markComplete={this.props.markComplete}/>);
           
        
    }
    
  }
   Todos.propTypes={
    todo:PropTypes.array.isRequired,
   } 


export default Todos;
