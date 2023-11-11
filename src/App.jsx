import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function App() {
    return (
        <>
            <Provider store={store}>
                <main className="main">
                    <Outlet />
                </main>
            </Provider>
        </>
    );
}
