import React from "react";
import '../assets/css/shopcart.css';
import { connect } from 'react-redux'
import { totalmem } from "os";
class Shopcart extends React.Component {
    constructor() {
        super()
        this.state = {
            count: {},
            checkcount: [],
            total: 0,
            checkAll: false,
        }
        this.add = this.add.bind(this);
        this.odd = this.odd.bind(this);
        this.submit = this.submit.bind(this);
        this.check = this.check.bind(this);
        this.checkAll = this.checkAll.bind(this);

    }
    componentDidMount() {
        this.getdata();
    }
    getdata() {
        var params = new URLSearchParams();
        params.append('uid', localStorage.getItem('uid'))
        fetch('http://localhost:4000/shopcart', {
            method: 'POST',
            body: params
        }).then(res => {
            return res.json();
        }).then(data => {
            this.props.showLoading()
            setTimeout(() => {
                this.props.hideLoading()
                var arr = [...data.data]
                var checkcount = [];
                for (var i = 0; i < arr.length; i++) {
                    checkcount.push(false)
                }
                this.setState({
                    count: data.obj,
                    checkcount: checkcount
                })
                for (var i = 0; i < arr.length; i++) {
                    arr[i].num = data.obj[arr[i].cartid]
                }
                this.props.updatastate(arr)
            }, 200);
        })
    }
    add(num, index, carid) {
        var total=this.state.total;
        let { arrnum } = this.props;
        var arr = arrnum;
        arr[index].num = arrnum[index].num + 1;
        this.props.add(arr)
        var newcount = this.state.count
        newcount[carid] = newcount[carid] + 1;
        total+=arrnum[index].price;
        console.log(total,arrnum[index].price)
        this.setState({
            count: newcount,
            total:total
        })
    }
    odd(num, index, carid) {
        var total=this.state.total;
        let { arrnum } = this.props;
        var arr = arrnum;
        arr[index].num = arrnum[index].num - 1 > 0 ? arrnum[index].num - 1 : 0;
        this.props.add(arr)
        var newcount = this.state.count
        newcount[carid] = newcount[carid] - 1 > 0 ? newcount[carid] - 1 : 0;
        total-=arrnum[index].price;
        this.setState({
            count: newcount,
            total:total
        })
    }
    submit() {
        var shopcart = JSON.stringify(this.state.count);
        var params = new URLSearchParams();
        params.append('uid', localStorage.getItem('uid'))
        params.append('shopcart', shopcart)
        fetch('http://localhost:4000/submint', {
            method: 'POST',
            body: params
        }).then(res => {
            return res.json();
        }).then(data => {
            // console.log(data)
        })
    }
    //单选
    check(index) {
        var total = 0;
        var checkAll = true;
        var newcheckcount = this.state.checkcount;
        newcheckcount[index] = !newcheckcount[index];
        for (var i = 0; i < newcheckcount.length; i++) {
            if (newcheckcount[i] == false) {
                checkAll = false;
                continue;
            }
            total += this.props.arrnum[i].price * this.props.arrnum[i].num
        }
        this.setState({
            checkcount: newcheckcount,
            checkAll: checkAll,
            total: total
        })
        setTimeout(() => {
            console.log(this.state.count)
        }, 0);
    }
    getnum(num){
        var newnum = num+1;
    }
    checkAll() {
        var arr = this.state.checkcount
        var bl = false;
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i] != arr[i + 1]) {
                // console.log('全都变true');
                bl = true;
                break;
            } else {
                if (arr[i] == true) {
                    // console.log('全都变false')
                    bl = false;
                } else {
                    // console.log('全都变true')
                    bl = true;
                }
            }
        }
        if (bl) {
            var total = 0;
            var newcheckcount = [];
            for (var i = 0; i < arr.length; i++) {
                newcheckcount.push(true);
                total += this.props.arrnum[i].price * this.props.arrnum[i].num;
            }
            console.log(this.props.arrnum)
            console.log(total)
            this.setState({
                checkcount: newcheckcount,
                checkAll: true,
                total: total
            })

        } else {
            var newcheckcount = [];
            for (var i = 0; i < arr.length; i++) {
                newcheckcount.push(false)
            }
            this.setState({
                checkcount: newcheckcount,
                checkAll: false,
                total: 0
            })
        }
    }
    render() {
        let { arrnum } = this.props;
        // console.log(this.state.checkcount[0])
        return (
            <div>
                <header className="hasManyCity hasManyCitytwo" id="header">
                    <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                    <div className="header-tit">
                        购物车
			        </div>
                    <a href="#" className="fr shanchu">
                        <i className="iconfont icon-lajixiang fr"></i>
                    </a>
                </header>
                <div id="container">
                    <div id="main">
                        <div className="warp warptwo clearfloat">
                            <div className="shopcar clearfloat">
                                {
                                    arrnum.map((item, index) => {
                                        return (
                                            <div className="list clearfloat fl" key={item.cartid}>
                                                <div className="xuan clearfloat fl">
                                                    <div className="radio" >
                                                        <label>
                                                            <input type="checkbox" onClick={() => { this.check(index) }} checked={this.state.checkcount[index]} name="sex" value="" />
                                                            <div className="option"></div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="tu clearfloat fl">
                                                    <span></span>
                                                    <img src={item.img} />
                                                </div>
                                                <div className="right clearfloat fl">
                                                    <p className="tit over">{item.des}</p>
                                                    <p className="fu-tit over">颜色：金色  内存：1287G</p>
                                                    <p className="jifen over">{item.price}购物币+{item.score}积分</p>
                                                    <div className="bottom clearfloat">
                                                        <div className="zuo clearfloat fl">
                                                            <ul>
                                                                <li onClick={(ev) => { this.odd(item.num, index, item.cartid), this.getnum(item.num) }}><img src="/src/assets/img/jian.png" /></li>
                                                                <li>{this.state.count[item.cartid]}</li>
                                                                <li onClick={(ev) => { this.add(item.num, index, item.cartid), this.getnum(item.num) }}><img src="/src/assets/img/jia.png" /></li>
                                                            </ul>
                                                        </div>
                                                        <i className="iconfont icon-lajixiang fr"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="settlement clearfloat">
                    <div className="zuo clearfloat fl box-s">
                        <div className="radio" >
                            <label>
                                <input type="checkbox" checked={this.state.checkAll} onClick={this.checkAll} name="sex" value="" />
                                <div className="option"></div>
                            </label>
                        </div>
                        合计：<span>￥{this.state.total}</span>
                    </div>
                    <a href="javascript:void(0)" className="fl db" onClick={this.submit} >
                        立即结算
	    	        </a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        arrnum: state.arrnum
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showLoading: () => {
            dispatch({ type: 'SHOW_LOADING' })
        },
        hideLoading: () => {
            dispatch({ type: 'HIDE_LOADING' })
        },
        updatastate: (payload) => {
            dispatch({ type: 'UPDATASTATE', payload })
        },
        add: (payload) => {
            dispatch({ type: 'NUMADD', payload })
        },
        odd: () => {
            dispatch({ type: 'NUMODD', payload })
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Shopcart)