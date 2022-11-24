import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router/Routes";

function App() {
  return (
    <div className="App  rounded-xl">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
