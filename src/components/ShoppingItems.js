import React, { Component } from 'react'

class ShoppingItems extends Component {
constructor(props){
  super(props);
  this.createTasks = this.createTasks.bind(this);
}

delete(key) {
  this.props.delete(key);
}


  createTasks(items) {
    return <li onClick = { () => this.delete(items.key)} 
    key={items.key}>{items.text}</li>
  }

  
  render() {
    var shoppingEntries = this.props.entries;
    var listItems = shoppingEntries.map(this.createTasks)
    return (
      <ul className="theGroceryList">
        {listItems}
      </ul>
    )
  }
}
export default ShoppingItems

