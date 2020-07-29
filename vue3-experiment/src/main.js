// src/main.js

import { createApp } from "vue";
import App from "./App.vue";

//现在，将全局改变Vue行为的全局API移至通过新方法创建的应用程序实例createApp，并且其影响现在仅限于该应用程序实例。
//意义在于：可以分别为不同的Vue实例设置全局属性，便于测试不同环境下的运行情况
// Before: 全局Vue对象添加
// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.ignoredElements = [/^app-/]
// Vue.use(/* ... */)
// Vue.mixin(/* ... */)
// Vue.component(/* ... */)
// Vue.directive(/* ... */)

// Vue.prototype.customProperty = () => {}

// new Vue({
//   render: h => h(App)
// }).$mount('#app')

//After：仅app对象添加
// import { createApp } from 'vue'
// import App from './App.vue'

// const app = createApp(App)

// app.config.isCustomElement = tag => tag.startsWith('app-')
// app.use(/* ... */)
// app.mixin(/* ... */)
// app.component(/* ... */)
// app.directive(/* ... */)
// app.pro

// app.config.globalProperties.customProperty = () => {}

// app.mount(App, '#app')


createApp(App).mount("#app");