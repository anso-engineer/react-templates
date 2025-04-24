import { useState } from 'react';
import './App.css';
import TableManagement from "./components/table-management/TableManagement.jsx";

function App() {
    const users = [
        { id: 1, name: "Jose", role: "Admin", email: "jose@example.com", status: "Active", createdAt: "2023-04-01" },
        { id: 2, name: "Yuana", role: "User", email: "yuana@example.com", status: "Inactive", createdAt: "2022-12-15" },
        { id: 3, name: "Christina", role: "User", email: "christina@example.com", status: "Pending", createdAt: "2023-01-10" },
    ];

    const handleRowDoubleClick = (row) => {
        console.log("Double-clicked row: ", row);
    };

    // Define column configurations with at least 30px width for each column
    const columnConfigs = [
        { name: 'id', width: '60px' },
        { name: 'name', width: '250px' },
        { name: 'role', width: '200px' },
        { name: 'email', width: '200px' },
        { name: 'status', width: '170px' },
        { name: 'createdAt', width: '160px' },
    ];

    return (
        <>
            <div>
                <TableManagement
                    tableObj={users}
                    addHandler={() => console.log("Add")}
                    editHandler={(item) => console.log("Edit", item)}
                    removeHandler={(item) => console.log("Remove", item)}
                    isFilter={true}
                    filterFields={["name", "role"]}
                    doubleClickHandler={handleRowDoubleClick}
                    columnConfigs={columnConfigs}
                    excludedFields={["role", "email"]}
                />
            </div>
        </>
    );
}

export default App;
