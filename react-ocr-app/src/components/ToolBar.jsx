
// Props: navigatePages(nav{dirn<next,prev,seek>, pgno }), disable{prev, next, image, pdf}, currentPageNo, totalFiles
// State: 


import React from "react";
import axios from 'axios'; 


import {Button, ButtonGroup, InputGroup, FormControl} from "react-bootstrap";

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

    _prev = () => {this.props.navigatePages({dirn:"prev"})};
    _next = () => {this.props.navigatePages({dirn:"next"})};

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
                            {/* <NavItem eventKey="prev_next"> */}
                            <div className="d-flex justify-content-right">
                            
                                <InputGroup className="mb-3" size="sm" >
                                <InputGroup.Prepend>
                                    <FormControl
                                    placeholder={this.props.currentPageNo}
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    type="number"
                                    min="1" max="5"
                                    />
                            </InputGroup.Prepend>
                                    <InputGroup.Append>
                                        <InputGroup.Text  id="basic-addon1" size="sm">{'/'+this.props.totalFiles}</InputGroup.Text>
                                    </InputGroup.Append>
                                </InputGroup>
                                <Button variant="outline-dark" size="sm">Seek</Button>
                                <ButtonGroup aria-label="Basic example" vertical size="sm" >
                                    <Button variant="dark" onclick={this._prev} block disabled={this.props.disable.prev}>Prev</Button>
                                    <Button variant="dark" onclick={this._next} block disabled={this.props.disable.next}>Next</Button>
                                </ButtonGroup>
                                </div>
                            {/* </NavItem> */}
                        </SideNav.Nav>





                    </SideNav>
                {/* </ClickOutside> */}
            </div>
        );
    }
}
//Use toggle buthon for images and pdfs
