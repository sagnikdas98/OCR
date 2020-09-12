import React from "react";
import axios from 'axios'; 
// import { Document, Outline, Page } from 'react-pdf';
// import {PDFtoIMG} from 'react-pdf-to-image';

import Button from "react-bootstrap/Button";
import UploadService from "../services/upload-files.service";




import Upload from "./Upload";
import Toggler from "./Toggler";
import ToolBar from "./ToolBar";
import OCRViewer from "./OCRViewer";

export default class OCRWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setToogler: false, setPreUpload: true, currentFile: null,


        };
        
    }

    _onFileUpload = (orderedfFiles) => {

        let currFile = null;
        let imageFilesLength = orderedfFiles.imageFiles.length;
        let pdfFilesLength = orderedfFiles.pdfFiles.length;
        
        
        let enableImageButton = false;
        let enablePdfButton = false;

        if(pdfFilesLength > 0){
            enablePdfButton = true;
            //convert pdf to array of pages TODO
            // let pdfPageList = [];
            // for(let pdf in orderedfFiles.pdfFiles){
                
            // }

            currFile = {page: orderedfFiles.pdfFiles[0], type: 'pdf', index: 0};
        }
        if(imageFilesLength > 0){
            enableImageButton = true;
            currFile = {page: orderedfFiles.imageFiles[0], type: 'image', index: 0};
        }
        
        this.setState({isFile:true, files:orderedfFiles, setToogler: true, setPreUpload: false, currentFile: currFile});
    };

    _toggleWindow = () => {
        this.setState({isFile:true, files:this.state.files, setToogler: true, setPreUpload: !this.state.setPreUpload, currentFile: this.currentFile}); 
    };

    // _navigatePages = (nav) =>{
    //     let curPage = this.state.currentFile;
        
    //     if (nav.dirn == "next" ){
    //         if (currentFileNo != 0){

    //         }
    //     }
    //     else if(nav.dirn == "previous" ){
    //         if (currentFileNo != 0){
                
    //         }
    //     }

    // };




    render() {
        return (
            
            <div id='OCRWindowComponent'>
                {!this.state.setToogler?
                    (<div id="ToolBar" className="d-flex justify-content-left">
                    <ToolBar/>
                    </div>):(<></>) }


                {this.state.setPreUpload?
                (<div id='preUpload'>
                    <div id='Upload'>
                        <Upload sendFiles={this._onFileUpload} />
                    </div>

                </div>):
                (<div id='postUpload'> 
                    <div id="OCRViewer" className="d-flex justify-content-center">
                        <OCRViewer page={this.state.currentFile} navigatePages={this._navigatePages} />
                    </div>
                </div>)}
            </div>
        );
    }
}
