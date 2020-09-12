import React from "react";
import axios from 'axios'; 
import PropTypes from 'prop-types';
import TabReact from "react-bootstrap/Tab";
import UploadService from "../services/upload-files.service";



export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setPreUpload: true

        };
        
    }

    render() {
        return (
            
            <div id='TabComponent'>
                <TabReact/>
            </div>
        );
    }
}
