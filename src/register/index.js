/** 类似于 windows 的注册表，所有可用的 application & icon都在这里定义**/
const register = {
	"MAXTASK": 50,
	/**最大任务数 **/
	"titleHeight": 30,
	/**标题栏高度 see global.less !!!**/
	"taskHeight": 40,
	/**任务栏高度  see global.less !!!**/
	"application": [{
			"id": "0001",//id
			"name": "HelloWorld",//title
			"page": "HelloWorld",//组件
			"icon": "firefox",//图标
			"type": "folder",
			"link": true,//是否显示桌面图标
			"sublist":[
				{"id":"0001","name":"1111","icon":"firefox","type":"application","link":true},
				{"id":"000102","name":"2222","icon":"firefox"},
				{"id":"000103","name":"3333","icon":"firefox"}
			]
		},
		{
			"id": "0002",
			"name": "计算器",
			"page": "calculator",
			"link": true,
			"width": 400,
			"height": 400,
			"icon": "jsj",
		},
		{
			"id": "0003",
			"name": "Ant Design Vue 测试1",
			"page": "demo",
			"icon": "setting",
			"link": true,
			"width": 800,
			"height": 400,
		},
		{
			"id": "0004",
			"name": "Ant Design Vue 测试2",
			"page": "demo2",
			"icon": "call",
			"link": true,
		},
		{
			"id": "0005",
			"name": "第5",
			"page": "Home",
			"icon": "people",
		},
		{
			"id": "0006",
			"name": "第6",
			"page": "HelloWorld",
			"icon": "doller",
		},
		{
			"id": "0007",
			"name": "第7",
			"page": "HelloWorld",
			"icon": "folder",
		},
		{
			"id": "0008",
			"name": "第8",
			"page": "HelloWorld",
			"icon": "safari",
		},
		{
			"id": "0009",
			"name": "第9",
			"page": "HelloWorld",
			"icon": "chrome",
			"link": true
		},
		{
			"id": "0010",
			"name": "第10",
			"page": "HelloWorld",
			"icon": "chrome",
		},
		{
			"id": "0011",
			"name": "第10",
			"page": "HelloWorld",
			"icon": "chrome",
		},
		{
			"id": "0012",
			"name": "第10",
			"page": "HelloWorld",
			"icon": "chrome",
		},
		{
			"id": "0013",
			"name": "第10",
			"page": "HelloWorld",
			"icon": "chrome",
		},
		{
			"id": "0014",
			"name": "第10",
			"page": "HelloWorld",
			"icon": "chrome",
		}
	]
}

export default register
