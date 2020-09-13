//props: page{page,type,index},  translate{isTranslate, language}
//state: fileType, 


import React from "react";
import axios from 'axios'; 

import {Button, Container, Row, Col,Image, Tabs, Tab} from "react-bootstrap";
import UploadService from "../services/upload-files.service";

import TabHolder from "./TabHolder";

export default class OCRViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            fileType: this.props.page.type

        };
        
    }

    _getText = () =>{
        // api request for ocr
        // set response to state
    };

    _getTranslateText = () =>{
        // api request for ocr
        // set response to state
    };

    _handlePdfPageChange = () => {

    };


    _onFileUpload = (uploadedFiles) => {
        this.setState({isFile:true, files:uploadedFiles, setToogler: true, setPreUpload: false});
    };

    _toggleWindow = () => {
        this.setState({isFile:true, files:this.state.files, setToogler: true, setPreUpload: !this.state.setPreUpload}); 
    };


    render() {
        return (
            
            <div id='OCRViewerComponent'>
                    <Container>
                        <Row>
                            <Col>
                            <div id="TabHolder" className="d-flex justify-content-right">
                                {/* <TabHolder/> */}
                            </div>
                            </Col>
                            <Col>
                            <div>
                                <Image src={this.props.file} fluid />
                            </div>
                            </Col>
                        </Row>                    
                    </Container>
            </div>
        );
    }
}
