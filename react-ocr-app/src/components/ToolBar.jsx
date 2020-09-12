
// Props:
// State: 


import React from "react";
import axios from 'axios'; 

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import UploadService from "../services/upload-files.service";
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import {ClickOutside} from 'react-click-outside';

import ToolUnit from "./ToolUnit";

export default class ToolBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            isFile:false, files:null, setPreUpload: true

        };
        
    }
    _onSelect = (eventKey, event) => {
        console.log("uyuyuy");
    };

    render() {
        return (
            
            <div id='ToolBarComponent'>
                {/* <ClickOutside
                    onClickOutside={() => {
                        this.setState({ expanded: false });
                    }}
                > */}
                    <SideNav>
                        <SideNav.Toggle />
                        
                        <SideNav.Nav defaultSelected="home" onSelect={this._onSelect}>

                            <NavItem eventKey="new" componentClass='ButtonGroup'>
                                <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                <NavText>New</NavText>
                            </NavItem>

                            <NavItem eventKey="home">
                                <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                <NavText>Home</NavText>
                            </NavItem>                   
                        </SideNav.Nav>

                        <SideNav.Nav expanded = 'false'>
                            <NavItem eventKey="translate">
                                <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                <NavText>Translate</NavText>
                            </NavItem>
                        </SideNav.Nav>

                        <SideNav.Nav expanded = 'false'>
                            <NavItem eventKey="image">
                                <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                <NavText>Image</NavText>
                            </NavItem>

                            <NavItem eventKey="pdf">
                                <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                <NavText>PDF</NavText>
                            </NavItem>
                        </SideNav.Nav>

                        <SideNav.Nav expanded = 'false'>
                        {/* <NavItem eventKey="next"> */}
                                {/* <NavIcon><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></NavIcon>
                                <NavText>Next</NavText> */}
                                <ButtonGroup aria-label="Basic example">
                                    <Button variant="primary">Prev</Button>
                                    <Button variant="secondary">Next</Button>
                                </ButtonGroup>
                            {/* </NavItem> */}
                        </SideNav.Nav>





                    </SideNav>
                {/* </ClickOutside> */}
            </div>
        );
    }
}
//Use toggle buthon for images and pdfs
