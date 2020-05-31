import Vue from "vue"
import Loading from './index.vue'
let LoadingConstructor = Vue.extend(Loading);
let loadingCst = function (options) {
	
	options = Object.assign(options||{},{
		type: 1 //1是页面loading浮层
	})

	let instance = new LoadingConstructor(options);
	document.body.appendChild(instance.$mount().$el);

	return instance;
}

import More from './more.vue'
Loading.install = function(Vue){
	Vue.component(More.name, More);
	Vue.prototype.$loading = loadingCst;
}

export default Loading