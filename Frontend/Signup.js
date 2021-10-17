import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router-dom";
import axios from 'axios';

export default function Signup() {
  const [firstname, setfirstname] = useState("");
  const [lastname, setlastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const history = useHistory();
  function validateForm() {
    return firstname.length > 0 && email.length > 0 && password.length > 0 && mobile.length === 10 && lastname.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const users = { firstname, lastname, mobile, email, password };
    axios({
      method: 'post',
      url: 'http://localhost:8080/signUp',
      data: users
    }).then(function (response) {

      alert("User Registered");
      history.push("/Login");
    }).catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div className="signup row text-right">
      <Form onSubmit={handleSubmit} >
        <div>
          <Form.Group size="lg" controlId="firstname" >
            <Form.Label> Firstname </Form.Label>
            <Form.Control
              autoFocus
              type="text"
              value={firstname}
              placeholder="Enter Firstname"
              onChange={(e) => setfirstname(e.target.value)}
            />
          </Form.Group>
        </div >
        <br />
        <div>
          <Form.Group size="lg" controlId="lastname" >
            <Form.Label> Lastname </Form.Label>
            <Form.Control
              type="text"
              value={lastname}
              placeholder="Enter Lastname"
              onChange={(e) => setlastname(e.target.value)}
            />
          </Form.Group>
        </div >
        <br />
        <div>
          <Form.Group size="lg" controlId="email">
            <Form.Label> Email </Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
        </div>
        <br />
        <div>
          <Form.Group size="lg" controlId="password">
            <Form.Label> Password </Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
        </div>
        <br />
        <div>
          <Form.Group size="lg" controlId="mobile" >
            <Form.Label> Mobile </Form.Label>
            <Form.Control
              type="number"
              value={mobile}
              placeholder="Enter Mobile Number"
              onChange={(e) => setMobile(e.target.value)}
            />
          </Form.Group>
        </div>
        <br></br>
        <div>
          <Button block size="lg" type="submit" disabled={!validateForm()} >
            Signup
          </Button>
        </div>

      </Form>
    </div>
  );
}