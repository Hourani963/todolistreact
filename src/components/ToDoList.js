import {React} from 'react';
import FieldNewTach from './FieldNewTach';
import ListTaches from './ListTaches';
import useTaches from '../hooks/useTaches';
import Box from '@mui/material/Box';


export default function ToDoList() {
  const { taches, loading, error, fetchTaches } = useTaches();


  return (
    <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}  >
      <FieldNewTach fetchTaches={fetchTaches}  ></FieldNewTach>
      <ListTaches taches={taches} loading={loading} error={error} fetchTaches={fetchTaches} ></ListTaches>
      </Box>
    );
}
