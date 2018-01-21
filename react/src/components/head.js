import React from "react";
class Head extends React.Component {
    render() {
        return (
            <header className="hasManyCity" id="header">
                <div id="" className="cityBtn">宿州</div>
                <div id="locaitonBtn" className="link-url locaitonBtn"></div>
                <div id="" className="searchBox">
                    <a href="search.html">
                        <i className="icon-search"></i>
                        <span>请输入您想找的内容</span>
                    </a>
                </div>
                <div id="" className="qrcodeBtn"></div>
            </header>
        )
    }
}
export default Head;