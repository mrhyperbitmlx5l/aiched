<<<<<<< HEAD
<template>
	<div style="height: 100%;">
		<a-button type="primary" @click="showModal">模态对话框</a-button>
		<a-button type="primary" @click="display = true">打开抽屉</a-button>
		<Dialog v-model="visible" icon="call" title="模态对话框" :inside="true" width="500">
			<a-form-model layout="inline" :model="formInline"  >
				<a-form-model-item>
					<a-input v-model="formInline.user" placeholder="Username"><a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)" /></a-input>
				</a-form-model-item>
				<a-form-model-item>
					<a-input v-model="formInline.password" type="password" placeholder="Password"><a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)" /></a-input>
				</a-form-model-item>
				<a-form-model-item>
					<a-button type="primary" html-type="submit" :disabled="formInline.user === '' || formInline.password === ''">Log in</a-button>
				</a-form-model-item>
			</a-form-model>
		</Dialog>
		<drawer title="我是一个抽屉组件" :display.sync="display" :inside="true" :width="drawerWidth" :mask="true">
			<a-collapse v-model="activeKey">
				<a-collapse-panel key="1" header="This is panel header 1">
					<p>{{ text }}</p>
				</a-collapse-panel>
				<a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
					<p>{{ text }}</p>
				</a-collapse-panel>
				<a-collapse-panel key="3" header="This is panel header 3" disabled>
					<p>{{ text }}</p>
				</a-collapse-panel>
			</a-collapse>
		</drawer>
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
			visible: false,
			formInline: {
				user: '',
				password: ''
			},
			text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
			activeKey: ['1']
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
=======
<template>
	<div style="height: 100%;">
		<a @click="showModal">模态对话框</a>|
		<a @click="display = true">打开抽屉</a>
		<Dialog v-model:display="visible" icon="call" title="模态对话框" :inside="true" width="500" ></Dialog>
		<drawer title="我是一个抽屉组件" v-model:display="display" :inside="true" :width="drawerWidth" :mask="true"></drawer>
	</div>
</template>

<script>
import drawer from '@/views/Drawer.vue';
import Dialog from '@/views/DialogModal.vue';
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
			visible: false,
			formInline: {
				user: '',
				password: ''
			},
			text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
			activeKey: ['1']
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
		onClose() {
			alert('close');
		}
	}
};
</script>

<style></style>
>>>>>>> develop
