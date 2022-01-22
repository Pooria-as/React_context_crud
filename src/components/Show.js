import axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Container, Table } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { Oval } from "react-loader-spinner";
import { USERS_DATA } from "../common/Urls";

const Show = () => {
  let params = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await axios.get(USERS_DATA + "/" + params.id);
      setUser(data.data);
      setLoading(false);
    };
    getData();
  }, []);

  if (loading)
    return (
      <div className="container d-flex justify-content-center">
        <Oval color="#000000" height={200} width={200} />
      </div>
    );
  return (
    <Container>
      <Link to='/' className="btn btn-secondary m-2">
        back
        </Link>
        
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>email</th>
            <th>phone</th>
            <th>city</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.name}</td>
            <td>{user.age}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.city}</td>
          </tr>
        </tbody>
      </Table>
      {user.about ? (
        <Alert variant="primary">
          <p>About {user.name} : </p>
          <h5>{user.about}</h5>
        </Alert>
      ) : (
        ""
      )}
    </Container>
  );
};

export default Show;
