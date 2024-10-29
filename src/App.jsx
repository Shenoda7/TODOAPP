import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import TodoItem from "./components/Todo-Item/TodoItem";
import TodoDetails from "./components/Todo-Details/TodoDetails";
import { Skeleton } from "@mui/material";

function App() {
  const [loading, setLoading] = useState(true);
  const [todoList, setTodoList] = useState([]);
  const [Details, setDetails] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  async function getTodos() {
    try {
      const apiResponse = await fetch("https://dummyjson.com/todos");
      const result = await apiResponse.json();
      console.log(result);

      if (result?.todos && result?.todos.length > 0) {
        setLoading(false);
        setTodoList(result?.todos);
      } else {
        setLoading(false);
        setTodoList([]);
        throw new Error("Failed to fetch todos");
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function getDetailsOfCurrentTodo(currTodoId) {
    try {
      const apiResponse = await fetch(
        `https://dummyjson.com/todos/${currTodoId}`
      );
      const details = await apiResponse.json();
      if (details) {
        setDetails(details);
        setOpenDialog(true);
      } else {
        setOpenDialog(false);
        setDetails(null);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTodos();
  }, []);

  if (loading)
    return <Skeleton variant="rectangular" width={650} height={650} />;

  return (
    <div className={classes.mainWrapper}>
      <h1 className={classes.headerTitle}>Simple ToDo APP Using Material UI</h1>
      <div className={classes.todoListWrapper}>
        {todoList && todoList.length > 0 ? (
          todoList.map((todoItem) => (
            <TodoItem
              todo={todoItem}
              key={todoItem.id}
              getDetailsOfCurrentTodo={getDetailsOfCurrentTodo}
            />
          ))
        ) : (
          <h1>NO TODOS</h1>
        )}
      </div>
      <TodoDetails
        setDetails={setDetails}
        setOpenDialog={setOpenDialog}
        openDialog={openDialog}
        todoDetails={Details}
      />
    </div>
  );
}

export default App;
