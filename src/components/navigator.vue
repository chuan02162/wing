<template>
	<el-col :xs="{span:6}" :sm="{span:5}" :md="{span:4}" :lg="{span:2}" :xl="{span:2}">
		<router-link class="router_link" v-bind="$attrs">
			<el-link class="menu">
				<slot></slot>
				{{title}}
			</el-link>
		</router-link>
	</el-col>
</template>
<script setup>
	const props=defineProps({
		title: String
	})
</script>
<style scoped>
	.router_link{
		text-decoration: none;
	}
	.menu{
		height:40px;
		background-color: #303133;
		font-size: 20px;
		color: white;
	}
</style>
