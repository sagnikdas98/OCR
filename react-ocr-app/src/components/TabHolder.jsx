import React from "react";
import axios from 'axios'; 
import PropTypes from 'prop-types';
import Tabs from "react-bootstrap/Tabs";
import UploadService from "../services/upload-files.service";


import Tab from "./Tab";

export default class TabHolder extends React.Component {
    
    static propTypes = {
        children: PropTypes.instanceOf(Array).isRequired,
    };
    
    constructor(props) {
        super(props);
        this.state = {
            // activeTab: this.props.children[0].props.label

        };
    }
    onClickTab = (tab) => {
        this.setState({ activeTab: tab });
      }
    

    render() {
        return (
            
            <div id='TabHolderComponent'>
                <Tabs>
                {this.props.tabs.map((tab) => <Tab tabState={tab}/>)}
                </Tabs>     
            </div>
        );
    }
}
 