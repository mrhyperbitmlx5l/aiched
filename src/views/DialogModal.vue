<template>
	<div class="dialog-container" v-show="show">
		<div class="modal-mask"></div>
		<transition enter-active-class="animated zoomIn" leave-active-class="animated zoomOut">
			<div class="dialog-modal" v-show="show" :style="{ top: position.y + 'px', left: position.x + 'px', width: width + 'px',  }">
				<header class="dialog-title">
					<div class="icon" :class="setting.icon"></div>
					{{ setting.title }}
					<div class="dialog-control"><span class="button close" @mousedown="onClose()"></span></div>
				</header>
				<div class="dialog-body"><slot></slot></div>
				<div class="dialog-footer">
					1111111111
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'DialogModal',
	model: {
		prop: 'isopen',
		event: 'onOpen'
	},
	props: {
		isopen: Boolean,
		setting: Object
	},
	computed: {
		show() {
			return this.isopen;
		}
	},
	data() {
		return {
			position: {
				x: 0,
				y: 0
			},
			width: 200,
			height: 400
		};
	},
	created() {
		let w = document.body.clientWidth;
		let h = document.body.clientHeight;
		this.width = this.setting.width > 0 ? this.setting.width : w / 3;
		this.height = this.setting.height > 0 ? this.setting.height : w / 4;
		this.position.x = w / 2 - this.width / 2;
		this.position.y = (h - this.height) / 2;
	},
	methods: {
		onClose() {
			this.$emit('onOpen', false);
		}
	}
};
</script>

<style lang="less" rel="stylesheet/less">
@import '../global';

.modal-mask {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	z-index: 999;
	background-color: rgba(0, 0, 0, 0.45);
}

.dialog-container {
	position: fixed;
}
.dialog-modal {
	position: fixed;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
	z-index: 1000;

	&.animating {
		transition: all ease 0.5s;
	}
	.dialog-body {
		background: #f9f9f9;
		height: auto;
	}

	.dialog-footer {
		border-top: 1px solid #e8e8e8;
		background: #f9f9f9;
		width: 100%;
		height: 40px;
		padding: 10px;
	}

	.dialog-title {
		position: relative;
		background: rgba(255, 255, 255, 0.4);
		color: #333;
		.Filter(saturate(1.2));
		text-align: center;
		line-height: @titleHeight;
		height: @titleHeight;
		cursor: default;
		.icon {
			position: absolute;
			top: 4px;
			left: 5px;
			height: 18px;
			width: 18px;
			background-size: cover;
		}
	}

	.dialog-control {
		@margin: 5px;
		position: absolute;
		right: 0;
		top: 0;
		height: @titleHeight;
		.button {
			display: block;
			position: relative;
			width: @titleHeight - 2 * @margin;
			height: @titleHeight - 2 * @margin;
			margin: @margin @margin 0 0;
			float: left;
			border-radius: 3px;
		}

		.Rotate(@deg) {
			transform: rotate(@deg);
			-webkit-transform: rotate(@deg);
			-moz-transform: rotate(@deg);
		}

		.close {
			&:before,
			&:after {
				@w: 14px;
				@h: 2px;
				content: '';
				display: block;
				position: absolute;
				height: @h;
				width: @w;
				left: (@titleHeight - 2 * @margin - @w) /2;
				top: (@titleHeight - 2 * @margin - @h) /2;
				background: #fff;
				.Rotate(45deg);
			}
			&:after {
				.Rotate(-45deg);
			}
			background: #d26262;
		}
	}
}
</style>
