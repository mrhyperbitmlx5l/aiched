<template>
	<div class="lockScreen-container">
		<div class="login-container">
			<h1>登陆</h1>
			<form class="form">
				<input type="text" placeholder="用户名" />
				<input type="password" placeholder="密码" />
				<button type="submit" @click="onLogin()">登陆</button>
			</form>
		</div>
		<ul class="square-cartoon">
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
	</div>
	<!-- //main -->
</template>

<script>
	import * as utils from '@/utils/index'
export default {
	name: 'LockScreen',
	data() {
		return {};
	},
	methods: {
		onLogin(){
			utils.setToken("token")
			this.$store.commit('session/setToken',"token")
			this.$router.push('/desktop').catch(err => {
					err;
			});
		}
	}
};
</script>

<style lang="less" rel="stylesheet/less">
.lockScreen-container {
	padding: 3em 0 0;
	//background: -webkit-linear-gradient(to bottom right, #673AB7 50%, #6231b9 50%);
	//background: linear-gradient(to bottom right, #56B983 50%, #41B983 50%);
	opacity: 0.8;
	background: linear-gradient(to bottom right, #50a3a2, #53e3a6);
	background: -webkit-linear-gradient(to bottom right, #50a3a2, #53e3a6);

	//background: #50a3a2;
	//background: linear-gradient(to left,blue 0%, green 50%,red 100%);
	//background: -webkit-linear-gradient(to left,blue 0%, green 50%,red 100%);

	position: relative;
	overflow: hidden;
	height: 100%;
}

.wrapper.form-success .container h1 {
	-webkit-transform: translateY(85px);
	-ms-transform: translateY(85px);
	transform: translateY(85px);
}
.login-container {
	width: 350px;
	position:absolute; 
	top:50%;transform:translate(-50%,-50%); 
	left:50%;
	padding: 80px 0;
	text-align: center;
	background: rgba(255, 255, 255, 0.2);
	//background-size: cover;
	//position: absolute;
	//top: 15%;
	//left: 40%;
	border-radius: 5px;
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
	z-index: 200;
	h1 {
		font-size: 40px;
		-webkit-transition-duration: 1s;
		transition-duration: 1s;
		-webkit-transition-timing-function: ease-in-put;
		transition-timing-function: ease-in-put;
		font-weight: 200;
	}
}

form {
	padding: 20px 0;
	position: relative;
	z-index: 2;
}
form input {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: 0;
	border: 1px solid rgba(255, 255, 255, 0.4);
	background-color: rgba(255, 255, 255, 0.2);
	width: 250px;
	border-radius: 3px;
	padding: 10px 15px;
	margin: 0 auto 10px auto;
	display: block;
	text-align: center;
	font-size: 18px;
	color: white;
	-webkit-transition-duration: 0.25s;
	transition-duration: 0.25s;
	font-weight: 300;
}
form input:hover {
	background-color: rgba(255, 255, 255, 0.4);
}
form input:focus {
	background-color: white;
	width: 300px;
	color: #53e3a6;
}
form button {
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	outline: 0;
	background-color: white;
	border: 0;
	padding: 10px 15px;
	color: #53e3a6;
	border-radius: 3px;
	width: 250px;
	cursor: pointer;
	font-size: 18px;
	-webkit-transition-duration: 0.25s;
	transition-duration: 0.25s;
}
form button:hover {
	background-color: #f5f7f9;
}

.square-cartoon {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
}
.square-cartoon li {
	position: absolute;
	list-style: none;
	display: block;
	width: 40px;
	height: 40px;
	background-color: rgba(255, 255, 255, 0.55);
	bottom: -160px;
	-webkit-animation: square 25s infinite;
	-moz-animation: square 25s infinite;
	-o-animation: square 25s infinite;
	-ms-animation: square 25s infinite;
	animation: square 25s infinite;
	-webkit-transition-timing-function: linear;
	-moz-transition-timing-function: linear;
	-o-transition-timing-function: linear;
	-ms-transition-timing-function: linear;
	transition-timing-function: linear;
}
.square-cartoon li:nth-child(1) {
	left: 10%;
}
.square-cartoon li:nth-child(2) {
	left: 20%;
	width: 80px;
	height: 80px;
	-webkit-animation-delay: 2s;
	-moz-animation-delay: 2s;
	-o-animation-delay: 2s;
	-ms-animation-delay: 2s;
	animation-delay: 2s;
	-webkit-animation-duration: 17s;
	-moz-animation-duration: 17s;
	-o-animation-duration: 17s;
	animation-duration: 17s;
}
.square-cartoon li:nth-child(3) {
	left: 25%;
	-webkit-animation-delay: 4s;
	-moz-animation-delay: 4s;
	-o-animation-delay: 4s;
	-ms-animation-delay: 4s;
	animation-delay: 4s;
}
.square-cartoon li:nth-child(4) {
	left: 40%;
	width: 60px;
	height: 60px;
	-webkit-animation-duration: 22s;
	-moz-animation-duration: 22s;
	-o-animation-duration: 22s;
	-ms-animation-duration: 22s;
	animation-duration: 22s;
	background-color: rgba(255, 255, 255, 0.25);
}
.square-cartoon li:nth-child(5) {
	left: 70%;
}
.square-cartoon li:nth-child(6) {
	left: 80%;
	width: 120px;
	height: 120px;
	-webkit-animation-delay: 3s;
	-moz-animation-delay: 3s;
	-o-animation-delay: 3s;
	-ms-animation-delay: 3s;
	animation-delay: 3s;
	background-color: rgba(255, 255, 255, 0.2);
}
.square-cartoon li:nth-child(7) {
	left: 32%;
	width: 160px;
	height: 160px;
	-webkit-animation-delay: 7s;
	-moz-animation-delay: 7s;
	-o-animation-delay: 7s;
	-ms-animation-delay: 7s;
	animation-delay: 7s;
}
.square-cartoon li:nth-child(8) {
	left: 55%;
	width: 20px;
	height: 20px;
	-webkit-animation-delay: 15s;
	-moz-animation-delay: 15s;
	animation-delay: 15s;
	-webkit-animation-duration: 40s;
	-moz-animation-duration: 40s;
	animation-duration: 40s;
}
.square-cartoon li:nth-child(9) {
	left: 25%;
	width: 10px;
	height: 10px;
	-webkit-animation-delay: 2s;
	animation-delay: 2s;
	-webkit-animation-duration: 40s;
	animation-duration: 40s;
	background-color: rgba(255, 255, 255, 0.3);
}
.square-cartoon li:nth-child(10) {
	left: 90%;
	width: 160px;
	height: 160px;
	-webkit-animation-delay: 11s;
	animation-delay: 11s;
}
@-webkit-keyframes square {
	0% {
		-webkit-transform: translateY(0);
		-moz-transform: translateY(0);
		-o-transform: translateY(0);
		-ms-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		-webkit-transform: translateY(-700px) rotate(600deg);
		-moz-transform: translateY(-700px) rotate(600deg);
		-o-transform: translateY(-700px) rotate(600deg);
		-ms-transform: translateY(-700px) rotate(600deg);
		transform: translateY(-700px) rotate(600deg);
	}
}
@keyframes square {
	0% {
		-webkit-transform: translateY(0);
		-moz-transform: translateY(0);
		-o-transform: translateY(0);
		-ms-transform: translateY(0);
		transform: translateY(0);
	}
	100% {
		-webkit-transform: translateY(-700px) rotate(600deg);
		-moz-transform: translateY(-700px) rotate(600deg);
		-o-transform: translateY(-700px) rotate(600deg);
		-ms-transform: translateY(-700px) rotate(600deg);
		transform: translateY(-700px) rotate(600deg);
	}
}
</style>
