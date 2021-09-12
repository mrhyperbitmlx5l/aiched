<template>
	<iframe v-show="iframeState" id="show-iframe" frameborder="0" name="showHere" target="show-iframe" scrolling="auto" src="help" width="100%" height="100%"></iframe>
</template>
<script>
export default {
	name: 'Help',
	data() {
		return {
			iframeState: true
		};
	},
	created() {},
	methods: {}
};
</script>
