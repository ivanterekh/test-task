import React, {Component} from "react";
import Slider from 'react-rangeslider'
import 'react-rangeslider/lib/index.css'
import {connect} from "react-redux";
import {setStep} from "../../redux/actions/counter"
import store from "../../redux/store";

let currStep;
store.subscribe(() => {
    let oldStep = currStep;
    currStep = store.getState().counter.step;

    if (currStep !== oldStep) {
        localStorage.setItem("step", currStep);
    }
});

class RangeSlider extends Component {

    handleChange = (value) => {
        this.props.setStep(value);
    };

    render() {
        const { step } = this.props;
        return <div className="slider">
            <Slider
                min={0}
                max={5000}
                step={100}
                value={step}
                onChange={this.handleChange}
            />
            <div className='value'>{step}</div>
        </div>;
    }
}

export default connect(
    (state) => {
        return state.counter
    },
    {setStep}
)(RangeSlider);
