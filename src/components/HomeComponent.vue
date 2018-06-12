<template>
	<div class="wrap">
		<div class="sidebar">
			<app-header></app-header>
			<app-genres></app-genres>
			<div class="clearFloat"></div>
		</div>

		<div class="content">
			<div class="txt-center margin-top-18">
				<a href="#"><img v-bind:src="images/ad_728x90.png" alt=""></a>
			</div>
			<div class="clearFloat"></div>
			<div class="part">
				<h2>Most Recent</h2>
				<app-films></app-films>
				<div class="clearFloat"></div>
			</div>
			<div class="txt-center margin-bottom-18">
				<a href="#"><img src="images/ad_728x90.png" alt=""></a>
			</div>
			<div class="clearFloat"></div>
			<app-footer></app-footer>
		</div>
		<div class="clearFloat"></div>
	</div>
</template>


<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	import FilmsComponent from './CommonComponents/FilmsComponent.vue';
	import GenresComponent from './CommonComponents/GenresComponent.vue';
	import FooterComponent from './CommonComponents/FooterComponent.vue';
	import HeaderComponent from './CommonComponents/HeaderComponent.vue';


	export default {
		name: 'HomeComponent',
		components: {
		    appFilms: FilmsComponent,
		    appHeader: HeaderComponent,
		    appFooter: FooterComponent,
		    appGenres: GenresComponent
		},
		data() {
			return {
				loading: true,
				isLogin: false
			}
		},
		methods: {
			getFilms(){
				axios.get(baseUrl + 'films')
				.then(res => res.data)
				.then( res => {
					console.log(res)
				})
			}
		},
		created(){
			this.getFilms()
		},
		computed: {
		}
	}
</script>

<style scoped>

</style>
