import Intro from "./components/intro";
import Play from "./components/play";
import Win from "./components/win";
import Lose from "./components/lose";
import Draw from "./components/draw";
import NotFoundPage from "./components/NotFoundPage";

// to use react-router-dom do first - npm i react-router-dom

// React hooks cannot be used inside class components
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
    path: "/rock-paper-scissors/Win",
    element: <Win />,
  },
  {
    path: "/rock-paper-scissors/Lose",
    element: <Lose />,
  },
  {
    path: "/rock-paper-scissors/Draw",
    element: <Draw />,
  },
]);

// the hook can be used hear because App is a functinal component
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
