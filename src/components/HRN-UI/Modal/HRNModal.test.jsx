import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import HRNModal from "./HRNModal";

describe("HRNModal", () => {
    const titleText = "Test Modal";
    const mainContentText = "This is the main content";
    const footerContentText = "This is the footer content";

    test("renders HRNModal correctly with visible modal", () => {
        render(
            <HRNModal
                show={true}
                close={() => {}}
                title={titleText}
                mainContent={mainContentText}
                footerContent={footerContentText}
            />
        );

        // Check if modal is visible
        const modalContainer = screen.getByTestId("modal-container");
        expect(modalContainer).toHaveClass("show");

        // Check if modal title, main content, and footer content are rendered
        expect(screen.getByText(titleText)).toBeInTheDocument();
        expect(screen.getByText(mainContentText)).toBeInTheDocument();
        expect(screen.getByText(footerContentText)).toBeInTheDocument();
    });

    test("does not render HRNModal when show is false", () => {
        render(
            <HRNModal
                show={false}
                close={() => {}}
                title={titleText}
                mainContent={mainContentText}
                footerContent={footerContentText}
            />
        );

        // Check if modal is not visible
        const modalContainer = screen.getByTestId("modal-container");
        expect(modalContainer).not.toHaveClass("show");
    });

    test("calls close function when clicking outside the modal", () => {
        const mockClose = jest.fn();
        render(
            <HRNModal
                show={true}
                close={mockClose}
                title={titleText}
                mainContent={mainContentText}
                footerContent={footerContentText}
            />
        );

        // Click outside the modal
        const modalContainer = screen.getByTestId("modal-container");
        fireEvent.click(modalContainer);

        // Check if close function is called
        expect(mockClose).toHaveBeenCalledTimes(1);
    });

    test("calls close function when clicking the close button", () => {
        const mockClose = jest.fn();
        render(
            <HRNModal
                show={true}
                close={mockClose}
                title={titleText}
                mainContent={mainContentText}
                footerContent={footerContentText}
            />
        );

        // Click the close button
        const closeButton = screen.getByRole("button", { name: /close/i });
        fireEvent.click(closeButton);

        // Check if close function is called
        expect(mockClose).toHaveBeenCalledTimes(1);
    });
});
