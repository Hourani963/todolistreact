import React from 'react'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


export default function DeleteTacheButton({ id, fetchTaches }) {

    const deleteTach = async ()=>{
        try{
            const response = await fetch(`http://localhost:8080/api/tache/delete/${id}`, {
                method : "DELETE",
                headers :{
                    "Content-Type":"application/json",                   }
            })
           
            console.log(response)
            fetchTaches()
        }
        catch (error) {
            console.error('Error:', error);
        }
    }

  return (
    <IconButton color="error"  onClick={deleteTach} variant="contained"><DeleteIcon fontSize="inherit" /></IconButton >
  )
}
