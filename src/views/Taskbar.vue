<template>
	<div class="taskbar-section scope">
		<div class="app-list">
			<div class="app-item" :class="{ actived: app.focus }" v-for="app in apps" :key="app.id" @click="onClick(app.id)" :style="{width:itemWidth + 'px'}">
				<span class="icon" :class="app.icon"></span>
				{{ app.title }}
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Taskbar',
	data() {
		return {};
	},
	computed: {
		apps() {
			let apps = [];
			this.$store.state.manager.tasklist.forEach(app => {
				if (app != null) {
					apps.push(app);
				}
			});
			return apps;
		},
		itemWidth() {
			if (this.$store.state.manager.tasklist.length < 5) {
				return 100;
			} else {
				let ww = document.body.clientWidth * 0.95;
				return Math.floor(ww / this.$store.state.manager.tasklist.length);
			}
		}
	},
	methods: {
		onClick(id) {
			this.$store.dispatch('manager/focusTask', id);
		}
	}
};
</script>

<style lang="less">
@import '../global.less';
@h: 40px;
.start {
	width: 5%;
	float: left;
	height: @h;
	margin: 15px;
}
.taskbar-section {
	width: 100%;
	height: @h;
	background: #f9f9f9;
	position: absolute;
	bottom: 0;
	top: auto !important;
	left: 0;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.app-list {
	width: 95%;
	float: right;
	overflow: hidden;
	border-left: 2px double #333333;
	height: @h;
	cursor: default;

	.app-item {
		float: left;
		height: @h;
		min-width: 50px;
		padding: 0 20px 0 15px;
		text-align: center;
		line-height: @h;
		font-size: 14px;
		border-right: 1px solid #e9e9e9;

		/*color:#fff;*/
		/*background:#ccc;*/
		color: #aaa;
		.Filter(saturate(0.2));

		&.actived {
			/*background:#4b8de4;*/
			/*color:#fff;*/
			color: #111;
			background: #fff;
			.Filter(saturate(1));
		}

		.icon {
			display: inline-block;
			width: 25px;
			height: 25px;
			margin-right: 5px;
			background-size: cover;
			vertical-align: top;
			position: relative;
			top: 7px;
		}
	}
}
</style>
