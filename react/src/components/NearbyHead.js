import React from "react";
class NearbyMain extends React.Component {
    render() {
        return (
            <div>
                <header className="hasManyCity hasManyCitytwo" id="header">
                    <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                    <div className="header-tit">
                        附近的餐厅
			    </div>
                    <a href="setup.html" className="fr shoucang sousuo"><i className="iconfont icon-shezhi"></i></a>
                    <a href="#" className="fr shoucang sousuo"><i className="iconfont icon-sousuo"></i></a>
                </header>
                <div className="screening">
                    <ul>
                        <li className="Brand">全部分类</li>
                        <li className="Regional">全城</li>
                        <li className="Sort">智能排序</li>
                    </ul>
                </div>
                
            </div>
        )
    }
}
export default NearbyMain;