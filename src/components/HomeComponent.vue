<template>
	<div>
		<h1>cdlfvdfdkfdkjf</h1>
	</div>
</template>

<script>

	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	export default {
		name: 'HomeComponent',
		data() {
			return {
				msg: 'emeka'
			}
		},
		methods: {
			getFilms(){
				axios.get(baseUrl + 'films')
				.then(
					res => {
						console.log(res)
					}
				)
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
