import React from "react";
import ReactDOM from "react-dom/client";
import { HooksApp } from "./HooksApp";
import "./styles.css";
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
import { SimpleForm } from "./01-useState/02-useEffect/SimpleForm";
import { FormWithCustomHooks } from "./01-useState/02-useEffect/FormWithCustomHooks";
import { MultipleCustomHooks } from "./03-examples";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";
import { CallbackHook } from "./06-memos/CallbackHooks";
import { Padre } from "./07-tarea-memo/Padre";
import "./08-useReducer/into-reducer";
import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>
);

//  <React.StrictMode>
{
  /* <HooksApp/>
    <CounterApp/>
    <CounterWithCustomHooks/> */
}
{
  /* <SimpleForm/> */
}
{
  /* <FormWithCustomHooks/> */
}
{
  /* <MultipleCustomHooks/> */
}
// <TodoApp/>
{
  /* <Layout/> */
}
{
  /* <Memorize/> */
}
{
  /* <MemoHook/> */
}
{
  /* <Padre/> */
}
{
  /* <CallbackHook/> */
}

//  </React.StrictMode>
