
import React from "react";
import ReactDOM from "react-dom/client"
import { HooksApp } from "./HooksApp"; 
import "./styles.css"
import { CounterApp } from "./01-useState/CounterApp";
import { CounterWithCustomHooks } from "./01-useState/CounterWithCustomHooks";
import { SimpleForm } from "./01-useState/02-useEffect/SimpleForm";
import { FormWithCustomHooks } from "./01-useState/02-useEffect/FormWithCustomHooks";
import { MultipleCustomHooks } from "./03-examples";
import { FocusScreen } from "./04-useRef/FocusScreen";
import { Layout } from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memos/Memorize";
import { MemoHook } from "./06-memos/MemoHook";

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
    {/* <HooksApp/>
    <CounterApp/>
    <CounterWithCustomHooks/> */}
    {/* <SimpleForm/> */}
    {/* <FormWithCustomHooks/> */}
    {/* <MultipleCustomHooks/> */}
    {/* <FocusScreen/> */}
    {/* <Layout/> */}
    {/* <Memorize/> */}
    <MemoHook/>
</React.StrictMode>

)