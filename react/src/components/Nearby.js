import React from "react";
import NearbyHead from './NearbyHead';
import NearbyMain from './NearbyMain';
class Nearby extends React.Component {
    render() {
        return (
            <div>
                <NearbyHead />
                <NearbyMain />
            </div>
        )
    }
}
export default Nearby;