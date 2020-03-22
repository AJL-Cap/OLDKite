import React from "react";
import { Container } from "react-bootstrap";

export default function Layout({ children }) {
  return (
    //this might be too indented.. we can certainly get rid of it and use a styled component for margin
    <Container>{children}</Container>
  )
}
