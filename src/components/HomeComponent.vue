<template>
	<div class="content">
		<div class="part">
			<TopNavComponent></TopNavComponent>
			<div class="clearFloat"></div>
			<h2>Most Recent</h2>
			<app-films  v-for="film in films" :film="film" ></app-films>
			<div class="clearFloat"></div>
		</div>		
		<div class="clearFloat"></div>
		<app-footer></app-footer>
	</div>
</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	import FilmsComponent from './CommonComponents/FilmsComponent.vue';
	import TopNavComponent from './CommonComponents/TopNavComponent.vue';
	import FooterComponent from './CommonComponents/FooterComponent.vue';

	export default {
		name: 'HomeComponent',
		props: ['films'],
		components: {
		    appFilms: FilmsComponent,
		    TopNavComponent: TopNavComponent,
		    appFooter: FooterComponent
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

	.preview {
	    height: 172px;
	    background: gray;
	}

	ul.top_nav {
	    float: left;
	    margin-left: -1px;
	}

	li.top_nav_list {
	    /* padding: 0px 20px; */
	    margin-right: 30px;
	    margin-bottom: 30px;
	}
</style>
