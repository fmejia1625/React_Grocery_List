import React, { Component } from 'react'
import ShoppingItems from './ShoppingItems'


class ShoppingList extends Component {

constructor(props){
  super(props);
  this.addItem = this.addItem.bind(this);
  this.state = {
    items: []
  };
  this.deleteItems = this.deleteItems.bind(this)
}
addItem(e) {
  if (this._inputElement.value !== "") {
    var newItem = {
      text: this._inputElement.value, 
      key: Date.now()
    };

    this.setState((prevState) => {
      return {
        items: prevState.items.concat(newItem)
      };
    });
    this._inputElement.value = ""; 
  }
  console.log(this.state.items);
  e.preventDefault();
}

deleteItems(key) {
  var filteredItems = this.state.items.filter(function
    (item) {
      return (item.key !== key);
    });
    this.setState({
      items: filteredItems
    })
}


  render() {
    return (
      <div className="ShoppingListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this._inputElement = a} placeholder="Grocery Item">
            </input>
            <button type="submit">Add item by clicking here</button>
          </form>
        </div>
        <ShoppingItems entries = {this.state.items}
                      delete = {this.deleteItems}  />
      </div>
    )
  }
}

export default ShoppingList;
