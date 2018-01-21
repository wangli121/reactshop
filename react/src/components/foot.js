import React from "react";
import { Link } from 'react-router';
class Foot extends React.Component {
    render() {
        return (
            <footer id="footer">
                <div>
                    <Link to='/main' activeClassName='active'>
                        <div className="icon i-1 on"></div>
                        <p>首页</p>
                    </Link>
                </div>
                <div>
                    <Link to='/nearby' activeClassName='active'>
                        <div className="icon i-5 on"></div>
                        <p>附近</p>
                    </Link>
                </div>
                <div>
                    <Link to='/rush' activeClassName='active'>
                        <div className="icon i-2 on"></div>
                        <p>抢购</p>
                    </Link>
                </div>
                <div>
                    <Link to='/guanzhu' activeClassName='active'>
                        <div className="icon i-3 on"></div>
                        <p>关注</p>
                    </Link>
                </div>
                <div>
                    <Link to='/center' activeClassName='active'>
                        <div className="icon i-4 on"></div>
                        <p>我的</p>
                    </Link>
                </div>
            </footer>
        )
    }
}
export default Foot;