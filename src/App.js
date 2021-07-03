import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Forminputs from './Forminputs'

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <Forminputs />
            </div>
        )
    }
}
