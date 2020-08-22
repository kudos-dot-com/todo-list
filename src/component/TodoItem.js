import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class TodoItem extends Component {
    getState=()=>{
        
    return{
    height:'50px',             
    background:'#333',
    margin:'5px',
    color:'#fff',
    textTransform:'capitalize',
    position:'relative',
    textDecoration:(this.props.todos.complete)?'line-through' : 'none',
            
           }
      
       
    }
  
    render() {
        const { id , work}=this.props.todos;
        return (
           
            <div style={this.getState()}>
                
            <div style={{display:'flex',paddingLeft:'5px',alignItems:'center',alignContent:'center',position:'absolute',top:'50%',transform:'translateY(-50%)',justifyContent:'space-around'}}>
            <input type="checkbox" name="" id={id} onChange={this.props.markComplete.bind(this,id)}/> 
            <p style={{fontSize:'20px',paddingLeft:'5px'}}>{work}</p>
            </div>
           
        <button style={{position:'absolute',right:'0px',top:'0px',display:'block',background:'red',color:'#fff',fontSize:'20px',width:'50px',height:'100%',borderRadius:'50%',textAlign:'center'}} onClick={this.props.checkComplete.bind(this,id)}>x</button>    
            </div>
        )
    }
}
TodoItem.propTypes={
    todos:PropTypes.object.isRequired,
   } 
   
export default TodoItem




