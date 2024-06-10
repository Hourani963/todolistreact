import {React, useState} from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

export default function FieldNewTach({fetchTaches }) {
    const [text, setText] = useState('')
    const [importance, setImportance] = useState(0)
    const [postRespons, setPostResponse] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const data = { text, importance };
        try {
          const response = await fetch('http://localhost:8080/api/tache/addNew', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          const result = await response;
            setPostResponse(result);
            fetchTaches()
            setText("")
            setImportance(0)
        } catch (error) {
          console.error('Error:', error);
        }
      };

  return (
    <form onSubmit={handleSubmit} style={{display:'flex', alignItems:"center", gap:"20px", justifyContent:"center"}} >
        <TextField style={{width:"400px"}}
        value={text} onChange={(e)=>setText(e.target.value)}  id="filled-basic" label="Text tâche" variant="filled" />
        <TextField style={{width:"100px"}}
            select 
            value={importance} 
            onChange={(e)=>setImportance(e.target.value)} 
            id='importance' 
            label="Importance" 
            variant="filled"
            SelectProps={{
                native: true,
            }} 
        >
            {[0,1,2,3].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </TextField>

        <Button type='submit' value="submit" variant="contained" color="success">
            Add
        </Button>
    </form>
  )
}
