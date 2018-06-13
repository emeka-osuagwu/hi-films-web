<template>
	<div class="txt-center margin-top-18">
		<ul class="top_nav emeka_nav">
			<li class="top_nav_list">
				<router-link to="/films">
					Welcome: {{reversedMessage}}
				</router-link>
			</li>
			<li v-if="!loggedIn" class="top_nav_list">
				<router-link to="/login">
					Login
				</router-link>
			</li>
			<li v-if="!loggedIn" class="top_nav_list">
				<router-link to="/register">
					Register
				</router-link>
			</li>
			<li v-if="loggedIn" class="top_nav_list">
				<router-link to="/films/create">
					Create Film
				</router-link>
			</li>
			<li v-if="loggedIn" class="top_nav_list" @click='logout'>
				Log out
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'TopNavComponent',
		data() {
			return {
				username: '',
				loggedIn: false
			}
		},
		methods: {
			logout() {
				this.reversedMessage = "Not authenticated"
				localStorage.removeItem('user_data');
				this.loggedIn = false
				this.$router.push('/films')
			}
		},
		created(){
		},
		computed: {
			reversedMessage: function () {
				const user = JSON.parse(localStorage.getItem('user_data'));

				if (user) 
				{
					this.loggedIn = true
					return this.username = user.name
				}
				else
				{
					return this.username = "Not authenticated"
				}
			}
		}
	}
</script>

