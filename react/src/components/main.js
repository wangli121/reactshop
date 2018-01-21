import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";

import ReactSwipe from 'react-swipe'

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
        }
        // this.getdata =this.getdata.bind(this);
    }

    componentDidMount() {
        this.props.router.replace('/main');
        this.getdata();
        // new ReactSwipe(swiper, {
        //     direction: 'vertical',
        //     scrollbar: '.swiper-scrollbar',
        //     slidesPerView: 'auto',
        //     freeMode: true,
        //     observer: true,
        //     observeParents: true,
        //     setWrapperSize: true
        // });
    }
    getdata() {
        this.props.showLoading()
        fetch('http://localhost:4000/getdata', {
            method: 'POST'
        }).then(res => {
            return res.json();
        }).then(data => {
            setTimeout(() => {
                this.props.hideLoading()
                this.setState({ data: data });
            }, 200);
        })
    }
    render() {
        return (
            <div id="container">
                <div id="main">
                    <div id="scroller">
                        <section className="banner">
                            <ReactSwipe className="carousel" id='swiper' swipeOptions={{
                                continuous: true,auto:2000,speed:500
                            }}>
                                <div><img src='/src/assets/img/lunbo1.jpg'/></div>
                                <div><img src='/src/assets/img/lunbo2.jpg'/></div>
                                <div><img src='/src/assets/img/lunbo3.jpg'/></div>
                            </ReactSwipe>
                        </section>

                        <section className="slider">
                            <div className="swiper-slide swiper-slide-duplicate">
                                <ul className="icon-list">
                                    <li className="icon">
                                        <a href="tuan.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a1.png" />
                                            </span>
                                            <span className="icon-desc">团购</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="delivery.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a2.png" />
                                            </span>
                                            <span className="icon-desc">外卖</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="rush.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a3.png" />
                                            </span>
                                            <span className="icon-desc">限时抢购</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="indiana.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a4.png" />
                                            </span>
                                            <span className="icon-desc">一元夺宝</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="yule.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a5.png" />
                                            </span>
                                            <span className="icon-desc">娱乐</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="hotel.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a6.png" />
                                            </span>
                                            <span className="icon-desc">酒店</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="tourism.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a7.png" />
                                            </span>
                                            <span className="icon-desc">旅游</span>
                                        </a>
                                    </li>
                                    <li className="icon">
                                        <a href="piaowu.html">
                                            <span className="icon-circle">
                                                <img src="/src/assets/img/a8.png" />
                                            </span>
                                            <span className="icon-desc">票务</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div id="index" className="page-center-box">
                        <div>
                            {/* 限时抢购 */}
                            <div className="sy_title"><span className="left">限时抢购</span>
                                <div className="sy_limit_buy_time left">
                                    <em className="ico"></em> 距离结束
                                    <span className="time">
                                        <span>00</span>天
                                        <span>00</span>时
                                        <span>00</span>分
                                        <span>00</span>秒
                                    </span>
                                </div>
                            </div>
                            <div className="sy_limit_buy mb10">
                                {
                                    this.state.data.map((item, index) => {

                                        return (<div className="index-box" key={item.cartid}>
                                            <Link to={{ pathname: "/detail/" + item.cartid }}>
                                                <img src={item.img} width="" height="" />
                                                <p className="txt_center fontcl1">¥{item.price}<small className="ml10"><del className="black9">￥{item.price + 100}</del></small></p>
                                            </Link>
                                        </div>)

                                    })
                                }
                            </div>
                            <div className="sy_title">
                                <span className="left">热门商家</span>
                                <a href="remen.html" className="fr morethree">更多&gt;&gt;</a>
                            </div>
                            <div className="sy_hot_seller">
                                <div className="sy_limit_buy mb10">
                                    <div className="index-hotshop">
                                        <div className="box">
                                            <a href="#">
                                                <img src="/src/assets/img/thumb_5745110bbc27c.jpg" width="114" height="114" />
                                                <p className="txt_center overflow_clear">菲诗小铺</p>
                                                <p className="fontcl2">2人关注<small className="ml10 fr black9">已售0</small></p>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a href="#">
                                                <img src="/src/assets/img/thumb_5745110bbc27c.jpg" width="114" height="114" />
                                                <p className="txt_center overflow_clear">菲诗小铺</p>
                                                <p className="fontcl2">2人关注<small className="ml10 fr black9">已售0</small></p>
                                            </a>
                                        </div>
                                        <div className="box">
                                            <a href="#">
                                                <img src="/src/assets/img/thumb_5745110bbc27c.jpg" width="114" height="114" />
                                                <p className="txt_center overflow_clear">菲诗小铺</p>
                                                <p className="fontcl2">2人关注<small className="ml10 fr black9">已售0</small></p>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner">
                                <a href="#" title="家居广告1">
                                    <img src="/src/assets/img/553b0e58b6c52.jpg" alt="家居广告1" width="100%" />
                                </a>
                            </div>
                            <div className="sy_title mb10">
                                <span className="left">热门推荐</span>
                                <a href="#" className="fr morethree">更多&gt;&gt;</a>
                            </div>
                            <div className="sy_recmd">
                                <div className="sy_recmd_list_box">
                                    <ul>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="sy_recmd_list">
                                            <div className="box">
                                                <div className="pub_img">
                                                    <a href="mall-detail.html"><img src="/src/assets/img/thumb_543ba5688cb7b.jpg" width="145" height="145" /></a>
                                                </div>
                                                <div className="pub_wz">
                                                    <h3 className="overflow_clear"><a href="#">喜来登酒店</a></h3>
                                                    <div className="nr_box">
                                                        <p className="fl fontcl2">¥25</p>
                                                        <span className="fl black9">[优惠活动]</span>
                                                        <p className="fr price fontcl2"><span className="black9">已售50</span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {

    }
};

//所有需要递交的action请求
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showLoading: () => {
            dispatch({ type: 'SHOW_LOADING' });
        },
        hideLoading: () => {
            dispatch({ type: 'HIDE_LOADING' });
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);