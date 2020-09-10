import React from "react";
import axios from 'axios'; 

import Card from "react-bootstrap/Card";

export default class Upload extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, file:null, fileName:'', enableUploadButton: false

        };
    }


    handleUpload = (e) => {
        
        this.setState({isFile:true, file:null, fileName:e.target.files[0], enableUploadButton: true});

    };

    handleUploadButton = (e) =>{
        //Post the state and wait for api reasponse
    
        

        
        
    };

    render() {
        return (
            <div id='uploadComponent'>
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
                        onClick={this.handleUploadButton}>Run OCR</button>) : 
                        (<></>)}
                </div>
            </div>
        );
    }
}