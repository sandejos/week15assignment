import React, {useState, useEffect} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Update(){
    const[firstName, setFirstName] = useState('')
    const [ID, setID] = useState(null);
    console.log(firstName);

    const sendDataAPI = () => {
        axios.put(`https://628037971020d852057abc13.mockapi.io/Crud/${ID}`,{
            firstName,
        })
    }

    useEffect(() =>{
        setFirstName(localStorage.getItem('firstName'))
        setID(localStorage.getItem('ID'))
    }, [])
    return(
        <div>
            <h2>UPDATE HERE</h2>
            <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control value={firstName} name="name" onChange={(e) => setFirstName(e.target.value)}type="text" placeholder="Name" />
            <Button variant="primary" onClick={sendDataAPI} type="submit">
                 Update
            </Button>
            </Form>
        </div>
    )
}