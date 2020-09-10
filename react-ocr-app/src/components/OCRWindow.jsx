import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";

import Upload from "./Upload";
import Toggler from "./Toggler";
import ToolBar from "./ToolBar";
import TabHolder from "./TabHolder";

export default class OCRWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setToogler: false, setPreUpload: true

        };
        
    }

    onFileUpload = (uploadedFiles) => {
        this.setState({isFile:true, files:uploadedFiles, setToogler: true, setPreUpload: false});
    };

    toggleWindow = () => {
        this.setState({isFile:true, files:this.state.files, setToogler: true, setPreUpload: !this.state.setPreUpload}); 
    };


    render() {
        return (
            
            <div id='OCRWindowComponent'>
                {this.state.setToogler?
                    (<div id="Toogler">
                        <Toggler toggleSwitch={this.toggleWindow}/>
                    </div>):(<></>) }


                {this.state.setPreUpload?
                (<div id='preUpload'>
                    <div id='Upload'>
                        <Upload sendFiles={this.onFileUpload} />
                    </div>

                </div>):
                (<div id='postUpload'>
                    <div id="ToolBar" className="d-flex justify-content-center">
                        <ToolBar/>
                    </div>
                    <div id="TabHolder" className="d-flex justify-content-center">
                        <TabHolder/>
                    </div>
                </div>)}
            </div>
        );
    }
}
