<template>
	<div
		class="context-menu-section"
		v-show="isShow"
		:style="{
			top: position.y + 'px',
			left: position.x + 'px'
		}"
	>
		<div class="context-menu">
			<ul>
				<li
					v-for="item in list"
					:key="item.id"
					:class="{ disabled: item.disabled, divide: item.type == 'divide', 'list-item': item.type !== 'divide' }"
					@click="onClick(item)"
				>
					{{ item.text }}
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
			icon: [
				{
					id: '1',
					text: '打开',
					type: 'default',
					disabled: false,
					action: 'openTask'
				},
				{
					type: 'divide'
				},
				{
					id: '2',
					text: '帮助',
					type: 'default',
					disabled: false,
					action: 'help'
				}
			],
			wall: [
				{
					id: '1',
					text: '帮助',
					type: 'default',
					disabled: false,
					action: 'help'
				},
				{
					type: 'divide'
				},
				{
					id: '2',
					text: '锁屏',
					type: 'default',
					disabled: false,
					action: 'lockScreen'
				},
				{
					id: '3',
					text: '下一个桌面背景',
					type: 'default',
					disabled: false,
					action: 'nextWall'
				}
			]
		};
	},
	computed: {
		list() {
			if (this.$store.state.manager.contextMenu.type==='wall') {
				return this.wall;
			} else {
				return this.icon;
			}
		},
		position() {
			return this.$store.state.manager.contextMenu;
		},
		isShow() {
			return this.position.x > 0 && this.position.y > 0;
		}
	},
	methods: {
		onClick(item) {
			let date = this.$store.state.manager.contextMenu.data
			this.$store.dispatch('manager/' + item.action, date);
			this.$store.commit('manager/cleanContextMenu');
		}
	}
};
</script>

<style lang="less" rel="stylesheet/less">
.context-menu-section {
	position: absolute;
}
.context-menu {
	margin: 0;
	padding: 0;
	ul {
		background: rgba(255, 255, 255, 0.8);
		width: 100%;
		padding: 5px 0;
		list-style: none;
		border-radius: 5px;
		.list-item {
			cursor: default;
			color: #333;
			padding: 0 10px;
			&:hover {
				background: #4b8de4;
				color: #fff;
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
</style>
