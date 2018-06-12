<template>
	<div class="grid">
		<div class="preview">
			<router-link :to="{ name: 'FilmComponent', params: { slug: film.slug }}">
				<img :src="film.photo" alt="#">
			</router-link>
		</div>
		<div class="data">
			<h3>
				<router-link :to="{ name: 'FilmComponent', params: { slug: film.slug }}">
					{{film.name}}
				</router-link>
			</h3>
			<div class="category">
				<span class="icon"></span> 
				<span>Tag name</span>
			</div>
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
		},
		computed: {
		}
	}
</script>

<style scoped>
	.content {
	     margin-left: none; 
	    margin-top: 20px;
	}
</style>
