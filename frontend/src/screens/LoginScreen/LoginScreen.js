import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import MainScreen from "../../components/MainScreen";

import "./LoginScreen.css";

const LoginScreen = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
 
  const submitHandler = async (e) => {
    console.log("handler");
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "/api/users/login",
        {
          email,
          password,
        },
        config
      );
      console.log(data);

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
    setLoading(false);
  };

  return (
    <MainScreen title="LOGIN">
      <div className="login-container">
        {error && <ErrorMessage variant="danger"> {error} </ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Row className="py-3">
          <Col> 
            <Button
              className="my-2"
              variant="primary"
              type="submit"
              onClick={submitHandler}
            >
            Submit
            </Button>
            </Col>
            <Col >
              New Customer ? <Link to="/register" 
              style={{
                color:"blue",
                margin:"5px",
              }}> Register Here</Link>
            </Col>
          </Row>
        </Form>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;