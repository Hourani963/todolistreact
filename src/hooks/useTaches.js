import { useState, useEffect } from 'react';

export default function useTaches() {
  const [taches, setTaches] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchTaches = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('http://localhost:8080/api/tache/getAll', {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*"
        }
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();
      setTaches(data);
      console.log('Fetched data:', data);
    } catch (err) {
      console.error('Fetching error:', err);
      setError(`Failed to fetch taches: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTaches();
  }, []);

  return { taches, loading, error, fetchTaches };
}
