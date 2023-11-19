import { Link } from "react-router-dom";
import { Result } from "antd";
import HRNButton from "../../components/HRN-UI/Button/HRNButton";

export default function ErrorPage({ status, title, subTitle }) {
    return (
        <main className="errorpage">
            <Result
                status={status || "500"}
                title={title || "Oops! Something went wrong."}
                subTitle={
                    subTitle || "Sorry, the page you visited does not exist."
                }
                extra={
                    <Link to="/">
                        <HRNButton type="primary">Back Home</HRNButton>
                    </Link>
                }
            />
        </main>
    );
}
