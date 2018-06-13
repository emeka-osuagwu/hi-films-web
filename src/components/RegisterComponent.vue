<template>
	<div class="content">
		<div class="part">
			<TopNavComponent></TopNavComponent>
			<div class="clearFloat"></div>
			<div class="part">
				<h2>Register</h2>
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
		name: 'RegisterComponent',
		components: {
		    TopNavComponent: TopNavComponent,
		    appFooter: FooterComponent
		},
		data() {
			return {
				name: '',
				email: '',
				password: ''
			}
		},
		methods: {
			login() {

				if (this.email == '' || this.email == null || this.password == '' || this.password == null || this.name == '' || this.name == null) {
					alert('name, email and password are required')
				}
				else
				{
					axios.post(baseUrl + 'user/register', {
						'name': this.name,
						'email': this.email,
						'password': this.password				
					})
					.then(res => res.data.data)
					.then( res => {
						this.name = ""
						this.email = ""
						this.password = ""
						localStorage.setItem('user_data', JSON.stringify(res));
						alert('account created and logged in ;)')
						this.$router.push('/films')
					})
					.catch(error => {
						alert('email already taken')
					});
				}

				
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
