import {React} from 'react';
import FieldNewTach from './FieldNewTach';
import ListTaches from './ListTaches';
import useTaches from '../hooks/useTaches';

export default function ToDoList() {
  const { taches, loading, error, fetchTaches } = useTaches();


  return (
    <div>
      <FieldNewTach fetchTaches={fetchTaches}  ></FieldNewTach>
      <ListTaches taches={taches} loading={loading} error={error} fetchTaches={fetchTaches} ></ListTaches>
    </div>
  );
}
