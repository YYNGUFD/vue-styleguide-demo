import rLayout from "./index.vue"  
rLayout.install = function(Vue){
	Vue.component(rLayout.name, rLayout); 
}

export default rLayout;