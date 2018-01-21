import React from "react";
import GuanzhuHead from './GuanzhuHead';
import GuanzhuMain from './GuanzhuMain';
class Guanzhu extends React.Component {
    render() {
        return (
            <div>
                <GuanzhuHead />
                <GuanzhuMain />
            </div>
        )
    }
}
export default Guanzhu;