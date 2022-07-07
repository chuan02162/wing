<template>
<el-container class="page">
	<el-header class="header">
		<el-row>
			<el-col :xs="{span:7}" :sm="{span:6}" :md="{span:5}" :lg="{span:4}" :xl="{span:3}">
				<div>
					<img src="../assets/logo.png" class="logo" style="background-color:white;">
				</div>
			</el-col>
			<el-col :xs="{span:7, offset:3}" :sm="{span:6, offset:5}" :md="{span:5, offsets:10}" :lg="{span:4, offset:11}" :xl="{span:3, offset:12}">
				<el-input style="position:relative; top:35%;" v-model="for_search" placeholder="输入想要搜索的内容" :prefix-icon="Search" @change="send"></el-input>
			</el-col>
			<el-col :xs="{span:4, offset:1}" :sm="{span:4, offset:1}" :md="{span:4, offset:1}" :lg="{span:4, offset:1}" :xl="{span:4, offset:1}">
				<el-dropdown class="product" trigger="click" @visible-change="e=>check(e)">
					<span @click="modify">
						<el-icon>
							<Cpu />
						</el-icon>
						<span v-if="flag">人堆网</span>	
						<span v-else>微英控股官网</span>
						<el-icon>
							<arrow-down/>
						</el-icon>
					</span>
					<template #dropdown>
						<el-dropdown-menu>
							<el-dropdown-item>
								<el-link>人堆网</el-link>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-link>翅膀物流</el-link>
							</el-dropdown-item>
							<el-dropdown-item>
								<el-link>喜鹊云仓</el-link>
							</el-dropdown-item>
					  </el-dropdown-menu>
					</template>
				</el-dropdown>
			</el-col>
		</el-row>
		<el-row justify="center" class="menu">
			<el-col :xs="{span:1}" :sm="{span:1}" :md="{span:2}" :lg="{span:2}" :xl="{span:2}">
				<el-link class="menu">
					<el-icon><HomeFilled /></el-icon>
					关于我们
				</el-link>
			</el-col>
			<el-col :span="2">
				<el-link class="menu">
					<el-icon><Notebook /></el-icon>
					新闻动态
				</el-link>
			</el-col>
			<el-col :span="2">
				<el-link class="menu">
					<el-icon><Platform /></el-icon>
					工作机会
				</el-link>
			</el-col>
			<el-col :span="2">
				<el-link class="menu">
					<el-icon><Connection /></el-icon>
					联系我们
				</el-link>
			</el-col>
		</el-row>
	</el-header>
	<el-main class="main">
		<el-carousel height="450px">
	    	<el-carousel-item>
	        	<img src="../assets/carousel/3.png" class="img">
	    	</el-carousel-item>
			<el-carousel-item>
	        	<img :src="img" class="img">
	    	</el-carousel-item>
	    </el-carousel>
	</el-main>
	<el-footer height="100px" class="foot">
		<el-row justify="center">
			<el-col :span="2">备案</el-col>
		</el-row>
	</el-footer>
</el-container>
</template>

<!-- 微英控股官网
		人堆网
		翅膀物流
		喜鹊云仓
 -->

<script setup>
	import { ref } from 'vue';
	import { Search } from '@element-plus/icons-vue';
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
.main{
	margin:0;
	padding:0;
}
.menu{
	background-color: white;
	height:50px;
	font-size: 20px;
}
.header{
	padding: 0;
	margin: 0;
	height:150px;
	background-color: #303133;
}
.logo{
	float:left;
	height:100px;
	width:auto;
}
.product{
	position:relative;
	top:40%;
	color:white;
}
.carousel{
	height:100%;
	width:100%;
	align-content: center;
}
.page{
	height:100%;
	margin:0;
	padding:0;
}
.foot{
	margin:0;
	height:100px;
	background-color: #303133;
	color:white;
}
.img{
	height:100%;
	width:100%;
}
</style>
