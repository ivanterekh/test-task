import React from "react";
import {Row, Col} from "react-bootstrap";
import TextAdder from "../../containers/TextAdder"
import TextList from "../../containers/TextList"

export default function(props) {
    return <Row>
        <Col sm={6} xs={12}><TextAdder/></Col>
        <Col sm={6} xs={12}><TextList/></Col>
    </Row>
}