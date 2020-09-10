import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";

import OCRWindow from "./OCRWindow";

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isFile:false, files:null};
        
    }


    handlePages = (e) => {
        
        this.setState({isFile:true, files:e.target.files});

    };

    handleUploadButton = () =>{

        // this.setState({isFile:true, files: this.state.files});
        this.props.sendFiles(this.state.files);
    };

        // let currentFile = this.state.selectedFiles[0]; //
        //this.state.setOCRWindow =true;
        // this.setState({isFile:true, file:e.target.files, enableUploadButton: true, setOCRWindow: true});
        //this.setState(this.state);
        // UploadService.upload(currentFile, (event) => {
        //   this.setState({
        //     progress: Math.round((100 * event.loaded) / event.total),
        //   });
        // })
        //   .then((response) => {
        //     this.setState({
        //       message: response.data.message,
        //     });
        //     return UploadService.getFiles();
        //   })
        //   .then((files) => {
        //     this.setState({
        //       fileInfos: files.data,
        //     });
        //   })
        //   .catch(() => {
        //     this.setState({
        //       progress: 0,
        //       message: "Could not upload the file!",
        //       currentFile: undefined,
        //     });
        //   });
    
        // this.setState({
        //   selectedFiles: undefined,
        // });
    // };

    render() {
        return (
            
            <div id='uploadComponent'>
                <div className="d-flex justify-content-center">
                    <input
                        type="file"
                        accept="image/*,application/pdf"
                        className="mt-2 btn btn-dark w-75"
                        onChange={this.handlePages}/>
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    {this.state.isFile ?
                    (<button
                        type="button"
                        className=" btn btn-dark"
                        disabled={!this.state.isFile}
                        onClick={this.handleUploadButton}>Run OCR </button>) 
                     : (<></>) }
                </div>
            </div>
        );
    }
}
