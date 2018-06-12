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
		            	<img :src="film.photo" alt="">
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
		            <li>
		                <div class="preview"><a href="#"><img src="images/img1.jpg" alt="" /></a></div>
		                <div class="data">
		                    <div class="title">Jake Sully <span>on 23 jan 2011</span></div>
		                    <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
		                </div>
		                <div class="clearFloat"></div>
		            </li>
		        </ul>
		        <h2><a href="#" name="comment">Leave a Comment</a></h2>
		        <form class="cmxform" id="contactForm" method="post" action="?" >
		                <div>
		                    <span><input type="text" id="name" name="name" value="Name" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Name';}" /></span>
		                </div>
		                <div>
		                    <span><input type="text" id="email" name="email" value="Email" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Email';}"/></span>
		                </div>
		                <div>
		                    <span><textarea id="subject" name="Subject" onFocus="this.value = '';" onBlur="if (this.value == '') {this.value = 'Your feedback';}">Comment</textarea></span>
		                </div>
		                <div>
		                    <span><input class="submit" type="submit" value="Submit"/></span>
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
			}
		},
		methods: {
			getFilms(){
				axios.get(baseUrl + 'films/' + this.$route.params.slug)
				.then(res => res.data.data[0])
				.then( res => {
					console.log(res.name)
					this.film = res
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
