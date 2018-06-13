<template>
	<div>
		<div class="content">
		    <div class="txt-center margin-top-18">
		        <a href="#"><img src="images/ad_728x90.png" alt=""></a>
		    </div>
		    <div class="clearFloat"></div>
		    <div class="part">
		        <h1><a href="#">{{film.name}}</a></h1>
		        <div class="player">
		            <div class="video">
		            	<router-link :to="film.video_url" target="_blank">
		            		<img class="video_image" :src="film.photo" alt="">
		            	</router-link>
		            </div>
		            <div class="clearFloat"></div>
		            <div class="desc">
		                <p>{{film.description}}</p>
		            </div>
		            <div class="clearFloat"></div>
		        </div>
		        <div class="clearFloat"></div>
		        <div class="form comment">
		        <h2></h2>
		        <ul class="list">
		            <li v-for="comment in film.comments">
		                <div class="preview"><a href="#"><img src="images/img1.jpg" alt="" /></a></div>
		                <div class="data">
		                    <div class="title">{{comment.name}} <span>{{comment.created_at}}</span></div>
		                    <p>{{comment.comment}}</p>
		                </div>
		                <div class="clearFloat"></div>
		            </li>
		        </ul>
		        <h2><a href="#" name="comment">Leave a Comment</a></h2>
		        <form @submit.prevent class="cmxform" id="contactForm">
		                <div>
		                    <span><input v-model="name" type="text" id="name" name="name" value="Name" placeholder="Name" /></span>
		                </div>
		                <div>
		                    <span><textarea v-model="message" id="subject" name="Subject" placeholder="Comment">Comment</textarea></span>
		                </div>
		                <div>
		                    <span><input @click.prevent="sendComment" type="submit" value="Submit"/></span>
		                </div>
		        </form>
		        <div class="clearFloat"></div>
		        </div>
		    </div>
		    <div class="txt-center margin-top-18">
		        <a href="#"><img src="images/ad_728x90.png" alt=""></a>
		    </div>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	import FilmsComponent from './CommonComponents/FilmsComponent.vue';

	export default {
		name: 'FilmComponent',
		props: ['slug'],
		components: {
		},
		data() {
			return {
				film: null,
				comments: [],
				name: '',
				message: ''
			}
		},
		methods: {
			getFilms(){
				axios.get(baseUrl + 'films/' + this.$route.params.slug)
				.then(res => res.data.data[0])
				.then( res => {
					this.film = res
				})
			},
			sendComment(){

				const auth = localStorage.getItem('user_data');

				if (!auth) {
					alert('you need to login to make a comment')
				}
				else if (this.name == "" || this.message == "" || this.name == null || this.message == null) 
				{
					alert('name and comment field are required')
				}
				else
				{
					axios.post(baseUrl + 'films/' + this.film.id + '/comment', {
						'comment': this.message,
						name: this.name,
						film_id: this.film.id					
					})
					.then(res => res.data.data)
					.then( res => {
						this.film.comments.push(res)
						this.message = ""
						this.name = ""
					})
					
				}
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
