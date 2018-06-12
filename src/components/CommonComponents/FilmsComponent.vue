<template>
	<div class="grid">
		<div class="preview">
			<a href="video-play.html" title=""><img src="../../assets/images/img.jpg" alt="#"></a>
		</div>
		<div class="data">
			<h3><a href="video-play.html">{{film.name}}</a></h3>
			<div class="category"><span class="icon"></span> <a href="#">Tag name</a>, <a href="#">Tag</a></div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'FilmsComponent',
		props: ['film'],
		methods: {
		},
		created(){
			console.log(this.film)
		},
		computed: {
		}
	}
</script>

<style scoped>

</style>
