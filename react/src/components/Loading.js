import React from 'react';
import '../assets/css/Loading.css'
export default class Loading extends React.Component {
    render() {
        return (
            <div className='loadingbox'>
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        );
    }
}