import { useState, useEffect } from "react";
import { ConfigProvider, theme } from "antd";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import AppHeader from "./components/Header/Header";

const { defaultAlgorithm, darkAlgorithm } = theme;

export default function App() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        const body = document.body;
        body.classList.toggle("dark-theme", isDarkTheme);
        body.classList.toggle("light-theme", !isDarkTheme);
    }, [isDarkTheme]);

    return (
        <>
            <ConfigProvider
                theme={{
                    algorithm: isDarkTheme ? darkAlgorithm : defaultAlgorithm,
                    token: {
                        colorPrimary: isDarkTheme
                            ? "rgba(38, 166, 154, 1)"
                            : "rgba(0, 108, 117, 1)",
                    },
                }}
            >
                <Provider store={store}>
                    <AppHeader
                        isDarkTheme={isDarkTheme}
                        toggleTheme={toggleTheme}
                    />
                    <main className="main">
                        <Outlet />
                    </main>
                </Provider>
            </ConfigProvider>
        </>
    );
}
