import { NavLink } from "react-router-dom";

export default function ErrorPage() {
    return (
        <main className="errorpage">
            <h1>Page not found</h1>
            <NavLink to="/">Return to home page</NavLink>
        </main>
    );
}
