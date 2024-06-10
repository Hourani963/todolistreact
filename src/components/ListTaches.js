import {React} from 'react';
import DeleteTacheButton from './DeleteTacheButton';
import CheckBoxTache from './CheckBoxTache';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';



export default function ListTaches({ taches, loading, error, fetchTaches }) {
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

  return (
      <table style={{ width: '100%', marginTop:"5%" }}>
          <caption>
          Taches List
          </caption>
          <tr>
            <th scope="col">Check</th>
            <th scope="col">Text</th>
            <th scope="col">Importance</th>
            <th scope="col">Date Creaction</th>
            <th scope="col">Date Validation</th>
            <th scope="col">Delete</th>
          </tr>

        {taches.map((tache) => (
            <tr key={tache.id}>
              <th scope="row"><CheckBoxTache tache={tache} fetchTaches={fetchTaches} /></th>
              <td >{tache.text}</td>
              <td>{tache.importance}</td>
              <td>{formatDate(tache.creationDate)}</td>
              
              <td>{tache.doneDate && <ListItemText id={tache.id} primary={formatDate(tache.doneDate)} />}</td>
              <td><DeleteTacheButton id={tache.id} fetchTaches={fetchTaches}></DeleteTacheButton></td>
            </tr>
          ))}
      </table>
  );
}
