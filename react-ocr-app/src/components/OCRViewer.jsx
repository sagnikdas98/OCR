import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";

import TabHolder from "./TabHolder";

export default class OCRViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setToogler: false, setPreUpload: true

        };
        
    }

    getText = () =>{
        // api request for ocr
        // set response to state
    };

    onFileUpload = (uploadedFiles) => {
        this.setState({isFile:true, files:uploadedFiles, setToogler: true, setPreUpload: false});
    };

    toggleWindow = () => {
        this.setState({isFile:true, files:this.state.files, setToogler: true, setPreUpload: !this.state.setPreUpload}); 
    };


    render() {
        return (
            
            <div id='OCRViewerComponent'>
                    <div>
                        {/* Image */}
                    </div>
                    <div id="TabHolder" className="d-flex justify-content-right">
                        {/* <TabHolder/> */}
                    </div>
                
            </div>
        );
    }
}
