<template>
	<div>
		<div class="content">
		    <div class="txt-center margin-top-18">
		        <a href="#"><img src="images/ad_728x90.png" alt=""></a>
		    </div>
		    <div class="clearFloat"></div>
		    <div class="part">
		        <h1><a href="#">Video Title</a></h1>
		        <div class="player">
		            <div class="video"><img src="images/img2.jpg" alt=""></div>
		            <div class="share">
		                <div class="title">Share this</div>
		                <ul>
		                    <li><a href="#"><span class="icon like"></span> Like</a></li>
		                    <li><a href="#"><span class="icon fb"></span> Share</a></li>
		                    <li><a href="#"><span class="icon twitter"></span> Tweet</a></li>
		                    <li><a href="#"><span class="icon stumble"></span> Stumble upon</a></li>
		                    <li><a href="#comment"><span class="icon comments"></span> comment</a></li>
		                    <li><span class="icon views"></span> 200 Views</li>
		                </ul>
		            </div>
		            <div class="clearFloat"></div>
		            <div class="desc">
		                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
		            </div>
		            <div class="clearFloat"></div>
		        </div>
		        <div class="clearFloat"></div>
		        <div class="form comment">
		        <h2>0 Comment's</h2>
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
		        <div class="guide">
		            <h4>Should</h4>
		                <ul>
		                    <li>Feel free to leave a comment</li>
		                    <li>Express yourself</li>
		                    <li>Be creative</li>
		                </ul>                                    
		            <h4>Should not</h4>
		                <ul>
		                    <li>spam</li>
		                    <li>insult other commenters</li>
		                </ul>                                    
		        </div>
		        <div class="clearFloat"></div>
		        </div>
		    </div>
		    <div class="txt-center margin-top-18">
		        <a href="#"><img src="images/ad_728x90.png" alt=""></a>
		    </div>
		    <div class="clearFloat"></div>
		    <footer>
		                <div class="about">
		                    <div class="title">About Us</div>
		                    <p>Faworki bonbon cupcake apple pie halvah. Topping gummies faworki sweet roll dragée chocolate bar tootsie roll gummies marzipan. Chocolate toffee marzipan marzipan cookie bonbon. Danish candy topping marshmallow faworki tiramisu bear claw applicake cupcake.<a href="#">read more &raquo;</a></p>
		                </div>
		                <ul>
		                    <li class="title">Menu Name</li>
		                    <li><a href="#">Home</a></li>
		                    <li><a href="#">Downloads</a></li>
		                    <li><a href="#">Uploads</a></li>
		                    <li><a href="feedback.html">Contact</a></li>
		                    <li><a href="#">Support</a></li>
		                    <li><a href="#">About</a></li>
		                </ul>
		                <ul>
		                    <li class="title">Menu Name</li>
		                    <li><a href="#">Home</a></li>
		                    <li><a href="#">Downloads</a></li>
		                    <li><a href="#">Uploads</a></li>
		                    <li><a href="feedback.html">Contact</a></li><li><a href="#">Support</a></li>
		                    <li><a href="#">About</a></li>
		                </ul>
		                <div class="clearFloat"></div>
		                <div class="copy">
		                    <p>&copy; 2012 Mad. All Rights Reserved | Design by <a href="http://w3layouts.com">W3Layouts</a></p>
		                </div>
		    </footer>
		</div>
	</div>
</template>

<script>
	import axios from "axios"
	import { getHeader } from '../helper/Header'
	import { baseUrl } from '../helper/Url'

	import FilmsComponent from './CommonComponents/FilmsComponent.vue';
	import GenresComponent from './CommonComponents/GenresComponent.vue';
	import FooterComponent from './CommonComponents/FooterComponent.vue';
	import HeaderComponent from './CommonComponents/HeaderComponent.vue';

	export default {
		name: 'FilmComponent',
		components: {
		    appFilms: FilmsComponent,
		    appHeader: HeaderComponent,
		    appFooter: FooterComponent,
		    appGenres: GenresComponent
		},
		data() {
			return {
				films: null,
				loading: true,
				isLogin: false
			}
		},
		methods: {
			getFilms(){
				axios.get(baseUrl + 'films')
				.then(res => res.data)
				.then( res => {
					this.films = res.data
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
