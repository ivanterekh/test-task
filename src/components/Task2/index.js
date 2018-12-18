import {Col, Grid} from "react-bootstrap";
import React from "react";
import Slider from "../../containers/Slider"
import Counter from "../../containers/Counter"

export default function (props) {
    return <Grid>
        <Col lg={12}>
            <h3>Task 2</h3>
        </Col>
        <Col sm={6} xs={12}>
            <Slider/>
        </Col>
        <Col sm={6} xs={12}>
            <Counter/>
        </Col>
    </Grid>
}