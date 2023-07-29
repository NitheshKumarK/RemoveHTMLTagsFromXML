import React from "react";

class Options extends React.Component {
 
  render() {
    return (
      <>
        <div className="item">
          <ul>
            {this.props.options.map((it, index) => (
              <>
                <li onClick={()=>{this.removeItem(it)}}key={index}>{it}</li>
                <br />
              </>
            ))}
          </ul>
        </div>
      </>
    );
  }
  removeItem = (item)=>{
    this.props.removeItem(item)
  }
}



export default Options;
