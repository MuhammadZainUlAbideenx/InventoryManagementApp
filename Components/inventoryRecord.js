import React, { useState } from "react";

const ViewRecord = () => {
  const [data, setData] = useState([
    { id: 1, name: "John Doe", age: 25 },
    { id: 2, name: "Jane Smith", age: 30 },
    { id: 3, name: "Bob Johnson", age: 40 },

    // Add more data as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (column) => {
    if (column === sortColumn) {
      // Toggle sort direction if the same column is clicked again
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc"
      );
    } else {
      // Set the new sort column and reset sort direction
      setSortColumn(column);
      setSortDirection("asc");
    }
  };

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedData = filteredData.sort((a, b) => {
    if (sortColumn && sortDirection) {
      const aValue = a[sortColumn];
      const bValue = b[sortColumn];

      if (sortDirection === "asc") {
        return aValue.localeCompare(bValue);
      } else {
        return bValue.localeCompare(aValue);
      }
    }

    return 0;
  });

  return (
    <div className="container">
      <h1 style={{ margin: "auto" }} className="display-4">
        View Record
      </h1>
      <input
        style={{ margin: "20px 0px 20px 0px", width: "200px" }}
        className="form-control"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
      />

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th onClick={() => handleSort("name")}>
              Name{" "}
              {sortColumn === "name" && (
                <i
                  className={`fas fa-sort-${
                    sortDirection === "asc" ? "up" : "down"
                  }`}
                ></i>
              )}
            </th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item, x) => (
            <tr key={item.id}>
              <td>{x + 1}</td>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewRecord;
