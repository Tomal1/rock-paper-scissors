import Intro from "./components/intro";
import Play from "./components/play";
import Ending from "./components/ending";
import NotFoundPage from "./components/NotFoundPage";

// to use react-router-dom do first - npm i react-router-dom

// import these
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// save in a variable

const router = createBrowserRouter([
  {
    path: "/rock-paper-scissors/" /*check what you have after localhost:5173/ */,
    element: <Intro />,
    errorElement: <NotFoundPage />,
  },
  {
    path: "/rock-paper-scissors/Play",
    element: <Play />,
  },
  {
    path: "/rock-paper-scissors/Ending",
    element: <Ending />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
