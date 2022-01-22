import React, { useState, useEffect } from "react";
import axios from "axios";
import { Formik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import {
  Card,
  Container,
  Button,
  Form,
  Row,
  Col,
  Alert,
  
} from "react-bootstrap";
import { USERS_DATA } from "../common/Urls";
import { Link, useParams } from "react-router-dom";

const Edit = () => {
  const param = useParams();
  const [currentUser, setCurrentUser] = useState([]);
  useEffect(() => {
    const featchData = async () => {
      const data = await axios.get(USERS_DATA + "/" + param.id);
      setCurrentUser(data.data);
    };
    featchData();
  }, []);

  return (
    <Container>
         <Link to='/' className="btn btn-secondary m-2">
        back
        </Link>
      <Formik
        enableReinitialize={true}
        initialValues={currentUser}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name is Required";
          }
          if (!values.age) {
            errors.age = "Age is Required";
          }
          if (!values.email) {
            errors.email = "Email is Required";
          }
          if (!values.phone) {
            errors.phone = "Phone is Required";
          }
          if (!values.city) {
            errors.city = "City is Required";
          }

          return errors;
        }}
        onSubmit={(values) => {
          axios.put(USERS_DATA + "/" + param.id, values);
          toast("user Edited successfully ✔");
        }}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <Card className="text-center">
            <Card.Header>
              <h3>Edit User : {currentUser.name}</h3>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md="5">
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.name}
                        placeholder="Enter Name"
                      />
                      {errors.name && touched.name ? (
                        <Alert variant="danger" className="m-2">
                          {errors.name}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="7">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        name="email"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="email"
                        value={values.email}
                        placeholder="Enter email"
                      />
                      {errors.email && touched.email ? (
                        <Alert variant="danger" className="m-2">
                          {errors.email}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md="4">
                    <Form.Group className="mb-3">
                      <Form.Label>Age</Form.Label>
                      <Form.Control
                        onBlur={handleBlur}
                        name="age"
                        onChange={handleChange}
                        type="number"
                        value={values.age}
                        placeholder="Enter Age"
                      />
                      {errors.age && touched.age ? (
                        <Alert variant="danger" className="m-2">
                          {errors.age}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="8">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        name="phone"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        type="text"
                        value={values.phone}
                        placeholder="Enter Phone"
                      />
                      {errors.phone && touched.phone ? (
                        <Alert variant="danger" className="m-2">
                          {errors.phone}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Row>
                <Row>
                  <Col md="4">
                    <Form.Group className="mb-3">
                      <Form.Label>City</Form.Label>
                      <Form.Control
                        name="city"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.city}
                        type="text"
                        placeholder="Enter City"
                      />
                      {errors.city && touched.city ? (
                        <Alert variant="danger" className="m-2">
                          {errors.city}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                  <Col md="8">
                    <Form.Group className="mb-3">
                      <Form.Label>About</Form.Label>
                      <Form.Control
                        name="about"
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.about}
                        as="textarea"
                        rows={3}
                      ></Form.Control>
                      {errors.about && touched.about ? (
                        <Alert variant="danger" className="m-2">
                          {errors.about}
                        </Alert>
                      ) : (
                        ""
                      )}
                    </Form.Group>
                  </Col>
                </Row>

                <Button variant="primary" type="submit">
                  Edit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        )}
      </Formik>
       
          <ToastContainer />
    </Container>
  );
};

export default Edit;
