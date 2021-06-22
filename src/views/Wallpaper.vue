<template>
	<div class="wallpaper-section">
		<div class="wallpaper-section" @mousedown="onMousedown($event)">

		</div>
	</div>
</template>

<script>
	export default {
		name: 'wallpaper',
		data() {
			return {}
		},
		methods: {
			onMousedown(event) {
				this.$store.commit('manager/selectIcon','')//清空 图标选择
				//alert(event.button)
				if (event) {
					event.preventDefault()
				}
				//alert("====>" + event.clientX + "=====>" + event.clientY)
			}
		},
		ready: function() {

		}
	}
</script>

<style lang="less">
	.wallpaper-section {
		height: 100%;
		background: url('../assets/wall.jpg');
		background-size: cover;
		/**background: #005599;**/
	}
</style>
