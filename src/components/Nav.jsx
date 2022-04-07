import { useState } from "react";
import "./Card.css";

export default function Nav(props) {
  function prev() {
    const { prevFn } = props;
    prevFn();
  }
  function next() {
    const { nextFn } = props;

    nextFn();
  }
  function edit() {
    const { data, cardCount, editFn } = props;
    console.log("hit edit", cardCount);
    editFn(cardCount);
  }
  function deleteUser() {
    console.log("hit deleteUser");
    const { data, cardCount, deleteFn } = props;
    deleteFn(data);
  }
  function newUser() {
    console.log("hit newUser");
    const { data, cardCount, newFn } = props;
    newFn();
  }

  return (
    <div className="nav">
      <button onClick={prev}> {"<"}Previous</button>
      <div className="nav-mid">
        <button onClick={edit}>Edit</button>
        <button onClick={deleteUser}>Delete</button>
        <button onClick={newUser}>New</button>
      </div>
      <button onClick={next}>Next {">"}</button>
    </div>
  );
}
