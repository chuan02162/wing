<template>
	<el-carousel height="600px">
    	<el-carousel-item>
        	<img src="../assets/carousel/3.png" class="img">
    	</el-carousel-item>
		<el-carousel-item>
        	<img :src="img" class="img">
    	</el-carousel-item>
    </el-carousel>
</template>

<script setup>
	import { ref } from 'vue';
	const img='https://cdn.luogu.com.cn/upload/image_hosting/q2l5ce09.png'
	const flag=ref(0);
	const for_search=ref('');
	const modify=()=>{
		flag.value^=1;
	}
	const check=(e)=>{
		if(!e)
			flag.value=0;
	}
	const send=()=>{
		console.log(for_search)
	}
</script>

<style scoped>
.img{
	height:100%;
	width:100%;
}
</style>
