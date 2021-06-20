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
				alert(event.button)
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
