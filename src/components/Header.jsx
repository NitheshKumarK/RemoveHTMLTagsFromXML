import React from "react";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
      <h1 className="header__title">The {props.title}</h1>
      <h3 className="header_subtitle">Make you Decision Making Easier</h3>
      {props.error ? <h3 className="header_error">{props.error}</h3>: null}
      </div>
    </div>
  );
}
export default Header;
