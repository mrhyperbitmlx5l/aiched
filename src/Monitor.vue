<template>
	<div id="monitor">
		<transition name="zoom" enter-active-class="animated slideInLeft" leave-active-class="animated zoomOut">
			<keep-alive>
			<router-view />
			</keep-alive>
		</transition>
	</div>
</template>

<script>
import './style.less';
import './icon.less';

export default {
	name: 'monitor',
	created() {},
	watch: {
		'$store.state.session.token': function() {
			console.log('this.$store.state.session.token ========> ' + this.$store.state.session.token)
			if (this.$store.state.session.token.length > 0) {
				this.$router.push({path: this.redirect || '/'}).catch(err => {
						err;
				});
			} else {
				this.$router.push({path: this.redirect || '/login'}).catch(err => {
						err;
				});
			}
		}
	}
};
</script>

<style lang="less"></style>
