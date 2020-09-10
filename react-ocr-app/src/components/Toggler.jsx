import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";

export default class Toggler extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setPreUpload: true

        };
        
    }



    render() {
        return (
            
            <div id='TogglerComponent'>
                <Button variant="dark" onClick={this.props.toggleSwitch}>Toggle</Button>
                
            </div>
        );
    }
}
