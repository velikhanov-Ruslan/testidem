import React from "react";

const Footer = (props) => {
    return (
      <footer className="footer">
          <div className="footer__text">{props.text}</div>
      </footer>
    )
}

export default Footer