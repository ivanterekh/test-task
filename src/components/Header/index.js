import React, {Component} from "react";
import {Navbar, Nav, NavItem} from "react-bootstrap";
import "./Header.css";
import logo from "./logo.png";

export default class extends Component {

    constructor(props) {
        super(props);
        this.state = {xs: false};
        this.updateWindowWidth = this.updateWindowWidth.bind(this);
    }

    componentDidMount() {
        this.updateWindowWidth();
        window.addEventListener('resize', this.updateWindowWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowWidth);
    }

    updateWindowWidth() {
        // bootstrap xs is "less than 768px"
        this.setState({xs: window.innerWidth < 768, w: window.innerWidth});
    }

    render() {

        if (this.state.xs) {
            return <Navbar inverse staticTop>
                <Navbar.Header>
                    <img src={logo} alt="PIXELPLEX" className="logo"/>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav >
                        <NavItem onClick={() => window.location.reload()} eventKey={1} href="#">
                            Home
                        </NavItem>;
                        <NavItem eventKey={2} href="https://pixelplex.io" target="_blank">
                            Pixelplex
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        }
        return <Navbar inverse staticTop>
            <Navbar.Collapse>
                <img src={logo} alt="PIXELPLEX" className="pull-left logo logo-bigscreen"/>
                <Nav className="header">
                    <NavItem className="link" onClick={() => window.location.reload()} eventKey={1} href="#">
                        Home
                    </NavItem>;
                    <NavItem className="link" eventKey={2} href="https://pixelplex.io" target="_blank">
                        Pixelplex
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    }
}

