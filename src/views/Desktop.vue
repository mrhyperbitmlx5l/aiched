<template>
	<div class="desktop">
		<wallpaper class="scope"></wallpaper>
		<icon-grid></icon-grid>
		<taskbar></taskbar>
		<application ></application>
		
	</div>
</template>

<script>
	import Application from './Applications.vue'
	import Wallpaper from './Wallpaper.vue'
	import Taskbar from './Taskbar.vue'
	import IconGrid from './IconGrid.vue'
	export default {
		name: 'Desktop',
		beforeCreate(){
			this.$store.commit('manager/init')
		},
		components: {
			Application,
			Wallpaper,
			Taskbar,
			IconGrid
		}
	}
</script>

<style>
</style>
