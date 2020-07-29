<template>
	<!-- 
		文档说是可以支持多根节点，不过记得关闭eslint检查，不然小红线看着难受。
		本质：vue3.0内部会自动在元素的最外层添加一个 <div id="app"></div>
		意义：少些一点代码把，可能~~~///(^v^)\\\~~~
		-->
	<button @click="toggleModalState">Open modal</button>
	<!-- @click：该事件，在子组件触发$emit()的时候就会触发 ,无论触发的是个哪个方法，可以认为是所有方法的前置方法
		@close: 该事件，会子组件触发$emit('close')的时候会触发 -->
	<modal v-if="modalOpen" @click="toggleModalState" @close="toggleModalState2">
		<p>Hello, I'm a modal window.</p>
	</modal>
	<!-- 模态框暂时用不了 -->
	<!-- 	<teleport to="#modal-wrapper">
		<modal v-if="modalOpen">
			<p>Hello, I'm a modal window.</p>
		</modal>
	</teleport>
	
	<div id="modal-wrapper">
	</div> -->
</template>

<script>
	import Modal from "./Modal.vue";

	export default {
		name: 'app',
		//新写法：
		data: () => ({
			modalOpen: true
		}),
		// 老写法，兼容
		// data(){
		// 	return {
		// 		name: '666'
		// 	}  
		// },
		methods: {
			toggleModalState() {
				this.modalOpen = !this.modalOpen;
			},
			toggleModalState2() {
				console.log("66")
			}
		},
		components: {
			Modal
		},
	}
</script>

<!-- modalOpen api： 测试 -->
<!-- <script>
	import Modal from "./Modal.vue";
	import {
		ref
	} from "vue";
	export default {
		//如果你认为在这个例子中重构App组件以使用Composition API是没有必要的，那你的想法是正确的。
		//但是，如果这是一个更大的组件，或者我们需要与其他组件共享其功能，那么你就会发现它的用处
		// 意义：该模式是可选的，目前没有发现什么特别之处，代码层次不清晰
		//setup：该函数会自动加载
		setup() {
			//创建响应式属性：modalOpen：false;
			const modalOpen = ref(false);
			//创建响应式方法
			const toggleModalState = () => {
				modalOpen.value = !modalOpen.value;
			};

			return {
				modalOpen,
				toggleModalState
			}
		},
		components: {
			Modal,
		},
	};
</script> -->

<style>
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}
</style>
