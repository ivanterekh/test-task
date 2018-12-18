import {Button} from "react-bootstrap";
import React from "react";
import "./TextListItem.css";

export default (props) => {
    return (
        <li className="list-group-item clearfix text-list-item">
            <span className="text">{props.content}</span>
            <Button className="pull-right" onClick={() => props.deleteText(props.id)}>delete text</Button>
        </li>
    )
}