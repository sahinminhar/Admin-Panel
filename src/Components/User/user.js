import React, { useEffect, useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { Table, Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";

const UserList = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    const headers = {
      Authorization: token,
    };

    axios 
      .get("http://localhost:8005/user/userList", 
            { headers }
          )
      .then((response) => {
        setUsers(response.data.data);
      })
      .catch((error) => {
        swal("OOPS!", 'Error users data:', error);
      });
  }, []);

  const validatesignout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/";
  };

  return (
    <>
      <div className="dashboard d-flex">
        <nav className="sidebar">
          <h2 className="sidebar-title">Admin</h2>
          <ul className="sidebar-menu">
            <li className="sidebar-item">
              <Link to="#" className="sidebar-link">User List</Link>
            </li>
            <li className="sidebar-item">
              <Link to="#" className="sidebar-link">Layouts</Link>
            </li>
            <li className="sidebar-item">
              <Link to="#" className="sidebar-link">Pages</Link>
            </li>
            <li className="sidebar-item">
              <Link to="#" className="sidebar-link">Charts</Link>
            </li>
            <li className="sidebar-item">
              <Link to="#" className="sidebar-link">Tables</Link>
            </li>
          </ul>
          <Button variant="danger" onClick={validatesignout}>
            Sign Out
          </Button>
        </nav>

        <div className="main-content flex-grow-1">
          <Navbar expand="lg" bg="light" className="bg-body-tertiary">
            <Container>
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

          <Container className="mt-4">
            <h3>User List</h3>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>UserId</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {users.length > 0 ? (
                    users.map((user) => (
                      <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <Button variant="warning" size="sm">Edit</Button>{" "}
                          <Button variant="danger" size="sm">Delete</Button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" style={{ textAlign: "center" }}>
                        No users available
                      </td>
                    </tr>
                  )}
                </tbody>
              </Table>
          </Container>
        </div>
      </div>
    </>
  );
}

export default UserList;
