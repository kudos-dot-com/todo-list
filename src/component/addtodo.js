import React, { Component } from 'react';
export class addtodo extends Component {
    render() {
        return (
         
           
           <div style={{display:'flex'}}>
           <input type='text' id="" name="" placeholder="enter todos" style={this.Inputstyle()}/>
            <button type="submit" style={this.buttonStyle()}>submit</button>
           </div>
        );
    }
    Inputstyle=()=>{
        return{
        width:'80%',
        height:'3px',
        padding:'20px',
        margin:'5px 5px',
        border:'1px solid #000',
        borderRadius:'30px',
        }
    }
    buttonStyle=()=>{
        return{
            height:'30px',
            width:'70px',
            margin:'10px 5px',
            textTransform:'capitalize',
            fontWeight:'bold',
            color:'#fff',
            backgroundColor:'black',
            borderRadius:'30px'
        }
    }
}

export default addtodo;
