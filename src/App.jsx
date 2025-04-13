import { useState } from 'react';
import './App.css';
import TableManagement from "./components/table-management/TableManagement.jsx";

function App() {
    const users = [
        { id: 1, name: "Jose", role: "Admin" },
        { id: 2, name: "Yuana", role: "User" },
        { id: 3, name: "Christina", role: "User" },
    ];

    // Define column configurations with at least 30px width for each column
    const columnConfigs = [
        {
            name: 'id',
            width: '60px', // Single width for id column
        },
        {
            name: 'name',
            width: '300px', // Single width for name column
        },
        {
            name: 'role',
            width: '280px', // Single width for role column
        },
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
                    columnConfigs={columnConfigs} // Pass custom column configurations here
                />
            </div>
        </>
    );
}

export default App;
