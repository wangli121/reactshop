import React from "react";
import '../assets/css/Login.css';
import {Link,hashHistory} from "react-router";
class Login extends React.Component {
    constructor(){
        super();
        this.state={
            uname:'',
            upw:'',
        }
        this.getuname=this.getuname.bind(this);
        this.getupw=this.getupw.bind(this);
        this.login=this.login.bind(this);
    }
    render() {
        return (
            <div>
                <header className="hasManyCity hasManyCitytwo" id="header">
                    <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                    <div className="header-tit">
                        登录
			        </div>
                </header>
                <div className='login'>
                    <label>用户名：<input type='text' value={this.state.uname} onChange={this.getuname} /></label>
                    <label>密&nbsp;&nbsp;&nbsp;码：<input type='text' value={this.state.upw} onChange={this.getupw} /></label>
                    <button className='btnLogin' onClick={this.login}>登录</button>
                    <Link to="/register" className='logintoreg'>没有账号，请注册！</Link>
                </div>
            </div>
        )
    }
    getuname(ev){
        this.setState({
            uname:ev.target.value
        })
    }
    getupw(ev){
        this.setState({
            upw:ev.target.value
        })
    }
    login(ev){
        var params = new URLSearchParams();
        params.append('act','login');
        params.append('uname',this.state.uname)
        params.append('upw',this.state.upw)
        fetch('http://localhost:4000/login',{
            method:'POST',
            body:params
        }).then(res=>{
            return res.json()
        }).then(data=>{
            // console.log(data)
            if(data.stat==2){
                // console.log(data.id.uid)
                localStorage.setItem('uid',data.id.uid);
                hashHistory.push('/main');
            }else{
                alert('用户名或密码错误')
                this.setState({
                    uname:'',
                    upw:''
                })

            }
        })
    }
}
export default Login;