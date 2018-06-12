
<template>
	<div class="wrap">
		<div class="sidebar">
			<app-header></app-header>
			<app-genres></app-genres>
			<div class="clearFloat"></div>
		</div>

		<div class="content">
			<router-view/>
			<div class="clearFloat"></div>
			<app-footer></app-footer>
		</div>
		<div class="clearFloat"></div>
	</div>
</template>

<script>
	import Spinner from 'vue-simple-spinner'

	import FilmsComponent from './Components/CommonComponents/FilmsComponent.vue';
	import GenresComponent from './Components/CommonComponents/GenresComponent.vue';
	import FooterComponent from './Components/CommonComponents/FooterComponent.vue';
	import HeaderComponent from './Components/CommonComponents/HeaderComponent.vue';

	export default {
		components: {
		    Spinner,
		    appFilms: FilmsComponent,
		    appHeader: HeaderComponent,
		    appFooter: FooterComponent,
		    appGenres: GenresComponent
		},
		name: 'App'
	}
</script>

<style>
</style>
