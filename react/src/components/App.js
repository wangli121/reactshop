import React from "react";

import Head from './head';
import Foot from './foot';
import Loading from './Loading';

import {content, connect} from 'react-redux';

class App extends React.Component {
  render() {
    let{
      bHead,bFoot,bLoading,showHead,showFoot,hideHead,hideFoot,showLoading,hideLoading
    }=this.props;
    // console.log(bHead,bFoot)
    let path =this.props.location.pathname;
    // console.log(path)
    if(/main/.test(path)){
      setTimeout(showHead,0);
      setTimeout(showFoot,0);
    }
    if(/rush|nearby|guanzhu|center/.test(path)){
      setTimeout(hideHead,0);
      setTimeout(showFoot,0);
    }
    if(/shopcart|detail/.test(path)){
      setTimeout(hideHead,0);
      setTimeout(hideFoot,0);
    }
    // if(/detail/.test(path)){
    //   setTimeout(showHead,0);
    //   setTimeout(hideFoot,0);
    // }
    return (
      <div>
        {bLoading?<Loading/>:undefined}
        {bHead?<Head />:undefined}
        {this.props.children}
        {bFoot?<Foot />:undefined} 
      </div>
    );
  }
}
const mapStateToProps=(state,ownProps)=>{
  return {
    bHead:state.bHead,
    bFoot:state.bFoot,
    bLoading:state.bLoading
  }
}
const mapDisPatchToProps=(dispatch,ownProps)=>{
  return {
    showHead:()=>{
      dispatch({type:'SHOW_HEAD'})
    },
    hideHead:()=>{
      dispatch({type:'HIDE_HEAD'})
    },
    showFoot:()=>{
      dispatch({type:'SHOW_FOOT'})
    },
    hideFoot:()=>{
      dispatch({type:'HIDE_FOOT'})
    },
    showLoading:()=>{
      dispatch({type:'SHOW_LOADING'})
    },
    hideLoading:()=>{
      dispatch({type:'HIDE_LOADING'})
    },
  }
}
export default connect(
  mapStateToProps,
  mapDisPatchToProps
)(App);