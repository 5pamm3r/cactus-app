import React from "react";
import "./Login.css";

function Login() {
  return (
    <section className="Login__container">
      <div className="Logo__container">
        <div className="Logo__container--back">
          <img
            src="https://img.icons8.com/doodle/96/000000/plant-under-sun--v1.png"
            alt="Logo"
          />
          <div className="Back"></div>
        </div>
        <p className="Name-app">Cacto</p>
      </div>
      <div className="Motto__container">
        <h2 className="Txt1">Plant a <span className="Txt-green">tree</span>,</h2>
        <h2 className="Txt2"><span className="Txt-green">green</span> the earth</h2>
      </div>
      <div className="Btn__container">
        <button className="Btn-SignIn">Sign in</button>
        <button className="Btn-Create">Create an Account</button>
      </div>
    </section>
  );
}

export { Login };
