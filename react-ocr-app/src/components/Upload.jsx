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


    _handlePages = (e) => {

        this.setState({isFile:true, files: e.target.files});

    };

    _handleUploadButton = () =>{

        // this.setState({isFile:true, files: this.state.files});
        let files = this.state.files;
        let pdfFiles = [];
        let imageFiles = [];
        const acceptedImageTypes = ['image/tiff', 'image/jpeg', 'image/png'];
        console.log(files);
        for(let file in files){
            if(file != undefined){
                if(acceptedImageTypes.includes(file.type)){
                    pdfFiles.push(file)
                }
                else if(file.type === 'application/pdf'){
                    imageFiles.push(file)
                }
            }
        }

        let orderedFiles = {pdfFiles: pdfFiles, imageFiles: imageFiles};
        this.setState({isFile:true, files: orderedFiles});
        this.props.sendFiles(orderedFiles);
    };

        

    render() {
        return (
            
            <div id='uploadComponent'>
                <div className="d-flex justify-content-center">
                    <input
                        type="file"
                        accept="image/*,application/pdf"
                        className="mt-2 btn btn-dark w-75"
                        onChange={this._handlePages}
                        multiple/>
                        
                </div>
                <br />
                <div className="d-flex justify-content-center">
                    {this.state.isFile ?
                    (<button
                        type="button"
                        className=" btn btn-dark"
                        disabled={!this.state.isFile}
                        onClick={this._handleUploadButton}>Run OCR {this.state.files[0].mozFullPath} </button>) 
                     : (<></>) }
                </div>
            </div>
        );
    }
}
