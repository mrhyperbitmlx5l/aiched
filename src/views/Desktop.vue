<template>
	<div class="desktop">
		<wallpaper class="scope"></wallpaper>
		<taskbar></taskbar>
		<application ></application>
	</div>
</template>

<script>
	import Application from './Applications.vue'
	import Wallpaper from './Wallpaper.vue'
	import Taskbar from './Taskbar.vue'
	export default {
		name: 'Desktop',
		components: {
			Application,
			Wallpaper,
			Taskbar
		}
	}
</script>

<style>
</style>
