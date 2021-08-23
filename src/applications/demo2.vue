<template>
	<div style="height: 100%;">
		<a-button type="primary" @click="showModal">Open Modal with customized footer</a-button>
		<a-button type="primary" @click="display = true">打开抽屉</a-button>
		<Dialog v-model="visible" icon="call" title='模态对话框' :inside="true" width='500' @onOk="onOk">
			<div>模态对话框</div>
			<div>模态对话框</div>
			<div>模态对话框</div>
		</Dialog>
		<drawer title="我是一个抽屉组件" :display.sync="display" :inside="true" :width="drawerWidth" :mask="true">1. Hello, world! 2. Do you like it?</drawer>
	</div>
</template>
<script>
import drawer from '@/views/drawer';
import Dialog from '@/views/DialogModal';
export default {
	components: {
		drawer,
		Dialog
	},
	data() {
		return {
			drawerWidth: '500px',
			display: false,
			loading: false,
			visible: false
		};
	},
	methods: {
		showModal() {
			this.visible = true;
		},
		handleOk() {
			this.loading = true;
			setTimeout(() => {
				this.visible = false;
				this.loading = false;
			}, 3000);
		},
		handleCancel() {
			this.visible = false;
		},
		onOk() {
			alert('close');
		}
	}
};
</script>
