import React from "react";
class RushHead extends React.Component {
    render() {
        return (
            <div>
                <header className="hasManyCity hasManyCitytwo" id="header">
                    <a href="javascript:history.go(-1)" className="fl fanhui"><i className="iconfont icon-fanhui"></i></a>
                    <div className="header-tit">
                        限时抢购
			        </div>
                    <a href="setup.html" className="fr shoucang sousuo"><i className="iconfont icon-fenxiang"></i></a>
                    <a href="#" className="fr shoucang sousuo"><i className="iconfont icon-sousuo"></i></a>
                </header>
                <div className="screening">
                    <ul>
                        <li className="Brand">全部分类</li>
                        <li className="Regional">全城</li>
                        <li className="Sort">智能排序</li>
                    </ul>
                </div>

                <div className="Category-eject">
                    <ul className="Category-w" id="Categorytw">
                        <li onclick="Categorytw(this)">全部品牌</li>
                        <li onclick="Categorytw(this)">奥迪</li>
                        <li onclick="Categorytw(this)">丰田</li>
                        <li onclick="Categorytw(this)">本田</li>
                        <li onclick="Categorytw(this)">大众</li>
                        <li onclick="Categorytw(this)">别克</li>
                        <li onclick="Categorytw(this)">标志</li>
                        <li onclick="Categorytw(this)">东风悦达起亚</li>
                        <li onclick="Categorytw(this)">东风</li>
                        <li onclick="Categorytw(this)">奔驰</li>
                        <li onclick="Categorytw(this)">玛莎拉蒂</li>
                        <li onclick="Categorytw(this)">保时捷</li>
                        <li onclick="Categorytw(this)">广汽传祺</li>
                    </ul>
                    <ul className="Category-t" id="Categoryt">
                        <li onclick="Categoryt(this)">奥迪A6</li>
                        <li onclick="Categoryt(this)">奥迪A6L</li>
                        <li onclick="Categoryt(this)">奥迪A4</li>
                        <li onclick="Categoryt(this)">奥迪A4L</li>
                        <li onclick="Categoryt(this)">奥迪A5</li>
                        <li onclick="Categoryt(this)">奥迪A8</li>
                        <li onclick="Categoryt(this)">奥迪A8L</li>
                        <li onclick="Categoryt(this)">奥迪A3</li>
                        <li onclick="Categoryt(this)">奥迪Q5</li>
                        <li onclick="Categoryt(this)">奥迪Q7</li>
                        <li onclick="Categoryt(this)">奥迪TT</li>
                        <li onclick="Categoryt(this)">奥迪R8</li>
                    </ul>
                    <ul className="Category-s" id="Categorys">
                        <li onclick="Categorys(this)">发动机(/进排气系统/燃油系统/冷却系统等)</li>
                        <li onclick="Categorys(this)">变速箱</li>
                        <li onclick="Categorys(this)">离合器</li>
                        <li onclick="Categorys(this)">转向</li>
                        <li onclick="Categorys(this)">制动</li>
                        <li onclick="Categorys(this)">传动/前后桥</li>
                        <li onclick="Categorys(this)">悬挂/车架/车厢</li>
                        <li onclick="Categorys(this)">轮胎/钢圈/轮毂</li>
                        <li onclick="Categorys(this)">暖风/柴暖/空调系统</li>
                        <li onclick="Categorys(this)">汽车电器/电子/传感器</li>
                        <li onclick="Categorys(this)">汽车电脑/电子控制单元系统</li>
                        <li onclick="Categorys(this)">汽车光电/汽车影音/电子防盗系统</li>
                        <li onclick="Categorys(this)">驾驶室/装饰件</li>
                        <li onclick="Categorys(this)">轴承/密封件/橡胶件/标准件</li>
                        <li onclick="Categorys(this)">汽车润滑/油/脂/液/汽车用品</li>
                        <li onclick="Categorys(this)">汽保工具/设备工具/维修设备</li>
                        <li onclick="Categorys(this)">液压件/齿轮齿件/挂车/工程机专用件</li>
                        <li onclick="Categorys(this)">其他</li>
                    </ul>
                </div>

                <div className="grade-eject">
                    <ul className="grade-w" id="gradew">
                        <li onclick="grade1(this)">哈尔滨</li>
                        <li onclick="grade1(this)">全国</li>
                        <li onclick="grade1(this)">北京</li>
                        <li onclick="grade1(this)">天津</li>
                        <li onclick="grade1(this)">河北</li>
                        <li onclick="grade1(this)">山西</li>
                        <li onclick="grade1(this)">内蒙古</li>
                        <li onclick="grade1(this)">辽宁</li>
                        <li onclick="grade1(this)">吉林</li>
                        <li onclick="grade1(this)">黑龙江</li>
                        <li onclick="grade1(this)">上海</li>
                        <li onclick="grade1(this)">江苏</li>
                        <li onclick="grade1(this)">山东</li>
                        <li onclick="grade1(this)">河南</li>
                        <li onclick="grade1(this)">湖北</li>
                        <li onclick="grade1(this)">湖南</li>
                        <li onclick="grade1(this)">广东</li>
                        <li onclick="grade1(this)">广西</li>
                        <li onclick="grade1(this)">海南</li>
                    </ul>
                    <ul className="grade-t" id="gradet">
                        <li onclick="gradet(this)">全河北</li>
                        <li onclick="gradet(this)">石家庄</li>
                        <li onclick="gradet(this)">唐山</li>
                        <li onclick="gradet(this)">秦皇岛</li>
                        <li onclick="gradet(this)">邢台</li>
                        <li onclick="gradet(this)">保定</li>
                        <li onclick="gradet(this)">张家口</li>
                        <li onclick="gradet(this)">承德</li>
                        <li onclick="gradet(this)">沧州</li>
                        <li onclick="gradet(this)">廊坊</li>
                        <li onclick="gradet(this)">衡水</li>
                    </ul>
                    <ul className="grade-s" id="grades">
                        <li onclick="grades(this)">全秦皇岛</li>
                        <li onclick="grades(this)">海港区</li>
                        <li onclick="grades(this)">山海关区</li>
                        <li onclick="grades(this)">北戴河区</li>
                        <li onclick="grades(this)">青龙满族自治区</li>
                        <li onclick="grades(this)">昌黎县</li>
                        <li onclick="grades(this)">抚宁县</li>
                        <li onclick="grades(this)">卢龙县</li>
                        <li onclick="grades(this)">其他区</li>
                        <li onclick="grades(this)">经济技术开发区</li>
                    </ul>
                </div>

                <div className="Sort-eject Sort-height">
                    <ul className="Sort-Sort" id="Sort-Sort">
                        <li onclick="Sorts(this)">智能排序</li>
                        <li onclick="Sorts(this)">离我最近</li>
                        <li onclick="Sorts(this)">好评优先</li>
                        <li onclick="Sorts(this)">最新发布</li>
                        <li onclick="Sorts(this)">人气优先</li>
                        <li onclick="Sorts(this)">价格最低</li>
                        <li onclick="Sorts(this)">价格最高</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default RushHead;