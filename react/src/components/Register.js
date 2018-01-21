import React from "react";
import '../assets/css/reg.css'
import {hashHistory} from 'react-router'
class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            uname: '',
            upw: '',
        }
        this.getuname = this.getuname.bind(this);
        this.getupw = this.getupw.bind(this);
        this.reg = this.reg.bind(this);
    }
    render() {
        return (
            <div>
                <header className="hasManyCity hasManyCitytwo" id="header">
                    <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                    <div className="header-tit">
                        注册
			        </div>
                    <div className='regsiter'>
                        <label>用户名：<input type='text' onChange={this.getuname} /></label>
                        <label>密&nbsp;&nbsp;&nbsp;码：<input type='text' onChange={this.getupw} /></label>
                        <button className='btnregsiter' onClick={this.reg}>注册</button>
                    </div>
                </header>
            </div>
        )
    }
    getuname(ev) {
        this.setState({
            uname: ev.target.value
        })
    }
    getupw(ev) {
        this.setState({
            upw: ev.target.value
        })
    }
    reg() {
        console.log(this.state)
        var params = new URLSearchParams();
        params.append('act', 'reg');
        params.append('uname', this.state.uname)
        params.append('upw', this.state.upw)
        fetch('http://localhost:4000/login', {
            method: 'POST',
            body: params
        }).then(res => {
            return res.json()
        }).then(data => {
            console.log(data)
            if (data == 2) {
                hashHistory.push('/login');
            } else {
                alert('注册失败!用户名已存在')
            }
            this.setState({
                uname: '',
                upw: ''
            })
        })
    }
}
export default Register;