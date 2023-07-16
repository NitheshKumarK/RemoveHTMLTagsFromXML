import React from "react";

class Options extends React.Component {
  render() {
    return (
      <>
        <div className="item">
          <ul>
            {this.props.options.map((it, index) => (
              <>
                <li key={index}>{it}</li>
                <br />
              </>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Options;
