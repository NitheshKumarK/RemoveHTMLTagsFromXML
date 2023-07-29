import React from "react";

class AddOption extends React.Component {
  optionItemElement = null;
  constructor(props) {
    super(props);
    this.addOptionButtonTrigger = this.addOptionButtonTrigger.bind(this);
    this.removeAll = this.removeAll.bind(this);
  }


  render() { 
    return (
      <div>
        <form>
          <input
            type="text"
            name="addOption"
            id="addOption"
            placeholder="Enter option"
            className="optionInput"
          />
          <button onClick={this.addOptionButtonTrigger}>Add option</button>
          {this.props.hasOptions ? (
            <button onClick={this.removeItem}>Remove Item</button>
          ) : null}
          {this.props.hasOptions ? (
            <button onClick={this.removeAll}>Remove All</button>
          ) : null}
        </form>
      </div>
    );
  }
  addOptionButtonTrigger(event) {
    event.preventDefault();
    this.optionItemElement = document.getElementById("addOption");
    this.props.addOptionItem(this.optionItemElement.value);
    this.optionItemElement.value = "";
  }
  removeItem = (event) => {
    event.preventDefault();
    this.optionItemElement = document.getElementById("addOption");
    this.props.removeItem(this.optionItemElement.value);
    this.optionItemElement.value = "";
    // console.log("this is remove item button");
  };
  removeAll(event) {
    event.preventDefault();
    this.props.removeAll();
    console.log("this is remove all button");
  }
}
export default AddOption;
