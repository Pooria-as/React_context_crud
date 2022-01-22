import React, { useContext } from "react";
import { Context } from "../Context";
import { Button, Container, Table, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import Pagination from "../common/Paginate";
const Users = () => {
  const data = useContext(Context);
  if (data.loading)
    return (
      <div className="container d-flex justify-content-center">
        <Oval color="#000000" height={200} width={200} />
      </div>
    );
  return (
    <>
      <Container>
        <NavLink to="/user/create" className="btn btn-success m-2">
          New User
        </NavLink>
        <Row>
          <Col>
            <Table striped bordered hover responsive variant="dark">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Age</th>
                  <th>Phone</th>
                  <th>City</th>
                  <th>Delete</th>
                  <th>More</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map((user, index) => (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.age}</td>
                    <td>{user.phone}</td>
                    <td>{user.city}</td>
                    <td>
                      <Button
                        variant="danger"
                        onClick={() => data.onDelete(user.id)}
                      >
                        Delete
                      </Button>
                    </td>
                    <td>
                      <NavLink
                        className="btn btn-secondary"
                        to={`/user/info/${user.id}`}
                      >
                        More
                      </NavLink>
                    </td>
                    <td>
                      <NavLink
                        className="btn btn-primary"
                        to={`/user/Edit/${user.id}`}
                      >
                        Edit
                      </NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <Pagination
              onPaginate={data.paginate}
              totalUser={data.totalUser}
              UserPerPage={data.userPerPage}
              CurrentPage={data.CurrentPage}
            />
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </>
  );
};

export default Users;
