import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({
    username: '',
    image: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios.post('http://localhost:5000/users', user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div class="d-flex flex-column min-vh-100 justify-content-center align-items-center bg-gray">
      <Form className="w-50 border border-secondary p-3">
        <center>
          <h1>SIGNUP</h1>
        </center>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Username</Form.Label>
          <Form.Control
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" placeholder="Image" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
