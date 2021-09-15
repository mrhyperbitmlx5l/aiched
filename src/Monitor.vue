<template>
	<div id="monitor-container">
		<router-view ></router-view>
	</div>
</template>

<script>

export default {
	name: 'monitor',
	data() {
		return {
		};
	},
	created() {
		//console.log('==================>')
		//this.$store.dispatch('session/getToken')
	},
	watch: {
		// '$store.state.session.token': function() {
		// 	//console.log('this.$store.state.session.token ========> ' + this.$store.state.session.token);
		// 	if (this.$store.state.session.token.length > 0 ) {
		// 		this.$router.push({ path: this.redirect || '/' }).catch(err => {
		// 			err;
		// 		});
		// 	} else {
		// 		this.$router.push({ path: this.redirect || '/login' }).catch(err => {
		// 			err;
		// 		});
		// 	}
		// }
	}
};
</script>

<style lang="less"></style>
