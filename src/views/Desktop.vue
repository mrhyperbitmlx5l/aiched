<template>
	<div class="desktop" >
		<wallpaper></wallpaper>
		<icon-grid></icon-grid>
		<taskbar></taskbar>
		<application ></application>
		<ContextMenu></ContextMenu>
	</div>
</template>

<script>
	import Application from './Applications.vue'
	import Wallpaper from './Wallpaper.vue'
	import Taskbar from './Taskbar.vue'
	import IconGrid from './IconGrid.vue'
	import ContextMenu from './ContextMenu.vue'
	export default {
		name: 'Desktop',
		beforeCreate(){
			//oncontextmenu 事件在元素中用户右击鼠标时触发并打开上下文菜单
			document.oncontextmenu = new Function("event.returnValue=false");
			//onselectstart几乎可以用于所有对象，其触发时间为目标对象被开始选中时（即选中动作刚开始，尚未实质性被选中）
			//document.onselectstart = new Function("event.returnValue=false");
			this.$store.commit('manager/init')
		},
		components: {
			Application,
			Wallpaper,
			Taskbar,
			IconGrid,
			ContextMenu,
		},
		methods: {
			clean(){
				this.$store.commit('manager/selectIcon', '')
			}
		}
	}
</script>

<style>
</style>
