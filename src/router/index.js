import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import FilmComponent from '@/components/FilmComponent'
import LoginComponent from '@/components/LoginComponent'
import CreateComponent from '@/components/CreateComponent'
import RegisterComponent from '@/components/RegisterComponent'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', redirect: { name: 'HomeComponent' }},
		{path: '/films', name: 'HomeComponent', component: HomeComponent},
		{path: '/films/create', name: 'CreateComponent', component: CreateComponent},
		{path: '/login', name: 'LoginComponent', component: LoginComponent},
		{path: '/register', name: 'RegisterComponent', component: RegisterComponent},
		{path: '/films/:slug', name: 'FilmComponent', component: FilmComponent}
	]
})
