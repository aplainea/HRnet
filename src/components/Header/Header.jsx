import { Link } from "react-router-dom";
import { Layout, Typography, Switch } from "antd";
import companyLogo from "../../assets/logo-wealth-health.png";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = ({ isDarkTheme, toggleTheme }) => (
    <Header className="app-header">
        <div className="header-content">
            <img
                src={companyLogo}
                width="60"
                height="55.5"
                alt="Wealth Health Logo"
            />
            <div className="company-info">
                <Title level={3} className="company-name">
                    <Link to="/">Wealth Health - HRNet</Link>
                </Title>
            </div>
            <div style={{ marginLeft: "auto" }}>
                <span className="label-theme">
                    {isDarkTheme ? "Dark Theme" : "Light Theme"}
                </span>
                <Switch
                    checked={isDarkTheme}
                    onChange={toggleTheme}
                    style={{ marginLeft: "8px" }}
                />
            </div>
        </div>
    </Header>
);

export default AppHeader;
