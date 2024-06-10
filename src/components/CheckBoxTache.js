import React from 'react';
import Checkbox from '@mui/material/Checkbox';

export default function CheckBoxTache({ tache, fetchTaches }) {
  const handleCheckBox = async () => {
    let url = `http://localhost:8080/api/tache/check/${tache.id}`;
    if (tache.done) {
      url = `http://localhost:8080/api/tache/uncheck/${tache.id}`;
    }

    try {
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: tache.id }) // Assuming the API needs the task ID in the request body
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      fetchTaches(); // Re-fetch the list of tasks
    } catch (error) {
      console.error('Error updating task status:', error);
    }
  };

  return (
    <Checkbox checked={tache.done} onChange={handleCheckBox} />
  );
}
