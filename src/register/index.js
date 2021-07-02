/** 类似于 windows 的注册表，所有可用的 application & icon都在这里定义**/
const register = {
	"MAXTASK":50,/**最大任务数 **/
	"titleHeight":30,/**标题栏高度 see global.less !!!**/
	"taskHeight":40,/**任务栏高度  see global.less !!!**/
	"application":
	[
	{
		"id":"0001",
		"name":"第一",
		"page":"HelloWorld",
		"icon":"firefox",
	},
	{
		"id":"0002",
		"name":"第二",
		"page":"calculator",
		"width":400,
		"height":400,
		"icon":"chrome",
	},
	{	
		"id":"0003",
		"name":"第三",
		"icon":"chrome",
	},	
	{	
		"id":"0004",
		"name":"第4",
		"icon":"safari",
	},	
	{	
		"id":"0005",
		"name":"第5",
		"icon":"chrome",
	},	
	{	
		"id":"0006",
		"name":"第6",
		"icon":"safari",
	},	
	{	
		"id":"0007",
		"name":"第7",
		"icon":"chrome",
	},	
	{	
		"id":"0008",
		"name":"第8",
		"icon":"safari",
	},	
	{	
		"id":"0009",
		"name":"第9",
		"icon":"chrome",
	},
	{
		"id":"0010",
		"name":"第10",
		"icon":"chrome",
	}
]
}

export default register

