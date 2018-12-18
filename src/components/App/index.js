import React, {Component} from 'react';
import Task1 from "../Task1"
import Task2 from "../Task2"
import Header from "../Header"

export default class extends Component {
    render() {
        return <div>
            <Header/>
            <Task1/>
            <Task2/>
        </div>
    }
}