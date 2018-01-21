import React from "react";
import '../assets/css/Centermain.css';
import {Link} from "react-router";
class CenterMain extends React.Component {
    outlogin(){
        localStorage.removeItem('uid')
    }
    render() {
        return (
            <div id="container">
                <div id="main">
                    <div className="warp clearfloat">
                        <div className="h-top clearfloat box-s">
                            <div className="tu clearfloat fl">
                                <img src="/src/assets/img/touxiang.png" />
                            </div>
                            <div className="content clearfloat fl">
                                <p className="hname">王小二</p>
                                <p className="htel">13035059866</p>
                            </div>
                            <div className="h-bottom clearfloat">
                                <samp></samp>
                                <ul>
                                    <li>
                                        <a href="recharge.html">
                                            <p>200</p>
                                            <span>余额</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="jfguanli.html">
                                            <p>1000</p>
                                            <span>积分</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="coupon.html">
                                            <p>3</p>
                                            <span>抵用券</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="cash clearfloat">
                            <div className="cash-tit clearfloat box-s">
                                我的订单
			    		</div>
                            <div className="shang clearfloat">
                                <ul>
                                    <li>
                                        <a href="order.html">
                                            <img src="/src/assets/img/group1.png" />
                                            <span>团购订单</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="wmai-order.html">
                                            <img src="/src/assets/img/group2.png" />
                                            <span>外卖订单</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="sc-order.html">
                                            <img src="/src/assets/img/group3.png" />
                                            <span>商城订单</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="hotel-order.html">
                                            <img src="/src/assets/img/group4.png" />
                                            <span>酒店预约</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="jifen-order.html">
                                            <img src="/src/assets/img/group5.png" />
                                            <span>积分兑换订单</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="cash clearfloat">
                            <div className="cash-tit clearfloat box-s">
                                收藏关注
			    		</div>
                            <div className="shang xia clearfloat">
                                <ul>
                                    <li>
                                        <a href="tuan.html">
                                            <p><i className="iconfont icon-tuangou"></i></p>
                                            <span>团购收藏</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="mall.html">
                                            <p><i className="iconfont icon-baihuo"></i></p>
                                            <span>百货收藏</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="remen.html">
                                            <p><i className="iconfont icon-shangjia"></i></p>
                                            <span>关注商家</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="cash clearfloat">
                            <div className="cash-tit clearfloat box-s">
                                我的优惠券
			    		</div>
                            <div className="shang clearfloat">
                                <ul>
                                    <li>
                                        <a href="coupon.html">
                                            <img src="/src/assets/img/sale1.png" />
                                            <span>商家优惠券</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="coupon.html">
                                            <img src="/src/assets/img/sale2.png" />
                                            <span>平台优惠券</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="member.html">
                                            <img src="/src/assets/img/sale3.png" />
                                            <span>我的会员</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="cashlist clearfloat">
                            <ul>
                                <li className="box-s">
                                    <a href="jfguanli.html">
                                        <p className="fl">积分兑换</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                                <li className="box-s">
                                    <a href="#">
                                        <p className="fl">浏览历史</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                                <li className="box-s">
                                    <a href="fabu.html">
                                        <p className="fl">我的发布</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                                <li className="box-s">
                                    <a href="xiaoxi.html">
                                        <p className="fl">我的消息</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                                <li className="box-s">
                                    <a href="sqlianmeng.html">
                                        <p className="fl">商家入驻</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                                <li className="box-s">
                                    <a href="huifu.html">
                                        <p className="fl">我的客服</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                                <li className="box-s">
                                    <a href="#">
                                        <p className="fl">关于99Tobo</p>
                                        <i className="iconfont icon-jiantou1 fr"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <Link to='/login' onClick={this.outlogin} className="center-btn db ra3">退出登录</Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default CenterMain;