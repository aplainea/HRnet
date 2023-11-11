import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/scss/main.scss";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import HomePage from "./pages/HomePage/HomePage";
import CreateEmployeesPage from "./pages/CreateEmployeesPage/CreateEmployeesPage";
import CurrentEmployeesPage from "./pages/CurrentEmployeesPage/CurrentEmployeesPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "create-employees",
                element: <CreateEmployeesPage />,
            },
            {
                path: "current-employees",
                element: <CurrentEmployeesPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

reportWebVitals();
