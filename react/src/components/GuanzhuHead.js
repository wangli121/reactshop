import React from "react";
class GuanzhuHead extends React.Component {
    render() {
        return (
            <header className="hasManyCity hasManyCitytwo" id="header">
                <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                <div className="header-tit">
                    关注
			</div>
                <a href="setup.html" className="fr shoucang sousuo"><i className="iconfont icon-shezhi"></i></a>
                <a href="#" className="fr shoucang sousuo"><i className="iconfont icon-dizhi1"></i></a>
            </header>
        )
    }
}
export default GuanzhuHead;