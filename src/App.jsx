import "./App.css";
import Sidebar from "./components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Inbox from "./components/Inbox";
import Body from "./components/shared/Body";
import Mail from "./components/Mail";
import SendMail from "./components/SendMail";
import Navbar from "./components/shared/Navbar";
import Login from "./components/Login";
import { useSelector } from "react-redux";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,

    children: [
      { path: "/", element: <Inbox></Inbox> },
      {
        path: "/mail/:id",
        element: <Mail></Mail>,
      },
    ],
  },
]);

function App() {
  const { user } = useSelector((store) => store.appSlice);
  return (
    <div className="min-h-screen  min-w-screen  overflow:hidden  bg-[#F6F8FC]  border-b-8   border-custom-gray">
      {!user ? (
        <Login />
      ) : (
        <>
          <Navbar />
          <RouterProvider router={router}></RouterProvider>
          <div className="absolute w-[30%]  top-52 right-10 z-10">
            <SendMail></SendMail>
          </div>
        </>
      )}
    </div>
  );
}

export default App;