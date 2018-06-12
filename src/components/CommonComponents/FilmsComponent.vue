<template>
	<div class="grid">
		<div class="preview">
			<router-link :to="{ name: 'FilmComponent', params: { slug: film.slug }}">
				<img src="../../assets/images/img.jpg" alt="#">
			</router-link>
		</div>
		<div class="data">
			<h3>
				<router-link :to="{ name: 'FilmComponent', params: { slug: film.slug }}">
					{{film.name}}
				</router-link>
			</h3>
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
