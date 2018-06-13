<template>
	<div class="txt-center margin-top-18">
		<ul class="top_nav">
			<li class="top_nav_list">
				<router-link to="/films">
					Home
				</router-link>
			</li>
			<li class="top_nav_list">
				<router-link to="/login">
					Login
				</router-link>
			</li>
			<li class="top_nav_list">
				<router-link to="/register">
					Register
				</router-link>
			</li>
			<li class="top_nav_list">
				Welcome: EMeka
			</li>
		</ul>
	</div>

</template>

<script>
	export default {
		name: 'TopNavComponent',
		methods: {
		},
		created(){
		},
		computed: {
		}
	}
</script>

<style scoped>
.txt-center{
	margin-top: 30px;
}
</style>
