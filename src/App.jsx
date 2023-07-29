import React from "react";
import "./App.scss";
import AddOption from "./components/AddOption";
import Header from "./components/Header";
import Options from "./components/Options";
import ReactModal from "react-modal";

class App extends React.Component {
  closeTimeOut = 100;

  constructor(props) {
    super(props);

    this.state = {
      options: ["one", "two", "Three"],
      error: "",
      selectedOption: "",
      hasOptions: () => {
        if (this.state.options) {
          return this.state.options.length > 0;
        }
      },
    };
    this.addOptionItem = this.addOptionItem.bind(this);
    this.deleteOption = this.deleteOption.bind(this);
    this.removeAll = this.removeAll.bind(this);

    //console.log("this is at the constructor."+this.state.options);
  }
  render() {
    
    return (
      <>
        <Header
          title="Indecision App"
          subtitle="This app will make decision for you"
          error={this.state.error}
        />
        <div className="container">
          <button onClick={this.pickOneOption} className="pickOneButton">
            pick one
          </button>
          <Options
            options={this.state.options}
            deleteOption={this.deleteOption}
            removeItem = {this.removeItem}
          />
          <AddOption
            addOptionItem={this.addOptionItem}
            removeItem={this.removeItem}
            removeAll={this.removeAll}
            hasOptions={this.state.options.length>0}
          />
        </div>
      </>
    );
  }
  onModelButtonClick = () => {
    this.setState({ selectedOption: "" });
    // console.log("onModalbuttonisclicked");
  };
  addOptionItem(optionItem) {
    //console.log(optionItem);
    if (optionItem) {
      this.setState((prevState) => {
        const newOptions = prevState.options || []; // Handle null or undefined options
        if (newOptions.includes(optionItem)) {
          return {
            options: newOptions,
            error: optionItem + " already exists",
          };
        } else {
          return {
            options: newOptions.concat(optionItem),
            error: "",
          };
        }
      });
    }
  }

  deleteOption(index) {
    // console.log(index + " item to be deleted");
    var newOptions = this.state.options;
    newOptions.splice(index, 1);
    this.setState({
      options: newOptions,
    });
  }
  removeAll() {
    this.setState({
      options: [],
      error: ""
    });
  }
  removeItem = (item) => {
    if (this.state.options.includes(item)) {
      let index = this.state.options.indexOf(item);
      let newOptions = this.state.options;
      newOptions.splice(index, 1);
      this.setState(() => {
        return {
          options: newOptions,
          error:""
        };
      });
    } else {
      if(item){
      this.setState({
        error: `the ${item} is not present in the list try something else`
       
      });
    }else{
      this.setState({
        error: "Please enter a item to delete"
    })}
    }
    // var newOptions = this.state.options;
    // newOptions.splice(index, 1);
    // this.setState((prevState) => {
    //   console.log(prevState);
    //   return newOptions;
    // });
  };
  pickOneOption = () => {
    this.setState({
      selectedOption:
        this.state.options[
          Math.floor(Math.random() * this.state.options.length)
        ],
    });
    // console.log("you have selected option number " + this.state.selectedOption);
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options !== this.state.options) {
      console.log("component did update " + this.state.options);
      localStorage.setItem("options", JSON.stringify(this.state.options));
      this.setState({hasOptions: this.state.options.length>0})
    }
    else{
      console.log("componentDidUpdate is not updated")
    }
  }
  
  componentDidMount() {
    var optionString = localStorage.getItem("options");
    var ops = JSON.parse(optionString);
    this.setState({
      options: ops,
      hasOptions: () => {
        console.log(this.state.options.length);
        return this.state.options.length > 0;
      },
    });
    //console.log("component did mount " + optionString);
  }
}

export default App;
