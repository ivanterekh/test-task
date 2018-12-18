import React from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "./Header.css";

export default function (props) {
    return <Navbar inverse staticTop>
        <Navbar.Collapse>
            <img src="/logo.png" alt="PIXELPLEX" className="pull-left logo"/>
            <Nav className="header">
                <NavItem className="link" onClick={() => window.location.reload()} eventKey={1} href="#">
                    Home
                </NavItem>
                <NavItem className="link" eventKey={2} href="https://pixelplex.io" target="_blank">
                    Pixelplex
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
}