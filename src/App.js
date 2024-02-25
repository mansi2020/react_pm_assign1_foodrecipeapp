import "./App.css";

// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// pages
import {
  HomePage,
  MealDetailsPage,
  ErrorPage,
  CategoryPage,
} from "./pages/index";
// components
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  // router data
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Header />
          <Sidebar />
          <HomePage />
        </>
      ),
    },

    {
      path: "/meal/:id",
      element: (
        <>
          <Header />
          <Sidebar />
          <MealDetailsPage />
        </>
      ),
    },
    {
      path: "/meal/category/:name",
      element: <CategoryPage />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
