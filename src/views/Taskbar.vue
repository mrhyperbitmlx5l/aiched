<template>
	<div class="taskbar-section">
		<div class="start">START</div>
		<div class="app-list">
			<!-- <div class="app-item" :class="{actived:app._focus}" v-for="app in sortedApps" @click="click(app)">
				<span class="icon {{app.icon}}"></span>{{app.title}}
			</div> -->
			
		</div>
	</div>
</template>
<script>
	export default {
		name: 'Taskbar',
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style lang="less" >
	@import "../global.less";
	@h: 5%;
	.start{ width:5%;float: left;height: @h;margin: 15px;}
	.taskbar-section {
		width: 100%;
		height: @h;
		background: #f9f9f9;
		position: absolute;
		bottom: 0;
		top: auto !important;
		left: 0;
		box-shadow:0 10px 25px rgba(0, 0, 0, 0.4);
	}

	.app-list {
		width:95%;float:right;
		overflow: hidden;
		height: @h;
		cursor: default;

		.app-item {
			float: left;
			height: @h;
			min-width: 100px;
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
