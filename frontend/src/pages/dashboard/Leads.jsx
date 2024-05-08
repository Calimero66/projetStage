import React, { useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Papa from 'papaparse'; // You need to install Papaparse to parse CSV files
import { saveAs } from 'file-saver'; // You need to install file-saver to save files

function ColumnDropdown({ label, value, onChange, columns }) {
  return (
    <div className=' bg-slate-600 text-center '>
      <label className="block mb-1 text-sky-300">{label}:</label>
      <select value={value} onChange={onChange} className="w-full text-center mt-1">
        <option value="">Select column</option>
        {columns.map((column, index) => (
          <option key={index} value={column}>{column}</option>
        ))}
      </select>
    </div>
  );
}


export function Leads() {
  const [csvData, setCsvData] = useState([]);
  const [idColumn, setIdColumn] = useState("");
  const [fNameColumn, setFNameColumn] = useState("");
  const [numberColumn, setNumberColumn] = useState("");
  const [dateColumn, setDateColumn] = useState("");
  const [tableData, setTableData] = useState([]);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const csv = reader.result;
      const results = Papa.parse(csv, { header: true });
      setCsvData(results.data);
    };

    reader.readAsText(file);
  };

  const handleGenerateTable = () => {
    // Filter out empty selections
    const selectedColumns = [idColumn, fNameColumn, numberColumn, dateColumn].filter(column => column !== "");
    // Extract data for selected columns
    const selectedData = csvData.map(row => {
      return selectedColumns.map(column => row[column]);
    });
    setTableData(selectedData);
  };

  const handleSaveCSV = () => {
    // Custom header row
    const customHeaderRow = ['ID', 'FName', 'Number', 'Date'];

    // Combine custom header row with table data
    const csvDataWithHeader = [
      customHeaderRow,
      ...tableData
    ];

    // Generate CSV with custom header
    const csv = Papa.unparse(csvDataWithHeader, { header: false }); // Disable automatic header
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
    saveAs(blob, 'table_data.csv');
  };
  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Import your file CSV
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          <input type="file" onChange={handleFileUpload} className="mb-4" />

          <div className="grid grid-cols-2 gap-4 mb-4">
            {/* ID */}
            <ColumnDropdown
              label="ID"
              value={idColumn}
              onChange={(e) => setIdColumn(e.target.value)}
              columns={Object.keys(csvData[0] || {})}
            />
            {/* F Name */}
            <ColumnDropdown
              label="F Name"
              value={fNameColumn}
              onChange={(e) => setFNameColumn(e.target.value)}
              columns={Object.keys(csvData[0] || {})}
            />
            {/* Number */}
            <ColumnDropdown
              label="Number"
              value={numberColumn}
              onChange={(e) => setNumberColumn(e.target.value)}
              columns={Object.keys(csvData[0] || {})}
            />
            {/* Date */}
            <ColumnDropdown
              label="Date"
              value={dateColumn}
              onChange={(e) => setDateColumn(e.target.value)}
              columns={Object.keys(csvData[0] || {})}
            />
          </div>
          {/* Button to generate table */}
          <button onClick={handleGenerateTable} disabled={!idColumn || !fNameColumn || !numberColumn || !dateColumn} className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed">Generate Table</button>

          {/* Button to save CSV */}
          <button onClick={handleSaveCSV} disabled={tableData.length === 0} className="bg-green-500 text-white px-4 py-2 rounded mt-4">Save as CSV</button>

        </CardBody>
      </Card>
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
          Leads
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {/* Render table */}
          {tableData.length > 0 && (
            <table className='w-full mt-4'>
              <thead>
                <tr>
                  <th className=' py-1'>ID</th>
                  <th className=' py-1'>FName</th>
                  <th className=' py-1'>Number</th>
                  <th className=' py-1'>Date</th>
                </tr>
              </thead>
              <tbody className=' text-center  '>
                {tableData.map((row, rowIndex) => (
                  <tr key={rowIndex} className=''>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className=' px-4 py-1'>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          )}

        </CardBody>
      </Card>
    </div>
  );
}

export default Leads;
