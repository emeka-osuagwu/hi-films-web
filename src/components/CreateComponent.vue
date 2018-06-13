<template>

<div class="content">
	<div class="part">
		<TopNavComponent></TopNavComponent>
		<div class="clearFloat"></div>
		<h2>Add new film</h2>
		<form @submit.prevent class="cmxform" id="contactForm">
		        <div>
		            <span><input v-model="name" type="text" id="name" placeholder="Film Name"/></span>
		        </div>
		        <div>
		            <span><input v-model="description" type="text" id="name" placeholder="Description"/></span>
		        </div>
		        <div>
		            <span><input v-model="photo" type="text" id="name" placeholder="Add image url"/></span>
		        </div>
		        <div>
		            <span><input v-model="video_url" type="text" id="name" placeholder="Add video url"/></span>
		        </div>
		        <div>
		            <span><input v-model="country" type="text" id="name" placeholder="Country"/></span>
		        </div>
		        <div>
		            <span><input v-model="ticket_price" type="text" id="name" placeholder="Ticket Price"/></span>
		        </div>
		        <div>
		            <span>
		            	<v-select  class="form-submit" placeholder="Add Rating" v-model="rating" :options="['1', '2', '3', '4' ,'5']"></v-select>
		            </span>
		        </div>
		        <div>
		            <span><input @click.prevent="login" type="submit" value="Submit"/></span>
		        </div>
		</form>
	</div>		
	<div class="clearFloat"></div>
</div>

</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'
	import vSelect from 'vue-select'

	import TopNavComponent from './CommonComponents/TopNavComponent.vue';

	export default {
		name: 'CreateComponent',
		components: {
		    TopNavComponent: TopNavComponent,
		    vSelect: vSelect
		},
		data() {
			return {
				name: '',
				video_url: '',
				photo: '',
				ticket_price: '',
				description: '',
				country: '',
			}
		},
		methods: {
			login() {

				if 
				(
					this.name == '' || this.name == null ||
					this.video_url == '' || this.video_url == null || 
					this.photo == '' || this.photo == null ||
					this.ticket_price == '' || this.name == null ||
					this.description == '' || this.description == null ||
					this.country == '' || this.country == null ||
					this.rating == '' || this.rating == null
				) 
				{
					alert('All input fields are required')
				}
				else
				{			
					axios.post(baseUrl + 'films/create', {
						'name': this.name,
						'video_url': this.video_url,
						'photo': this.photo,
						'ticket_price': this.ticket_price,
						'description': this.description,
						'country': this.country,
						'rating': this.rating				
					})
					.then(res => res.data.data)
					.then( res => {
						this.name = '',
						this.video_url = '',
						this.photo = '',
						this.ticket_price = '',
						this.description = '',
						this.country = '',
						alert('film created')
						this.$router.push('/films')
					})
					.catch(error => {
						alert('Invalid data entry')
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
