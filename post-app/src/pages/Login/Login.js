import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { Form, Button, Container, Row, Col } from "react-bootstrap";
import styles from "./LoginStyle.module.css";
import { login } from "../../store/actions/user/userActions";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: null,
    password: null,
  });

  const handleSubmit = () => {
    const { email, password } = values;

    setErrors({
      email: email ? null : "Email is required",
      password: password ? null : "Password is required",
    });

    if (email && password) {
      dispatch(login(values, navigate));
    }
  };

  const handleChange = ({ target: { name, value } }) => {
    setValues({
      ...values,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: null,
    });
  };

  return (
    <div className={styles.main}>
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
            <Form>
              <h3 className={styles.heading}>Login</h3>
              <Form.Group>
                <Form.Control
                  className={errors.email ? styles.invalid : ""}
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={values.email}
                  onChange={handleChange}
                />
                {<Form.Text className="text-danger">{errors.email}</Form.Text>}
              </Form.Group>

              <Form.Group className={styles.formGroup}>
                <Form.Control
                  className={errors.password ? styles.invalid : ""}
                  type="password"
                  placeholder="Password"
                  value={values.password}
                  onChange={handleChange}
                  name="password"
                />
                {
                  <Form.Text className="text-danger">
                    {errors.password}
                  </Form.Text>
                }
              </Form.Group>

              <div className={styles.submitContainer}>
                <Button variant="primary" onClick={handleSubmit}>
                  Login
                </Button>
                <Link to="/register">
                  <Button variant="success">Create An Account</Button>
                </Link>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
