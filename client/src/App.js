import { Home } from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {

  const user = false
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/single/:postId",
      element:<Single/>,
    },
    {
      path: "/write",
      element: user ? <Write/> : <Login/>,
    },
    {
      path: "/settings",
      element: user ? <Settings/>: <Login/>,
    },
    {
      path: "/register",
      element: user ? <Home/> : <Register/>,
    },
    {
      path: "/login",
      element: user ? <Home/> : <Login/>,
    },
    
  ]);
  return (
    <>
      
      <RouterProvider router={router} />
    </>
    
  );
}

export default App;
