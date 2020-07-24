import React, {Component} from "react"
import AddToDo from "./Components/AddToDo"
import MasterList from "./Components/MasterList"

class App extends Component {
  constructor(){
    super()
    this.state = {
      masterToDoList: ["eat food", "take a break", "get some sleep"]
    }
    this.add = this.add.bind(this)
  }

  add(newToDo){
    const updatedList = [...this.state.masterToDoList]
    updatedList.push(newToDo)
    this.setState({
      masterToDoList: updatedList
    })
  }

  render(){
    return (
      <div>
        <h1>This is the App Component</h1>
        <AddToDo add={this.add}/>
        <MasterList toDoList={this.state.masterToDoList}/>
      </div>
    )
  }
}

export default App