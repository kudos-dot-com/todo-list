import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Climbing the tree component drilling
export class TodoItem extends Component {
    getState=()=>{
        
       
        return{
                 
            background:'#333',
    margin:'5px',
    color:'#fff',
    textTransform:'capitalize',
    display:'flex',
    justifyContent:'space-around',
    alignItems:'center',       
    textDecoration:(!this.props.todos.complete)?'line-through' : 'none',
    color:(!this.props.todos.complete)?'red' : 'blue',
            
           }
      
       
    }
  
    render() {
        const { id , work}=this.props.todos;
        return (
           
            <div style={this.getState()}>
            <input type="checkbox" name="" id={id} onChange={this.props.markComplete.bind(this,id)}/> 
            <p>{work}</p>    
            </div>
        )
    }
}
TodoItem.propTypes={
    todos:PropTypes.object.isRequired,
   } 
   
export default TodoItem




