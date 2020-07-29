<template>
  <div class="modal">
    <slot></slot>
	 <button @click="$emit('close')">Dismiss</button>
  </div>
</template>

<script>
	/* 不在需要手动导出：简化了操作
		原模式：
			export default {}
		*/
	   export default {
		   /* 现在在Vue 3中，建议您使用新的 emits 组件选项显式声明组件的事件。就像props一样，你可以简单地创建一个字符串数组来命名组件将发出的每个事件。 */
	     emits: [ "close" ]
	   }
</script>

<!-- 在我们的组件中使用 scoped CSS是一种很好的做法，以确保我们提供的规则不会对页面中的其他内容产生意外影响。 -->
<style scoped>
  ::v-slotted(p) {
    font-style: italic;
  }
</style>
