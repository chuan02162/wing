import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: '/',
		component: ()=>import('../pages/index.vue')
	},
	{
		path: '/introduction',
		component: ()=>import('../pages/introduction.vue')
	},
	{
		path: '/edit',
		component: ()=>import('../pages/edit.vue')
	}
]

const router=createRouter({
	history: createWebHistory(),
	routes: routes
})

export default router