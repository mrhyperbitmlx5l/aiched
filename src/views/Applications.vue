<template>
	<div class="application-section scope">
		<window :setting="setting"></window>
		<window :setting="setting"></window>
	</div>
</template>

<script>
	import Window from './Window.vue'
	export default {
		name: 'Applications',
		components:{
			Window
		},
		data() {
			return {
				setting:{
					
				}
			}
		},
		methods: {
	
		}
	}
</script>

<style>
</style>
