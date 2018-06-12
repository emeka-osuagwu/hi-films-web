import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import FilmComponent from '@/components/FilmComponent'
import LoginComponent from '@/components/LoginComponent'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', redirect: { name: 'HomeComponent' }},
		{path: '/films', name: 'HomeComponent', component: HomeComponent},
		{path: '/login', name: 'LoginComponent', component: LoginComponent},
		{path: '/films/:slug', name: 'FilmComponent', component: FilmComponent}
	]
})
