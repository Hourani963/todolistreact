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
      month: 'long',
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
    <div>
      <h1>Taches List</h1>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {taches.map((tache) => (
          <ListItem
            key={tache.id}

            disablePadding
          >
             <ListItemIcon>
                <CheckBoxTache
                  tache={tache} fetchTaches={fetchTaches}
                 
                />
              </ListItemIcon>
           <ListItemText id={tache.id} primary={tache.text} />
           <ListItemText id={tache.id} primary={tache.importance} />
            <ListItemText id={tache.id} primary={formatDate(tache.creationDate)} />
            {tache.doneDate && 
            <ListItemText id={tache.id} primary={formatDate(tache.doneDate)} />
            }
              
              <DeleteTacheButton id={tache.id} fetchTaches={fetchTaches}></DeleteTacheButton>
            
          </ListItem>
            
          ))}
      </List>
      
        
 
    </div>
  );
}
