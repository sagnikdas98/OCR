import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";


import Tab from "./Tab";

export default class TabHolder extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setPreUpload: true

        };
        
    }

    render() {
        return (
            
            <div id='TabHolderComponent'>
                
            </div>
        );
    }
}
