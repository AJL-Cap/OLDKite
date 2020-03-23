import React from "react";
import { Link } from "react-router-dom";
import fire from "../fire";
import { useAuthState } from "react-firebase-hooks/auth";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export default function NavigationBar() {
  const [user, initialising, error] = useAuthState(fire.auth());

  const signOut = () => {
    fire.auth().signOut();
  };

  if (initialising) {
    return (
      <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Kite</Navbar.Brand>
      </Navbar>
    </Styles>
    )
  }

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Kite</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {user ? (
            <Nav classname="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/players">Players</Nav.Link>
              </Nav.Item>
              <button onClick={signOut}>Sign out</button>
            </Nav>
          ) : (
            <Nav classname="ml-auto">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/signup">Sign up</Nav.Link>
              </Nav.Item>
            </Nav>
          )}
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }

  .navbar-brand,
  .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`;
