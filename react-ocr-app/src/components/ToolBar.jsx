import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";


import ToolUnit from "./ToolUnit";

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setPreUpload: true

        };
        
    }

    render() {
        return (
            
            <div id='ToolBarComponent'>
                
            </div>
        );
    }
}
