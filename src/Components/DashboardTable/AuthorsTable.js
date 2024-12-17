import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AuthorsTable() {
  const [tabData, setTabData] = useState([]); // State to store user data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [rowsPerPage] = useState(6); // Rows to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        const result = await response.json();
        setTabData(result.users); // Store fetched data
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle page change
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

  // Pagination logic: Slice data for current page
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tabData.slice(indexOfFirstRow, indexOfLastRow);

  const editstyle = {
    textDecoration: 'none',
    color: '#718096',
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      <Table hover>
        <thead>
          <tr>
            <th>AUTHOR</th>
            <th>COMPANY</th>
            <th>PHONE NO.</th>
            <th>COUNTRY</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {currentRows.map((td, index) => (
            <tr key={index}>
              <td className="two-box">
                <img
                  src={td.image}
                  className="img-fluid"
                  alt={td.firstName}
                  width={40}
                  height={40}
                />{' '}
                <div className="f-row">
                  {td.firstName} {td.lastName} {td.maidenName}
                </div>
                <div className="s-row">{td.email}</div>
              </td>
              <td>
                <div className="f-row">{td.company.department}</div>
                <div className="s-row">{td.company.title}</div>
              </td>
              <td>{td.phone}</td>
              <td>{td.company.address.country}</td>
              <td>
                <div className="d-flex justify-content-between">
                  {td.Employed}
                  &nbsp;&nbsp;&nbsp;
                  <a style={editstyle}>Edit</a>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination>
        <Pagination.First onClick={() => handlePageChange(1)} />
        <Pagination.Prev
          onClick={() =>
            setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
          }
        />
        {Array.from(
          { length: Math.ceil(tabData.length / rowsPerPage) },
          (_, i) => (
            <Pagination.Item
              key={i + 1}
              active={i + 1 === currentPage}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </Pagination.Item>
          )
        )}
        <Pagination.Next
          onClick={() =>
            setCurrentPage((prev) =>
              prev < Math.ceil(tabData.length / rowsPerPage) ? prev + 1 : prev
            )
          }
        />
        <Pagination.Last
          onClick={() =>
            handlePageChange(Math.ceil(tabData.length / rowsPerPage))
          }
        />
      </Pagination>
    </>
  );
}
