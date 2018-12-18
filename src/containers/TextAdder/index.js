import React, {Component} from "react";
import { connect } from "react-redux";
import { addText } from "../../redux/actions/texts";
import {FormGroup, FormControl, Button} from "react-bootstrap";

class TextAdder extends Component {
    constructor(props) {
        super(props);

        this.state = {input: ""};
    }

    updateInput = input => {
        this.setState({ input });
    };

    handleAddText = (e) => {
        e.preventDefault();
        this.props.addText(this.state.input);
        this.setState({ input: "" });
    };

    render() {
        return (
            <form>
                <FormGroup>
                    <FormControl
                        type="text"
                        value={this.state.input}
                        placeholder="Enter text"
                        onChange={e => this.updateInput(e.target.value)}
                    />
                </FormGroup>
                <Button type="submit" onClick={this.handleAddText} className="pull-right">Add text</Button>
            </form>
        );
    }
}

export default connect(
    null,
    { addText }
)(TextAdder);