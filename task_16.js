/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = [];

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {
	var city=document.getElementById("aqi-city-input");
	var value=document.getElementById("aqi-value-input");
	if(!/^([\u4e00-\u9fa5]+)|([a-zA-Z]+)$/.test(city.value.replace(/[ ]/g,""))){
		alert("城市名称请输入中英文");
		city.value="";
		city.focus();
		return;
	}
	if(!/^\d+$/.test(value.value.replace(/[ ]/g,""))){
		alert("空气质量请输入整数");
		value.value="";
		value.focus();
		return;
	}
	if (city!=""&value!="") {
		aqiData.push([city.value.replace(/[ ]/g,""),value.value.replace(/[ ]/g,"")]);
	}
}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {
	var table_content="";
	document.getElementById("aqi-table").innerHTML="<td>城市</td><td>空气质量</td><td>操作</td>";
	for(var i=0;i<aqiData.length;i++){
		table_content+="<tr><td>"+aqiData[i][0]+"</td><td>"+aqiData[i][1]
						+"</td><td><button onclick='delBtnHandle("+i+")'>删除</button></td></tr>"		
	}
	document.getElementById("aqi-table").innerHTML+=table_content;
}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
	addAqiData();
	renderAqiList()
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(dx) {
	aqiData.splice(dx,1);
	renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
 	 document.getElementById("add-btn").addEventListener("click",addBtnHandle);
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
