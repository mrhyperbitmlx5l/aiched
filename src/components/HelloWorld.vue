<template>
  <div class="hello">
    111111111111
  </div>
</template>

<script>
import { onMounted } from 'vue'
export default {
  name: 'HelloWorld',
  data() {
		return {
			message:'====>'
		}
  },
  setup(){
	console.log('setup======>')
	onMounted(() => {
		console.log('Component is mounted!')
	})
  },
  created() {
	console.log('created======>' + this.message)
  },
  props: {
    msg: String
  }
}
</script>
<style scoped>
</style>
