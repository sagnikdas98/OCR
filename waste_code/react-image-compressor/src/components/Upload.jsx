import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";

import OCRWindow from "./OCRWindow";

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, file:null, fileName:'', enableUploadButton: false, setOCRWindow: false

        };
    }


    handlePages = (e) => {
        
        this.state = {isFile:true, file:e.target.files, enableUploadButton: true, setOCRWindow: true};
        this.setState(this.state);

    };

    handleUploadButton = () =>{
        // let currentFile = this.state.selectedFiles[0]; //
        this.state.setOCRWindow = true;
        this.setState(this.state);
    
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
    }

    render() {
        return (
          this.state.enableUploadButton ? (<OCRWindow />) :
            
            (<div id='uploadComponent'>
                <div className="d-flex justify-content-center">
                    <input
                        type="file"
                        accept="image/*,application/pdf"
                        className="mt-2 btn btn-dark w-75"
                        onChange={this.handleUpload}/>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-12 mb-5 mt-5 col-sm-12 d-flex justify-content-center align-items-baseline">
                    <br />
                    {this.state.enableUploadButton ? 
                    (<button
                        type="button"
                        className=" btn btn-dark"
                    onClick={this.handleUploadButton}>Run OCR </button>) : 
                        (<></>)}
                </div>
            </div>)
        );
    }
}
