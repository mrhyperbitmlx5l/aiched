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
			this.$store.commit('manager/init')
		},
		components: {
			Application,
			Wallpaper,
			Taskbar,
			IconGrid,
			ContextMenu
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
