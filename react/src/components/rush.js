import React from "react";
import RushHead from './RushHead';
import RushMain from './RushMain';
class Rush extends React.Component {
    render() {
        return (
            <div>
                <RushHead />
                <RushMain />
            </div>
        )
    }
}
export default Rush;