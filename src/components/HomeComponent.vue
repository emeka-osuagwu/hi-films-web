<template>
	<div>
		<div class="txt-center margin-top-18">
			<a href="#"><img src="../assets/images/ad_728x90.png" alt=""></a>
		</div>
		<div class="clearFloat"></div>
		<div class="part">
			<h2>Most Recent</h2>
			<app-films  v-for="film in films" :film="film" ></app-films>
			<div class="clearFloat"></div>
		</div>
		<div class="txt-center margin-bottom-18">
			<a href="#"><img src="../assets/images/ad_728x90.png" alt=""></a>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	import FilmsComponent from './CommonComponents/FilmsComponent.vue';

	export default {
		name: 'HomeComponent',
		props: ['films'],
		components: {
		    appFilms: FilmsComponent
		},
		data() {
			return {
			}
		},
		methods: {
		},
		created(){
		},
		computed: {
		}
	}
</script>

<style scoped>

</style>
