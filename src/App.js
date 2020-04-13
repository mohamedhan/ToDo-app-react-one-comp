import React, { Component } from "react";
import "./App.css";
export default class App extends Component {
  constructor() {
    super();
    this.state={
      input:"",
      items:[{text:"mouadh",isCompleted:false},{text:"anas",isCompleted:false},{text:"mohamed",isCompleted:false}]
    }
  }
 
  handleChange=(e)=>{
    this.setState({
      input: e.target.value
    })
  }

  addItem=()=>{
    this.setState({
      items:[{text:this.state.input},...this.state.items],
      input:""
    })
  }

  handleDelete=(indice)=>{
    this.setState({
      items: this.state.items.filter((el,key)=> (key!==indice) )
    })
  }

  handleComplete=(id)=>{
    this.setState({
      items: this.state.items.map((el,index)=> (index===id)? {...el,isCompleted:!el.isCompleted } : el    )
    })
  }

  render() {
    return (
      <div>
        <div className="container request">
          <div className="col request-content">
            <h1>To-Do App!</h1>
            <p>Add New To-Do</p>
            <input
              type="text"
              className="form-control input-val"
              placeholder="Enter new task"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button type="button" id="add-button" className="btn btn-primary"  onClick={this.addItem} >
              Add
            </button>
          </div>
        </div>
        
        <div className="response-title">
                <h3>Lets get some work done!</h3>
                <hr />
        </div>
        <div>
          {this.state.items.map((el,index)=>
              <div className="items" >
                <button onClick={()=>this.handleComplete(index)} >{ (el.isCompleted)? "undo" : "complete" } </button>
                <button onClick={()=>this.handleDelete(index)} >delete</button>
                <p  style={{textDecoration:(el.isCompleted)&&"line-through"  }}  > {el.text} </p>
              </div>
          )
          }
        </div>
      </div>
    );
  }
}
