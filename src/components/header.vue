<template>
	<div class="page">
		<el-row>
			<el-col :xs="{span:7, offset:1}" :sm="{span:6, offset:1}" :md="{span:5, offset:1}" :lg="{span:4, offset:1}" :xl="{span:3, offset:1}">
				<div>
					<img src="../assets/logo.png" class="logo" style="background-color:white;">
				</div>
			</el-col>
			<el-col :xs="{span:7, offset:2}" :sm="{span:6, offset:4}" :md="{span:5, offsets:9}" :lg="{span:4, offset:10}" :xl="{span:3, offset:11}">
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
						<el-icon v-if="flag">
							<arrow-up/>
						</el-icon>
						<el-icon v-else>
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
		<el-row style="background-color:#303133; height:20px;">
		</el-row>
		<el-row justify="center" class="menu">
			<navigator title="关于我们" to="/"><el-icon><HomeFilled /></el-icon></navigator>
			<navigator title="新闻动态" to="introduction"><el-icon><Notebook /></el-icon></navigator>
			<navigator title="工作机会" to="introduction"><el-icon><Platform /></el-icon></navigator>
			<navigator title="联系我们" to="introduction"><el-icon><Connection /></el-icon></navigator>
		</el-row>
		<el-row style="background-color:#303133; height:20px;"></el-row>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { Search } from '@element-plus/icons-vue';

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
	.page{
	margin:0;
	padding:0;
	}
	.menu{
		height:40px;
		background-color: #303133;
		font-size: 20px;
		color: white;
	}
	.logo{
	float:left;
	height:100px;
	width:auto;
	}
	.product{
		position:relative;
		top:40%;
		color:#303133;
	}
</style>