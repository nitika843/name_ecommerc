import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBBtn,
} from "mdb-react-ui-kit";

export default function NavBar() {
  return (
    <MDBNavbar light bgColor="light">
      <MDBContainer fluid>
          <MDBNavbarBrand>Navbar</MDBNavbarBrand>
          <span>All Product</span>
          <MDBBtn color="dark">Dark 0</MDBBtn>
      </MDBContainer>
    </MDBNavbar>
  );
}
