import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import Homepage from "./Pages/HomePage";
import Mainlayout from "./Components/Layout/Mainlayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPAge";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout></Mainlayout>}>
      <Route index element={<Homepage />}></Route>
      <Route path="/jobs" element={<JobsPage />}></Route>
      <Route path="*" element={<NotFoundPage />}></Route>
    </Route>,
  ),
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
