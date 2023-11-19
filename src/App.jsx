import { ConfigProvider } from "antd";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppHeader from "./components/Header/Header";

export default function App() {
    return (
        <>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "rgba(0, 108, 117, 1)",
                    },
                }}
            >
                <Provider store={store}>
                    <AppHeader />
                    <main className="main">
                        <Outlet />
                    </main>
                </Provider>
            </ConfigProvider>
        </>
    );
}
