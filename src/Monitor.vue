<template>
	<div id="monitor-container">
		<router-view ></router-view>
	</div>
</template>

<script setup>
	import { watch,computed } from "vue";
	import $store from './store/index';
	import $router from './router/index';
		
	const token = computed(() => {
		return $store.state.session.token;
	});
	
	watch(token,(newValue,oldValue) => {
		console.log(newValue + '========> ' + oldValue)
		if (newValue > 0) {
			$router.push( '/' ).catch(err => {
				err;
			});
		} else {
			$router.push( '/login' ).catch(err => {
				err;
			});
		}
	})
</script>

<style lang="less"></style>
