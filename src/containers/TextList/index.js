import React from "react";
import {connect} from "react-redux";
import {ListGroup} from "react-bootstrap";
import {deleteText} from "../../redux/actions/texts";
import {keys} from "lodash";
import TextListItem from "../../components/TextListItem";

function TextList(props) {
    return <ListGroup>
        {keys(props.texts).map((id) => {
            let content = props.texts[id];
            return <TextListItem key={id} id={id} content={content} deleteText={props.deleteText}/>;
        })}
    </ListGroup>;
}

export default connect(
    (state) => {
        return state.texts;
    },
    { deleteText }
)(TextList);
