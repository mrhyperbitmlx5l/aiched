<template>
	<div
		class="window"
		:class="{ focus: setting.focus, animating: this.animating, maximized: this.maximized }"
		v-show="!setting.hidden"
		:style="{ top: position.y + 'px', left: position.x + 'px', width: width + 'px', height: height + 30 + 'px' }"
		@mousedown="onFocus(setting.id)"
	>
		<header class="window-title" @mousedown.self="onMousedown($event)">
			<div class="icon" :class="setting.icon"></div>
			{{ setting.title }}
			<div class="window-control">
				<span class="button min" @mousedown="onMin(setting.id)"></span>
				<span class="button max" v-show="resizable" @mousedown="resizable&&onMax()"></span>
				<span class="button close" @mousedown="onClose(setting.id)"></span>
			</div>
		</header>
		<div class="window-body" style="height:50px">{{ this.position.x }} --------- {{ this.position.y }}</div>
		<div class="resize-overlay" v-show="overlayShow"></div>
		<div v-for="(value, index) in resizeDirection" :key="index" v-show="resizable" :class="value" @mousedown="onResize($event)"></div>
	</div>
</template>

<script>
export default {
	name: 'Window',
	props: {
		setting: Object
	},
	data() {
		return {
			timer: {},
			drag: false,
			resize: false,
			width: 200,
			height: 400,
			maximized: false,
			animating: false,
			resizable: true,
			position: {
				x: 0,
				y: 0
			},
			oldposition: {},
			overlayShow: false,
			resizeDirection: [
				'resize-handle resize-handle-t',
				'resize-handle resize-handle-b',
				'resize-handle resize-handle-l',
				'resize-handle resize-handle-r',
				'resize-handle resize-handle-tl',
				'resize-handle resize-handle-tr',
				'resize-handle resize-handle-bl',
				'resize-handle resize-handle-br'
			]
		};
	},
	created() {
		let w = document.body.clientWidth;
		let h = document.body.clientHeight;
		this.width = this.setting.width > 0 ? this.setting.width : w / 2;
		this.height = this.setting.height > 0 ? this.setting.height : w / 3;

		this.position.x = w / 2 - this.width / 2;
		this.position.y = (h - this.height) / 2;
	},
	methods: {
		onFocus(id) {
			this.$store.commit('manager/focusApplication', id);
		},
		onClose(id) {
			this.$store.dispatch('manager/closeTask', id);
		},
		onMin(id) {
			this.$store.dispatch('manager/showOrhidden', id);
		},
		onMax() {
			if (this.maximized && this.oldPosition) {
				this.animating = true;
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.maximized = false;
					this.position.y = this.oldPosition.y;
					this.position.x = this.oldPosition.x;
					this.height = this.oldPosition.height;
					this.width = this.oldPosition.width;
					this.oldPosition = null;
					clearTimeout(this.timer);
					this.timer = setTimeout(() => {
						this.animating = false;
					}, 500);
				});
			} else {
				this.animating = true;
				clearTimeout(this.timer);
				this.timer = setTimeout(() => {
					this.maximized = true;
					this.oldPosition = {
						y: this.position.y,
						x: this.position.x,
						height: this.height,
						width: this.width
					};
					this.position.y = 0;
					this.position.x = 0;
					this.height = document.body.clientHeight * 0.9
					this.width = document.body.clientWidth;
					clearTimeout(this.timer);
					this.timer = setTimeout(() => {
						this.animating = false;
					}, 500);
				});
			}
		},
		onResize() {
			this.resize = true;
			//let x = e.clientX;
			//let y = e.clientY;
			// document.onmousemove = (e) => {
			// 	if (this.resize) {
			// 		this.width = this.width +  e.clientX - x
			// 		this.height = this.height + e.clientY - y
			// 	}
			// }
			// document.onmouseup = () => {
			// 	this.resize = false
			// }
		},
		onMousedown(e) {
			let w = e.clientX - this.position.x;
			let h = e.clientY - this.position.y;
			this.drag = true;
			document.onmousemove = e => {
				if (this.drag) {
					this.position.x = e.clientX - w;
					this.position.y = e.clientY - h;
					if (this.position.x <= 0) {
						this.position.x = 0;
					}
					if (this.position.y <= 0) {
						this.position.y = 0;
					}
				}
			};
			document.onmouseup = () => {
				this.drag = false;
			};
		}
	}
};
</script>

<style lang="less" rel="stylesheet/less">
@import '../global';

.window {
	position: absolute;
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	@titleHeight: 30px;

	&.animating {
		transition: all ease 0.5s;
	}

	.window-title {
		position: relative;
		background: #f2f6ff;
		text-align: center;
		line-height: @titleHeight;
		height: @titleHeight;
		cursor: default;
		color: #aaa;
		.Filter(saturate(0.5));

		.icon {
			position: absolute;
			top: 4px;
			left: 5px;

			/*display: inline-block;*/
			/*vertical-align: top;*/
			/*position:relative;*/
			/*top:5px;*/

			height: 18px;
			width: 18px;
			background-size: cover;
		}
	}

	&.focus {
		box-shadow: 0 10px 35px rgba(0, 0, 0, 0.6);

		.window-title {
			background: #f5f8ff;
			color: #333;
			.Filter(saturate(1.2));
		}
	}

	&.maximized {
		.window-control .button.max {
			@margin: 5px;
			@diff: 2px;
			@w: 8px;
			@b: 1px;
			@top: 0px;
			@left: 0px;

			&:before {
				box-sizing: border-box;
				content: '';
				display: block;
				position: absolute;
				height: @w;
				width: @w;
				left: (@titleHeight - 2 * @margin - @w) /2 - @diff + @left;
				top: (@titleHeight - 2 * @margin - @w) /2 + @diff + @top;
				border: @b solid #fff;
				border-top-width: 2 * @b;
			}

			&:after {
				box-sizing: border-box;
				content: '';
				display: block;
				position: absolute;
				height: @w;
				width: @w;
				left: (@titleHeight - 2 * @margin - @w) /2 + @diff + @left;
				top: (@titleHeight - 2 * @margin - @w) /2 - @diff + @top;
				border: @b solid #fff;
				border-top-width: 2 * @b;
			}
		}
	}

	.window-control {
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

		.min {
			background: #81c2d0;
			&:before {
				box-sizing: border-box;
				@w: 12px;
				@h: 2px;
				content: '';
				display: block;
				position: absolute;
				height: @h;
				width: @w;
				left: (@titleHeight - 2 * @margin - @w) /2;
				bottom: ((@titleHeight - 2 * @margin - @h) /2) - 4px;
				background: #fff;
			}
		}
		.max {
			background: #659a65;
			&:before {
				box-sizing: border-box;
				@w: 12px;
				@b: 1px;
				content: '';
				display: block;
				position: absolute;
				height: @w;
				width: @w;
				left: (@titleHeight - 2 * @margin - @w) /2;
				top: (@titleHeight - 2 * @margin - @w) /2;
				border: @b solid #fff;
				border-top-width: 2 * @b;
			}
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

	@reactionWidth: 4px;
	.resize-handle {
		position: absolute;
	}
	.resize-overlay {
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	.resize-handle-r {
		right: 0;
		bottom: 0;
		height: 100%;
		width: @reactionWidth;
		cursor: e-resize;
	}
	.resize-handle-b {
		right: 0;
		bottom: 0;
		width: 100%;
		height: @reactionWidth;
		cursor: s-resize;
	}
	.resize-handle-l {
		left: 0;
		top: 0;
		height: 100%;
		width: @reactionWidth;
		cursor: w-resize;
	}
	.resize-handle-t {
		left: 0;
		top: 0;
		width: 100%;
		height: @reactionWidth;
		cursor: n-resize;
	}
	.resize-handle-br {
		right: 0;
		bottom: 0;
		width: @reactionWidth*2;
		height: @reactionWidth*2;
		cursor: se-resize;
	}
	.resize-handle-bl {
		left: 0;
		bottom: 0;
		width: @reactionWidth*2;
		height: @reactionWidth*2;
		cursor: sw-resize;
	}
	.resize-handle-tr {
		top: 0;
		right: 0;
		width: @reactionWidth*2;
		height: @reactionWidth*2;
		cursor: ne-resize;
	}
	.resize-handle-tl {
		top: 0;
		left: 0;
		width: @reactionWidth*2;
		height: @reactionWidth*2;
		cursor: nw-resize;
	}
}
</style>
