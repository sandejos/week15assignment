import React, {useEffect, useState} from "react";
import { Table, Button } from "react-bootstrap";
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Read(){
    const[newData, setNewData] = useState([])
    useEffect(() =>{
        axios.get('https://628037971020d852057abc13.mockapi.io/Crud')
        .then((getData) =>{
            setNewData(getData.data);
        })
    }, [])

    const setID = (id) => {
        console.log(id);
        localStorage.setItem('ID', id)
    }

    const getData = () => {
        axios.get('https://628037971020d852057abc13.mockapi.io/Crud')
        .then((getData) =>{
            setNewData(getData.data);
        })
    }

    const onDelete = (id) =>{
        axios.delete(`https://628037971020d852057abc13.mockapi.io/Crud/${id}`)
        .then(() => {
            getData();
        })
    }
    return(
        <div>
            <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ID</th>
      <th>First Name</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
    
        {newData.map((data) =>{
            return (
                <tr>
                <td>{data.id}</td>
                <td>{data.firstName}</td>
                <td>
                    <Button variant="danger" onClick={() => setID(data.id)}>Update</Button>
                </td>
                <td>
                    <Button variant="warning" onClick={() => onDelete(data.id)}>Delete</Button>
                </td>
                </tr>
            )
        })}
    
  </tbody>
</Table>
        </div>
    )
};
