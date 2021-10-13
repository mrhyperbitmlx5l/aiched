/** 类似于 windows 的注册表，所有可用的 application & icon都在这里定义**/
const register = {
	"MAXTASK": 50,
	/**最大任务数 **/
	"titleHeight": 30,
	/**标题栏高度 see global.less !!!**/
	"taskHeight": 40,
	/**任务栏高度  see global.less !!!**/
	"application": [
		{
			"id": "0000",
			"name": "关于",
			"page": "sys/about",
			"link": true,
			"width": 200,
			"height": 100,
			"icon": "about",
			"resizable":false
		},{
			"id": "9999",
			"name": "帮助",
			"page": "sys/help",
			"link": true,
			"width": 600,
			"height": 400,
			"icon": "help",
		},
		{
			"id": "0001",
			"name": "显示设置",
			"page": "sys/display",
			"link": false,
			"width": 600,
			"height": 450,
			"icon": "system",
			"resizable":false
		},
		{
			"id": "0002",
			"name": "计算器",
			"page": "sys/calculator",
			"link": true,
			"width": 300,
			"height": 300,
			"icon": "calculator",
			"resizable":false
		},{
			"id": "0003",//id
			"name": "Ant Design Vue DEMO",//title
			"icon": "folder",//图标
			"type": "folder",
			"link": false,//是否显示桌面图标
			"sublist":[
				{"id":"000301","name":"Ant Design Vue 测试1","icon":"setting","page": "demo","type":"application","link":false},
				{"id":"000302","name":"Ant Design Vue 测试2","icon":"call","page": "demo3","type":"application","link":false}
			]
		},
		{
			"id": "0006",
			"name": "Ant Design Vue Demo",
			"page": "demo3",
			"icon": "doller",
			"width": 500,
			"height": 500,
		},
		{
			"id": "0007",
			"name": "对话框抽屉",
			"page": "demo2",
			"icon": "folder",
			"width": 700,
			"height": 600,
		},
		{
			"id": "0008",
			"name": "第8",
			"page": "demo3",
			"icon": "safari",
			"width": 800,
			"height": 600,
		},
		{
			"id": "0009",
			"name": "日历",
			"page": "demo4",
			"icon": "chrome",
			"width": 450,
			"height": 400,
			"link": true
		}
	]
}

export default register
