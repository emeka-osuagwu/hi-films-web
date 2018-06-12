import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import FilmComponent from '@/components/FilmComponent'

Vue.use(Router)

export default new Router({
	routes: [
		{ path: '/', redirect: { name: 'HomeComponent' }},
		{path: '/films', name: 'HomeComponent', component: HomeComponent},
		{path: '/films/:slug', name: 'FilmComponent', component: FilmComponent}
	]
})
