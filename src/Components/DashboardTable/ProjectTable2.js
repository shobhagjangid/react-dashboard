import React, { useState, useEffect } from 'react';
import { Table, Pagination } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';

export default function ProjectTable2() {
  const [tabData, setTabData] = useState([]); // Store API data
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state
  const [rowsPerPage] = useState(6); // Rows per page
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://zenpex.in/react-dashboard/wp-json/custom/v1/posts?v=123');
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const result = await response.json();

        if (!result || !result.data) throw new Error('Invalid API response');
        
        setTabData(result.data); // Ensure 'data' exists before setting state
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

  // Pagination logic
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = tabData.slice(indexOfFirstRow, indexOfLastRow);

  // Generate pagination items
  const totalPages = Math.ceil(tabData.length / rowsPerPage);
  const paginationItems = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationItems.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => handlePageChange(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <Table hover>
        <thead>
          <tr>
            <th>PROJECT NAME</th>
            <th>TECHNOLOGY</th>
            <th>MEMBERS</th>
            <th>BUDGET</th>
            <th>COMPLETION</th>
          </tr>
        </thead>
        <tbody>
          {currentRows.length > 0 ? (
            currentRows.map((td, index) => (
              <tr key={index}>
                <td>
                  <img
                    src={td?.featured_image || ''}
                    className="img-fluid"
                    alt={td?.title || 'No Title'}
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />{' '}
                  &nbsp; {td?.title || 'No Title'}
                </td>
                <td>{td?.categories?.join(', ') || 'N/A'}</td> {/* Fixed categories */}
                <td>
                  {td?.custom_fields?.assigned_users?.length > 0
                    ? td.custom_fields.assigned_users.map((user) => user.name).join(', ')
                    : 'Unassigned'}
                </td>
                <td>$ {td?.custom_fields?.budget || 'N/A'}</td>
                <td>
                  {td?.custom_fields?.completion || 0}%
                  <ProgressBar
                    now={td?.custom_fields?.completion || 0}
                    label={`${td?.custom_fields?.completion || 0}%`}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No projects available
              </td>
            </tr>
          )}
        </tbody>
      </Table>
      {totalPages > 1 && <Pagination>{paginationItems}</Pagination>}
    </div>
  );
}
