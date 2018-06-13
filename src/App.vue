<template>
	<div>
		<div v-if="isLoading" class="Absolute-Center">
			<Spinner></Spinner>
		</div>
		<div v-if="!isLoading" class="wrap">
				<router-view v-on:event-page-loader="updateSpinner" v-bind:films="films" />
		</div>
	</div>
</template>

<script>

	import axios from "axios"
	import Spinner from 'vue-simple-spinner'
	import { baseUrl } from './helper/Url'
	import { getHeader } from './helper/Header'
	import FilmsComponent from './Components/CommonComponents/FilmsComponent.vue';
	import FooterComponent from './Components/CommonComponents/FooterComponent.vue';

	export default {
		components: {
		    Spinner,
		    appFilms: FilmsComponent,
		    appFooter: FooterComponent
		},
		name: 'App',
		data() {
			return {
				films: {},
				user: {},
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
			},
		},
		created() {
			this.getFilms()
		}
	}
</script>

<style scoped>
	.content {
	    margin-left: 101px;
	    margin-top: 20px;
	}

</style>
