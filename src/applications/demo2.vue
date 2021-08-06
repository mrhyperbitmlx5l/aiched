<template>
  <div>
    <a-button type="primary" @click="showModal">
      Open Modal with customized footer
    </a-button>
    <Dialog v-model="visible" :setting="{'icon':'call','title':'模态对话框','width':'500','height':'400'}"><span>模态对话框</span></Dialog>
  </div>
</template>
<script>
	import Dialog from '@/views/DialogModal'
export default {
	components:{
		Dialog
	},
  data() {
    return {
      loading: false,
      visible: false,
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
  },
};
</script>
