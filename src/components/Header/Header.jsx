import { Link } from "react-router-dom";
import { Layout, Typography } from "antd";
import companyLogo from "../../assets/logo-wealth-health.png";

const { Header } = Layout;
const { Title } = Typography;

const AppHeader = () => (
    <Header className="app-header">
        <div className="header-content">
            <img src={companyLogo} alt="Wealth Health Logo" />
            <div className="company-info">
                <Title level={3} className="company-name">
                    <Link to="/">Wealth Health - HRNet</Link>
                </Title>
            </div>
        </div>
    </Header>
);

export default AppHeader;
