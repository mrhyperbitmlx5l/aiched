<template>
	<div class="wallpaper-section">
		<div class="wallpaper-section" @mousedown="onMousedown($event)" :style="{background: 'url('+wall[index].imge+')'}">

		</div>
		<div class="mouse-action-section">
			<div class="selection-section" v-show="selection.startSelection"></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'wallpaper',
		data() {
			return {
				wall:[
					{imge:''},
					{imge: require('../assets/wall/wall-0.jpg')},
					{imge: require('../assets/wall/wall-1.jpg')},
					{imge: require('../assets/wall/wall-2.jpg')},
					{imge: require('../assets/wall/wall-3.jpg')},
					{imge: require('../assets/wall/wall-4.jpg')}
				],
				selection: {
					startSelection: false,
					startPosition: {},
					currentPosition: {},
					topLeft: null,
					bottomRight: null,
				}
			}
		},
		computed:{
			index(){
				let i = this.$store.state.manager.wallIndex
				return i <= 0 ? 1:( i > 5 ? 0:i)
			}
		},
		methods: {
			onMousedown(event) {
				this.$store.commit('manager/selectIcon', '') //清空 图标选择
				if (event.button==2) {
					this.$store.commit('manager/setContextMenu', {"x":event.clientX,"y":event.clientY,'type':'wall'})
				} else {
					this.$store.commit('manager/cleanContextMenu')
				}
			},
			onMouseup(event){
				console.log("===>" + JSON.stringify(event))
				if (event.button==2) {alert("222")
					event.preventDefault()
				}
			}
		},
		ready: function() {

		}
	}
</script>

<style lang="less">
	.wallpaper-section {
		height: 100%;
		background-size: cover;
		background: #42B983;
	}
</style>
