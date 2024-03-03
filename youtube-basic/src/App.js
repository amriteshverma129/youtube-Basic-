import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchVideo />,
      },
    ],
    // errorElement: <ErrorComp />,
  },
]);

function App() {
  return (
    <div className="flex flex-col">
      <Head />
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
