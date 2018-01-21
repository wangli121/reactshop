import React from "react";
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Detail extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
        this.addshopcart = this.addshopcart.bind(this);
    }
    componentDidMount() {
        this.getdata();
    }
    getdata() {
        let path = this.props.location.pathname;
        let cartid = path.slice(path.lastIndexOf('/') + 1)
        var params = new URLSearchParams();
        params.append('cartid', cartid)
        fetch('http://localhost:4000/detail', {
            method: 'POST',
            body: params
        }).then(res => {
            return res.json();
        }).then(data => {
            this.props.showLoading()
            setTimeout(() => {
                this.props.hideLoading()
                this.setState({ data: data });
            }, 200);
        })
    }
    addshopcart() {
        var uid = localStorage.getItem('uid')
        let path = this.props.location.pathname;
        let cartid = path.slice(path.lastIndexOf('/') + 1)

        var params = new URLSearchParams();
        params.set('cartid', cartid)
        params.set('uid', uid)
        fetch('http://localhost:4000/addshopcart', {
            method: 'POST',
            body: params
        }).then(res => {
            return res.json();
        }).then(data => {
        })
    }
    render() {
        return (
            <div>
                <header className="hasManyCity hasManyCitytwo" id="header">
                    <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                    <div id="locaitonBtn" className="link-url locaitonBtn"></div>
                    <div id="" className="searchBox">
                        <a href="#">
                            <i className="icon-search"></i>
                            <span>请输入您想找的内容</span>
                        </a>
                    </div>
                </header>
                <div id="container">
                    <div id="main">
                        <div className="warp warptwo clearfloat">
                            <div className="detail clearfloat">
                                {
                                    this.state.data.map((item, index) => {
                                        return (
                                            <div key={item.cartid}>
                                                <section className="banner bannertwo">
                                                    <a href="#">
                                                        <img src={item.img} />
                                                    </a>
                                                </section>
                                                <div className="top clearfloat box-s" key={item.cartid}>
                                                    <div className="shang clearfloat">
                                                        <div className="zuo clearfloat fl over2 box-s">
                                                            {item.des}
                                                        </div>
                                                        <div className="you clearfloat fr">
                                                            <i className="iconfont icon-fenxiang"></i>
                                                            <p>分享</p>
                                                        </div>
                                                    </div>
                                                    <div className="xia clearfloat">
                                                        <p className="jifen fl box-s"><samp>{item.price}</samp>元<samp>{item.score}</samp>积分</p>
                                                        <span className="fr">销量{item.xiaoliang}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }

                                <div className="middle clearfloat box-s">
                                    <a href="#">
                                        <span className="fl">商品详情</span>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </div>
                                <div className="middle clearfloat box-s">
                                    <a href="#">
                                        <span className="fl">商品评价</span>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footerone clearfloat">
                    <div className="left clearfloat fl">
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="iconfont icon-shangcheng"></i>
                                    <p>商城</p>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="iconfont icon-kefu1"></i>
                                    <p>客服</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="right clearfloat fl">
                        <span className="btn fl" onClick={this.addshopcart} >加入购物车</span>
                        <Link to='/shopcart' className="btn btnone fl">立即购买</Link>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showLoading: () => {
            dispatch({ type: 'SHOW_LOADING' })
        },
        hideLoading: () => {
            dispatch({ type: 'HIDE_LOADING' })
        }

    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Detail)