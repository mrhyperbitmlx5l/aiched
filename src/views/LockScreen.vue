<template>
	<div class="lockSreen">
		<transition-group tag="div" name="fadeIn">
			<div class="dogStart-loader-container" :key="1" v-show="loadShow">
				<img src="../assets/redson.png" width="150" alt="" />
				<div class="dogStart-loader">
					<div class="dot"><div class="first"></div></div>
					<div class="dot"></div>
					<div class="dot"></div>
					<div class="dot"></div>
				</div>
				<div>装作加载中......</div>
			</div>
			<div class="login-container" :key="2" v-show="!loadShow">
				<div class="login-windows">
					<div>
						<div></div>
					</div>
					<input type="text" placeholder="">
					<input type="password" placeholder="Password">
					<button @click="onclick1">→</button>
				</div>
			</div>
		</transition-group>
	</div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import $store from '../store/index';
//const state = reactive({ display: true, visible: false });

const loadShow = computed(() => {
	return $store.state.session.loadShow;
});

onMounted(() => {
	setTimeout(() => {
		$store.dispatch('session/closeLoadShow')
	}, 6000);
});

function onclick1(){
	$store.dispatch('session/login', '9999999')
}
</script>

<style lang="less">
@import '../global';
.lockSreen {
	background-color: @themeColor;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

.login-container {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

.login-windows {
	width: 350px;
	margin: 25% auto 0;
	font-family: 'Noto Sans', sans-serif;
	position: relative;
}

.login-windows input {
  margin-top: 10px;
  width: 85%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid #777;
  border-radius: 3px;
  outline:none;
  &:focus {
	border: 1px solid #888;
	box-shadow: 0px 0px 4px #000000 inset;
	}
}

.login-windows button {
  position: absolute;
  right: 55px;
  bottom: 2px;
  height: 36px;
  width: 40px;
  align-items: center;text-align:center;
  //border-radius: 50%;
  border: 1px solid #777;
  background: #e0f3fa;
  background: #e4f5fc;
  background: -moz-linear-gradient(top, #e4f5fc 0%, #bfe8f9 50%, #9fd8ef 51%, #2ab0ed 100%);
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#e4f5fc), color-stop(50%,#bfe8f9), color-stop(51%,#9fd8ef), color-stop(100%,#2ab0ed));
  background: -webkit-linear-gradient(top, #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);
  background: -o-linear-gradient(top, #e4f5fc 0%,#bfe8f9 50%,#9fd8ef 51%,#2ab0ed 100%);
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  font-size: 1.8rem;
  color: #eee;
  text-shadow: -1px 1px 2px rgba(0,0,0,0.3);
}

.dogStart-loader-container {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -180px;
	margin-left: -75px;
	width: 150px;
	height: 80px;
	font-family: 'Lato', sans-serif;
	font-weight: 600;
	font-size: 16px;
	color: #fff;
	text-align: center;
	-webkit-font-smoothing: antialiased;
}

.dogStart-loader {
	width: 80px;
	height: 80px;
	position: relative;
	margin: auto;
	margin-top: 60px;
	margin-bottom: 70px;
}

.dogStart-loader .dot {
	position: absolute;
	top: 0;
	left: 0;
	width: 80px;
	height: 80px;
	animation: 1.7s dotrotate cubic-bezier(0.775, 0.005, 0.31, 1) infinite;
}

.dogStart-loader .dot:nth-child(1) {
	animation-delay: 0.2s;
}

.dogStart-loader .dot:nth-child(2) {
	animation-delay: 0.35s;
}

.dogStart-loader .dot:nth-child(3) {
	animation-delay: 0.45s;
}

.dogStart-loader .dot:nth-child(4) {
	animation-delay: 0.55s;
}

.dogStart-loader .dot:after,
.dogStart-loader .dot .first {
	content: '';
	position: absolute;
	width: 8px;
	height: 8px;
	background: white;
	border-radius: 50%;
	left: 50%;
	margin-left: -4px;
}

.dogStart-loader .dot .first {
	background: #fff;
	margin-top: -4px;
	animation: 1.7s dotscale cubic-bezier(0.775, 0.005, 0.31, 1) infinite;
	animation-delay: 0.2s;
}

@keyframes dotrotate {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}

@keyframes dotscale {
	0%,
	10% {
		width: 16px;
		height: 16px;
		margin-left: -8px;
		margin-top: -4px;
	}
	50% {
		width: 8px;
		height: 8px;
		margin-left: -4px;
		margin-top: 0;
	}
	90%,
	100% {
		width: 16px;
		height: 16px;
		margin-left: -8px;
		margin-top: -4px;
	}
}
</style>
