<template>
	<div id="app">
		<!-- <spinner></spinner> -->
		<router-view/>
	</div>
</template>

<script>
	import Spinner from 'vue-simple-spinner'
	export default {
		components: {
		    Spinner
		},
		name: 'App'
	}
</script>

<style>
</style>
