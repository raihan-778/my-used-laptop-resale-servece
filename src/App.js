import logo from "./logo.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router/Routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="App relative bg-[#EAFDFC] rounded-xl">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
