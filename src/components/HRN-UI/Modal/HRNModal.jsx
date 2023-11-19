import { createPortal } from "react-dom";
import CloseIcon from "../../../assets/times-solid.svg";

const HRNModal = ({ show, close, title, mainContent, footerContent }) => {
    return createPortal(
        <>
            <div
                className={`modalContainer ${show ? "show" : ""} `}
                onClick={() => close()}
            >
                <div className="modal" onClick={(e) => e.stopPropagation()}>
                    <header className="modal_header">
                        <h2 className="modal_header-title">{title}</h2>
                        <button className="close" onClick={() => close()}>
                            <img src={CloseIcon} alt="close" />
                        </button>
                    </header>
                    <main className="modal_content">{mainContent}</main>
                    <footer className="modal_footer">{footerContent}</footer>
                </div>
            </div>
        </>,
        document.body
    );
};

export default HRNModal;
