import React, { useState, useEffect } from "react";
import Form from './form-json.js';
import TodoList from './list';
import "./newToDo.scss";

function Todos(props) {
  return (
    <>
      <Form />
      <TodoList/>
    </>
  );
}

export default Todos;