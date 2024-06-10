import React, { useState } from 'react';
import DeleteTacheButton from './DeleteTacheButton';
import CheckBoxTache from './CheckBoxTache';
import Pagination from '@mui/material/Pagination';

export default function ListTaches({ taches, loading, error, fetchTaches }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const formatDate = (isoString) => {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    };
    const date = new Date(isoString);
    return date.toLocaleDateString('fr-FR', options);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = taches.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div style={{ width: '100%', marginTop: "5%", display:'flex', flexDirection:"column", alignItems:"center" }}>
      <table style={{ width: '100%' }}>
        <caption style={{marginBottom : "20px"}} >Taches List</caption>
        <thead>
          <tr>
            <th scope="col">Check</th>
            <th scope="col">Text</th>
            <th scope="col">Importance</th>
            <th scope="col">Date Creation</th>
            <th scope="col">Date Validation</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((tache) => (
            <tr key={tache.id}>
              <th scope="row"><CheckBoxTache tache={tache} fetchTaches={fetchTaches} /></th>
              <td>{tache.text}</td>
              <td>{tache.importance}</td>
              <td>{formatDate(tache.creationDate)}</td>
              <td>{tache.doneDate && <>{formatDate(tache.doneDate)}</>}</td>
              <td><DeleteTacheButton id={tache.id} fetchTaches={fetchTaches} /></td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination 
        count={Math.ceil(taches.length / itemsPerPage)} 
        page={currentPage} 
        onChange={handlePageChange} 
        variant="outlined" 
        style={{ marginTop: '20px' }}
      />
    </div>
  );
}
