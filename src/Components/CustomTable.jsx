import React, { useState } from "react";
import data from "../../data.json";

const CustomTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 6;
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState(""); // State to manage sort order

  // Filtering the data based on the search query
  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedData = [...filteredData].sort((a, b) => {
        if (sortOrder === 'asc') {
            return a.first_name.localeCompare(b.first_name);
        } else if (sortOrder === 'desc') {
            return b.first_name.localeCompare(a.first_name);
        } else {
            return 0;
        }
    });

  // Apply pagination only after filtering
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortedData.slice(indexOfFirstRow, indexOfLastRow);

  return (
    <div className="max-sm:mx-2 ml-16 mt-16 p-6 max-sm:px-2 px-10 bg-gray-900 rounded-md h-full text-white text-left max-sm:overflow-x-scroll">
      {/* Search Input */}
      <div className="mb-8 flex gap-8 max-sm:gap-3 max-sm:flex-col items-center justify-center w-full">
        <input
          type="text"
          name="search"
          placeholder="Search by First Name"
          className="bg-white rounded-sm p-2 text-gray-900 h-8"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setCurrentPage(1); // Reset to page 1 when searching
          }}
        />

        <div className="flex gap-8 items-center max-sm:gap-3">
            <button className="bg-gray-800 rounded-full py-2 max-sm:text-sm px-4 hover:cursor-pointer" onClick={() => setSortOrder("asc")}>asc</button>
            <button className="bg-gray-800 rounded-full py-2 max-sm:text-sm px-4 hover:cursor-pointer" onClick={() => setSortOrder("desc")}>desc</button>
            <button className="bg-gray-800 rounded-full py-2 max-sm:text-sm px-4 hover:cursor-pointer" onClick={() => setSortOrder("")}>Original</button>
        </div>
      </div>

      {/* Table */}
      <table className="table-auto w-full">
        <thead className="border-b border-gray-700">
          <tr className="text-xl max-sm:text-sm">
            <th className="pr-12 pb-3 max-sm:hidden">Id</th>
            <th className="pr-12 pb-3">First Name</th>
            <th className="pr-12 pb-3">Last Name</th>
            <th className="pr-12 pb-3">Email</th>
            <th className="pb-3">Gender</th>
            <th className="pb-3">Location</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.length > 0 ? (
            currentRows.map((item) => (
              <tr key={item.id} className="max-sm:text-sm">
                <td className="py-3 max-sm:py-2 max-sm:hidden">{item.id}.</td>
                <td className="py-3 max-sm:py-2">{item.first_name}</td>
                <td className="py-3 max-sm:py-2">{item.last_name}</td>
                <td className="pr-6 py-3 max-sm:py-2">{item.email}</td>
                <td className="py-3 pr-6 max-sm:py-2">{item.gender}</td>
                <td className="py-3 max-sm:py-2">{item.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center py-4">
                No results found.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="text-center">
        <button
          className="bg-gray-800 hover:cursor-pointer text-white px-4 py-2 rounded-sm mt-4 mr-4"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-gray-800 hover:cursor-pointer text-white px-4 py-2 rounded-sm mt-4"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastRow >= filteredData.length}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CustomTable;
