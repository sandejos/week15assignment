import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

export default function Create(){
    const[firstName, setFirstName] = useState('')

    console.log(firstName);

    const sendDataAPI = () => {
        axios.post('https://628037971020d852057abc13.mockapi.io/Crud',{
            firstName,
        })
    }
    return(
        <div>
            <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control name="name" onChange={(e) => setFirstName(e.target.value)}type="text" placeholder="Name" />
            <Button variant="primary" onClick={sendDataAPI} type="submit">
                 Create
            </Button>
            </Form>
        </div>
    )
}