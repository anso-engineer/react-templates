import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Form, InputGroup } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./talbeManagement.css";

/**
 * Generic table management component.
 *
 * Props:
 * - tableObj: array of objects to render
 * - addHandler: function to call when Add is clicked
 * - editHandler: function to call with the row object to edit
 * - removeHandler: function to call with the row object to delete
 * - isFilter: boolean to enable text filter
 * - filterFields: array of string field names to filter by
 * - columnWidths: array of column widths to apply
 */
function TableManagement({
                             tableObj,
                             addHandler,
                             editHandler,
                             removeHandler,
                             isFilter = false,
                             filterFields = [],
                             columnWidths = [],  // Added column widths as a prop
                         }) {
    const [filterText, setFilterText] = useState("");

    // Filter data based on filterFields and filterText
    const filteredData = isFilter && filterText
        ? tableObj.filter((item) =>
            filterFields.some((field) =>
                item[field]?.toString().toLowerCase().includes(filterText.toLowerCase())
            )
        )
        : tableObj;

    if (!Array.isArray(tableObj) || tableObj.length === 0) {
        return <div className="p-3">No data available.</div>;
    }

    // Generate column definitions with optional column width
    const baseColumns = Object.keys(tableObj[0]).map((key, index) => ({
        name: key.toUpperCase(),
        selector: (row) => row[key],
        sortable: true,
        wrap: true,
        style: columnWidths[index] ? { minWidth: columnWidths[index], maxWidth: columnWidths[index] } : {},
    }));

    // Action column if edit/delete available
    const actionsColumn = {
        name: "Actions",
        cell: (row) => (
            <div className="d-flex gap-2">
                {editHandler && (
                    <Button
                        className="action-button"
                        variant="outline-primary"
                        size="sm"
                        onClick={() => editHandler(row)}
                    >
                        <i className="bi bi-pencil"></i>
                    </Button>
                )}
                {removeHandler && (
                    <Button
                        className="action-button"
                        variant="danger"
                        size="sm"
                        onClick={() => removeHandler(row)}
                    >
                        <i className="bi bi-trash"></i>
                    </Button>
                )}
            </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
    };

    const columns = [...baseColumns];
    if (editHandler || removeHandler) {
        columns.push(actionsColumn);
    }

    return (
        <div className="p-4 table-outline">
            <div className="d-flex justify-content-between align-items-center mb-3">
                {isFilter && (
                    <InputGroup style={{ maxWidth: "300px" }}>
                        <Form.Control
                            placeholder="Filter..."
                            value={filterText}
                            onChange={(e) => setFilterText(e.target.value)}
                        />
                    </InputGroup>
                )}

                {addHandler && (
                    <Button style={{width: "40px", height: "40px", marginRight: "15px"}} variant="success" onClick={addHandler}>
                        <i className="bi bi-plus"></i>
                    </Button>
                )}
            </div>

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
                highlightOnHover
                dense
                customStyles={{
                    headCells: {
                        style: {
                            minWidth: "100px",  // You can define a base width for header cells
                            maxWidth: "200px",
                        },
                    },
                    cells: {
                        style: {
                            minWidth: "100px",  // You can define a base width for data cells
                            maxWidth: "200px",
                        },
                    },
                }}
            />
        </div>
    );
}

export default TableManagement;
