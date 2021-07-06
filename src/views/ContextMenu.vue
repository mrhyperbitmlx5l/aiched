<template>
	<div
		class="context-menu-section"
		:style="{
			top: '400px',
			left: '300px'
		}"
	>
		<div class="context-menu">
			<ul>
				<li
					v-for="item in data"
					:key="item.id"
					:class="{ disabled: item.disabled, divide: item.type == 'divide', 'list-item': item.type !== 'divide' }"
					@click="onClick(item)"
				>
					{{ item.text }}
					<ul class="sublist">
						<li class="list-item">100001</li>
						<li class="list-item">100002</li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
export default {
	name: 'ContextMenu',
	data() {
		return {
			data: [
				{
					id: '1',
					text: '6666666',
					type: 'copy',
					disabled: false,
					callback: function() {}
				},
				{
					type: 'divide'
				},
				{
					id: '2',
					text: '222',
					type: 'copy',
					disabled: false,
					callback: function() {}
				},
				{
					id: '3',
					text: '222',
					type: 'copy',
					disabled: false,
					callback: function() {}
				}
			]
		};
	},
	beforeCreate() {},
	components: {},
	methods: {
		onClick() {}
	}
};
</script>

<style lang="less" rel="stylesheet/less">
.context-menu-section {
	position: absolute;
}
.context-menu {
	margin:0;padding:0;
	border-radius: 4px;
	ul {
		background: rgba(255, 255, 255, 0.8);
		width: 100%;
		padding: 5px 0;
		list-style: none;
		
		.list-item {
			cursor: default;
			color: #333;
			padding: 0 10px;
			&:hover {
				background: #4b8de4;
				color: #fff;
				.sublist {display: block;}
			}
			&.disabled {
				color: #999;
			}
			
		}
		.divide {
			border-top: 1px solid #ccc;
			margin: 5px;
		}
	}
}
.context-menu li>.sublist {
				position: absolute;
		
				/*作用于 li的直接子元素ul */
				left: 150px; /*一级目录本身宽度100px, 所以二级目录显示的时候要向右偏移100px, 为什么使用的是left呢? 自己学习css吧*/
				/*二级目录默认是不显示的*/
				list-style: none;
				
				.list-item {
					padding: 0 10px;
				}
			}
</style>
