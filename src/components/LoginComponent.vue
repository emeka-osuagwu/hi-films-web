<template>
	<div class="content">
		<div class="part">
			<TopNavComponent></TopNavComponent>
			<div class="clearFloat"></div>
			<div class="part">
				<h2>Login</h2>
				<form @submit.prevent class="cmxform" id="contactForm">
				        <div>
				            <span><input v-model="email" type="text" id="name" placeholder="email"/></span>
				        </div>
				        <div>
				            <span><input v-model="password" type="password" id="name" placeholder="password"/></span>
				        </div>
				        <div>
				            <span><input @click.prevent="login" type="submit" value="Submit"/></span>
				        </div>
				</form>
			</div>
		</div>		
		<div class="clearFloat"></div>
		<app-footer></app-footer>
	</div>

</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	import TopNavComponent from './CommonComponents/TopNavComponent.vue';
	import FooterComponent from './CommonComponents/FooterComponent.vue';

	export default {
		name: 'LoginComponent',
		components: {
		    TopNavComponent: TopNavComponent,
		    appFooter: FooterComponent
		},
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			login() {
				if (this.email == '' || this.email == null || this.password == '' || this.password == null) {
					alert('email and password is required')
				}

				axios.post(baseUrl + 'user/login', {
					'email': this.email,
					password: this.password				
				})
				.then(res => res.data.data)
				.then( res => {
					this.password = ""
					this.email = ""
					localStorage.setItem('user_data', JSON.stringify(res));
					this.$router.push('/films')
				})
				.catch(error => {
					alert('invalid user name of password')
				});
			}
		},
		created(){
		},
		computed: {
		}
	}
</script>

<style scoped>
	input#name {
	    width: 50%;
	    padding: 10px;
	    margin: 10px 2px;
	}

	input[type="submit"] {
	    padding: 10px 50px;
	}
</style>
