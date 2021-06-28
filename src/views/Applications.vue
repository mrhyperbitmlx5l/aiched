<template>
	<div class="application-section scope">
		<window v-for="app in apps" :key="app.id" :setting="app"></window>
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
		computed: {
			apps(){
				let apps = []
				let focusapp = null
				this.$store.state.manager.tasklist.forEach(app=>{
					if(app!=null && !app.focus){
						apps.push(app)
					} 
					if(app.focus){
						focusapp = app
					}
				})
				if(focusapp != null){
					apps.push(focusapp)
				}
				return apps
				// console.log("========>" + JSON.stringify(this.$store.state.manager.tasklist))
				// return this.$store.state.manager.tasklist
			}
		},
		methods: {
	
		}
	}
</script>

<style>
</style>
