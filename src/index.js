import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import "./styles/scss/main.scss";
import App from "./App";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import CreateEmployeesPage from "./pages/CreateEmployeesPage/CreateEmployeesPage";
import CurrentEmployeesPage from "./pages/CurrentEmployeesPage/CurrentEmployeesPage";

const router = createHashRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <CreateEmployeesPage />,
            },
            {
                path: "current-employees",
                element: <CurrentEmployeesPage />,
            },
            {
                path: "*",
                element: <ErrorPage status="404" />,
            },
        ],
        catch: ({ status }) => <ErrorPage status={status || "500"} />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);

reportWebVitals();
