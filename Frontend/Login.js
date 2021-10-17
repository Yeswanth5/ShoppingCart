import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(event) {
    event.preventDefault();
    const users = { email, password };
    axios({
      method: 'post',
      url: 'http://localhost:8080/signin',
      data: users
    })      .then(function (response) {
        if (response.data === 'SUCCESS') {
          history.push("/Items");
        }        else {
          alert("user not found");
          history.push("/Signup");
        }      })
      .catch(function (error) {
        console.log(error);
      });
    }
    

    return (
      <div className="login row">
        <Form className="a" onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <p>
              <Form.Control
                autoFocus
                type="email"
                value={email}
                placeholder="enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </p>
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label><p>
              <Form.Control
                type="password"
                value={password}
                placeholder="enter password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </p>
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()} >
            Login
          </Button>
        </Form>
      </div>
    );
  }
