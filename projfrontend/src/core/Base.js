import React from "react";
import Menu from "./Menu";
import '../styles.css'


const Base = ({
  title = "",
  children
}) => (
  <div>
    <Menu />
    <div className="container-fluid py-5">
      <div className="text-warning text-center">
        <h2 className="display-4">{title}</h2>
      </div>
      <div>{children}</div>
    </div>
    <footer className="footer mt-auto py-3">
      <div className="container-fluid text-dark text-center py-3">
        
        <div className="divstyle"></div>
        <h4>If you got any questions, feel free to reach out!</h4>
        <button className="btn btn-warning btn-lg rounded-lg"><a className="text-decoration-none text-light" href="https://wa.me/918700078089?" target="_blank">Contact Us on Whatsapp</a></button>
      </div>
      
    </footer>
  </div>
);

export default Base;
