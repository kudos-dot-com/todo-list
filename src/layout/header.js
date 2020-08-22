import React, { Component } from 'react'

export class header extends Component {
    getStyle=()=>{
        return{
            textAlign:'center',
            fontSize:'30px',
            textTransform:'uppercase',
            background:'#ccc',
            fontWeight:'bold',
            border:'2px solid #333',
        }
    }
    render() {
        return (
            <div style={this.getStyle()}>
                <p>todo-list</p>
            </div>
        )
    }
}


export default header
 