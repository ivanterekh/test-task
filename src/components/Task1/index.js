import React from "react";
import {Grid, Col} from "react-bootstrap";
import TextAdder from "../../containers/TextAdder"
import TextList from "../../containers/TextList"

export default function (props) {
    return <Grid>
        <Col lg={12}>
            <h3>Task 1</h3>
        </Col>
        <Col sm={6} xs={12}>
            <TextAdder/>
        </Col>
        <Col sm={6} xs={12}>
            <h4>List:</h4>
            <TextList/>
        </Col>
    </Grid>
}