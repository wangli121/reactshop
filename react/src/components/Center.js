import React from "react";
import CenterHead from './CenterHead';
import CenterMain from './CenterMain';
import {hashHistory} from "react-router";
class Center extends React.Component {
    componentDidMount(){
        var uid = localStorage.getItem('uid');
        if(!uid){
            hashHistory.push('/login');
        }
    }
    render() {
        return (
            <div>
                <CenterHead />
                <CenterMain />
            </div>
        )
    }
}
export default Center;