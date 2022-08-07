import { createRouter,createWebHashHistory } from "vue-router";

import HomePage from '../components/HomePage.vue'
import CareerPage from '../components/CareerPage.vue'
import NotePage from '../components/NotePage.vue'
import TechPage from '../components/TechPage.vue'
import MusicPage from '../components/MusicPage.vue'
import SharingPage from '../components/SharingPage.vue'

/* Career Articles */
import Article01 from '../components/Article/Page/Article01.vue'
import Article02 from '../components/Article/Page/Article02.vue'
import Article03 from '../components/Article/Page/Article03.vue'
import Article04 from '../components/Article/Page/Article04.vue'

/* Music Article */
import MusicArticle01 from '../components/Article/Page/MusicArticle01.vue'

/* Tech Article */
import TechArticle01 from '../components/Article/Page/TechArticle01.vue'

/* Love Article */
import LoveArticle01 from '../components/Article/Page/LoveArticle01.vue'
import LoveArticle02 from '../components/Article/Page/LoveArticle02.vue'

const routes = [
	{
		path:'/',
		component: HomePage,
		children:[
			{
				path:'/',
				component: CareerPage,
			},
			{
				name: 'CareerPage',
				path:'career',
				component: CareerPage,
			},
			{
				name: 'NotePage',
				path:'note',
				component: NotePage,
			},
			{
				name: 'TechPage',
				path:'tech',
				component: TechPage,
			},
			{
				name: 'MusicPage',
				path:'music',
				component: MusicPage,
			},
			{
				name: 'SharingPage',
				path:'sharing',
				component: SharingPage,
			}
		]
	},
	{
		name: 'Article-01',
		path:'/Article-01',
		component: Article01
	},
	{
		name: 'Article-02',
		path:'/Article-02',
		component: Article02
	},
	{
		name: 'Article-03',
		path:'/Article-03',
		component: Article03
	},
	{
		name: 'Article-04',
		path:'/Article-04',
		component: Article04
	},
	{
		name: 'MusicArticle-01',
		path:'/MusicArticle-01',
		component: MusicArticle01
	},
	{
		name: 'TechArticle-01',
		path:'/TechArticle-01',
		component: TechArticle01
	},
	{
		name: 'LoveArticle-01',
		path:'/LoveArticle-01',
		component: LoveArticle01
	},
	{
		name: 'LoveArticle-02',
		path:'/LoveArticle-02',
		component: LoveArticle02
	},
]

export default createRouter({
	history: createWebHashHistory(),
	routes: routes
})