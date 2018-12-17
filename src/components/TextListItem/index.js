import {Button} from "react-bootstrap";
import React from "react";


export default (props) => {
    return (
        <li className="list-group-item">
            {props.content}
            <Button className="pull-right" onClick={() => props.deleteText(props.id)}>delete text</Button>
        </li>
    )
}