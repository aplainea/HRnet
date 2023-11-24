import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HRNButton from "../../components/HRN-UI/Button/HRNButton";
import HRNTable from "../../components/HRN-UI/Table/HRNTable";
import { Input, Pagination } from "antd";

const { Search } = Input;

export default function CurrentEmployeesPage() {
    const employees = useSelector((state) => state.employees.employees);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(25);

    const pageSizeOptions = ["2", "10", "25", "50", "100"];

    const filterEmployee = (employee) => {
        return Object.values(employee).some((value) =>
            value.toString().toLowerCase().includes(searchText.toLowerCase())
        );
    };

    const handleSearch = (value) => {
        setSearchText(value);
        setCurrentPage(1);
    };

    const handleChangePage = (page, pageSize) => {
        setCurrentPage(page);
        setPageSize(pageSize);
    };

    const columns = [
        {
            title: "First Name",
            dataIndex: "first-name",
            sorter: (a, b) => a["first-name"].localeCompare(b["first-name"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Last Name",
            dataIndex: "last-name",
            sorter: (a, b) => a["last-name"].localeCompare(b["last-name"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Start Date",
            dataIndex: "start-date",
            sorter: (a, b) => a["start-date"].localeCompare(b["start-date"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Department",
            dataIndex: "department",
            sorter: (a, b) => a["department"].localeCompare(b["department"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Date of Birth",
            dataIndex: "date-of-birth",
            sorter: (a, b) =>
                a["date-of-birth"].localeCompare(b["date-of-birth"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Street",
            dataIndex: "street",
            sorter: (a, b) => a["street"].localeCompare(b["street"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "City",
            dataIndex: "city",
            sorter: (a, b) => a["city"].localeCompare(b["city"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "State",
            dataIndex: "state",
            sorter: (a, b) => a["state"].localeCompare(b["state"]),
            sortDirections: ["ascend", "descend"],
        },
        {
            title: "Zip Code",
            dataIndex: "zip-code",
            sorter: (a, b) => a["zip-code"].localeCompare(b["zip-code"]),
            sortDirections: ["ascend", "descend"],
        },
    ];

    const filteredEmployees = employees.filter((employee) =>
        filterEmployee(employee)
    );

    const totalEntries = filteredEmployees.length;
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const paginatedData = filteredEmployees.slice(startIndex, endIndex);

    return (
        <div className="currentemployeespage">
            <div className="container">
                <div className="title-container">
                    <h2>Current Employees</h2>
                    <div className="sub-container">
                        <Link to="/">
                            <HRNButton>Create Employee</HRNButton>
                        </Link>
                        <Search
                            placeholder="Search employees"
                            enterButton
                            className="search"
                            onSearch={handleSearch}
                            onChange={(e) => handleSearch(e.target.value)}
                        />
                    </div>
                </div>

                <HRNTable
                    dataSource={paginatedData}
                    columns={columns}
                    rowKey={(record) => record.id}
                    pagination={false}
                />
                <div className="pagination-container">
                    <div className="pagination-info">
                        Showing {(currentPage - 1) * pageSize + 1} to{" "}
                        {Math.min(currentPage * pageSize, totalEntries)} of{" "}
                        {totalEntries} entries
                    </div>
                    <Pagination
                        current={currentPage}
                        pageSize={pageSize}
                        total={filteredEmployees.length}
                        onChange={handleChangePage}
                        pageSizeOptions={pageSizeOptions}
                        showSizeChanger
                        onShowSizeChange={(current, size) => setPageSize(size)}
                    />
                </div>
            </div>
        </div>
    );
}
