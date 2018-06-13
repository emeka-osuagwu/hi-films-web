<template>
	<div class="part">
		<h2>Login</h2>
		<form @submit.prevent class="cmxform" id="contactForm">
		        <div>
		            <span><input v-model="name" type="text" id="name" placeholder="name"/></span>
		        </div>
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
</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	export default {
		name: 'RegisterComponent',
		data() {
			return {
				name: 'emeka osuagwu',
				email: 'emeka@gmail.com',
				password: 'password'
			}
		},
		methods: {
			login() {

				if (this.email == '' || this.email == null || this.password == '' || this.password == null || this.name == '' || this.name == null) {
					alert('name, email and password are required')
				}

				axios.post(baseUrl + 'user/register', {
					'name': this.name,
					'email': this.email,
					'password': this.password				
				})
				.then(res => res.data.data)
				.then( res => {
					localStorage.setItem('user_data', JSON.stringify(res));
					alert('account created and logged in ;)')
				})
				.catch(error => {
					alert('email already taken')
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
