<template>
	<div class="display-container">
		<div class="display-preview"><img :src="data.preview" /></div>
		<div class="display-list">
			<div class="display-list-item" :class="{ 'item-selected': item.selected }" v-for="(item, index) in data.imglist" :key="index" @click="onSelect(item.url)">
				<img :src="item.url" />
			</div>
		</div>
	</div>
</template>

<script setup>
import helper from '@/utils/helper'
import { reactive } from 'vue'
import $store from '@/store/index'

let images = [
	{ url: './wall/wall-0.jpg', selected: false },
	{ url: './wall/wall-1.jpg', selected: false },
	{ url: './wall/wall-2.jpg', selected: true },
	{ url: './wall/wall-3.jpg', selected: false },
	{ url: './wall/wall-4.jpg', selected: false },
	{ url: './wall/wall-5.jpg', selected: false }
];

const data = reactive({ currentIndex: 0, timer: null,preview:helper.getLocalstorage('wallpaper',""),imglist:images });

const selectwallpaper = ()=> {
	data.imglist.forEach(item => {
		if(item.url === data.wallpaper){
			item.selected = true
		} else {
			item.selected = false
		}
	})
}
const onSelect = (url) =>{
	data.preview = url
	$store.commit('core/SET_WALLPAPER',url);
	selectwallpaper()
}
</script>
<style scoped>
.display-container {
	background-color: #f9f9f9;
	width: 100%;
	height: 100%;
	margin: 0;
}
.display-preview {
	width: 100%;height: 100%;
	margin: 0px auto;
}
.display-preview img {
	width: 100%;object-fit: cover;
}
.display-list {
	width: 80%;
	white-space: nowrap;
	position: absolute;
	bottom: 10%;
	left:50%;
	-ms-transform:translate(-50%,0%); /* IE 9 */
	-webkit-transform:translate(-50%,0%); /* Safari and Chrome */
	transform: translate(-50%,0%);
	background-color: rgba(0, 0, 0, 0.35);
	box-shadow: 0 10px 25px rgba(0, 0, 0, 0.6);
	border-radius: 5px;
	padding: 10px 10px;
	overflow-x: auto;
}

.display-list::-webkit-scrollbar {
		width: 3px;
		height: 5px;
}
.display-list::-webkit-scrollbar-thumb {
	border-radius: 5px;
	background: #5555ff;
}
.display-list::-webkit-scrollbar-track {
	-webkit-box-shadow: inset 0 0 1px rgba(0, 0, 0, 0);
	border-radius: 3px;
	background: #ffffff;
}

.display-list-item {
	margin: 5px;
	display: inline-block;
}
.display-list-item:hover {
	border: 1px solid #a0d911;
}
.item-selected {
	border: 1px solid red;
}
.display-list-item:active {
	border: 1px solid #a8071a;
}

.display-list-item img {
	height: 120px;
}
</style>
