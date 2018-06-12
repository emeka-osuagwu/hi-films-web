
<template>
	<div>
		<div v-if="isLoading" class="Absolute-Center">
			<Spinner></Spinner>
		</div>
		<div v-if="!isLoading" class="wrap">
			<div class="sidebar">
				<app-header></app-header>
				<app-genres></app-genres>
				<div class="clearFloat"></div>
			</div>
			<div class="content">
				<router-view v-on:event-page-loader="updateSpinner" v-bind:films="films" />
				<div class="clearFloat"></div>
				<app-footer></app-footer>
			</div>
			<div class="clearFloat"></div>
		</div>
	</div>
</template>

<script>

	import axios from "axios"
	import Spinner from 'vue-simple-spinner'
	import { baseUrl } from './helper/Url'
	import { getHeader } from './helper/Header'
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
		name: 'App',
		data() {
			return {
				films: {},
				isLoading: true
			}
		},
		methods: {
			updateSpinner(state) {
				this.isLoading = state.loading
			},
			getFilms() {
				axios.get(baseUrl + 'films')
				.then(res => res.data)
				.then( res => {
					this.films = res.data
					this.updateSpinner({loading: false})
					this.$emit('event-page-loader', {loading: false});
				})
			}
		},
		created() {
			this.getFilms()
		}
	}
</script>

<style>
</style>
