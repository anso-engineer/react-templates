import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableManagement from "./components/table-management/tableManagement.jsx";

function App() {

    const users = [
        { id: 1, name: "Jose", role: "Admin" },
        { id: 2, name: "Yuana", role: "User" },
    ];

    const columnWidths = ["50px", "350px", "240px"];

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
              columnWidths={columnWidths}  // Pass the column widths here

          />

      </div>

    </>
  )
}

export default App
