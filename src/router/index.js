import { createRouter,createWebHashHistory } from "vue-router";

import HomePage from '../components/HomePage'
import CareerPage from '../components/CareerPage'
import NotePage from '../components/NotePage'
import TechPage from '../components/TechPage'
import MusicPage from '../components/MusicPage'
import SharingPage from '../components/SharingPage'

/* Career Articles */
import Article01 from '../components/Article/Page/Article01'
import Article02 from '../components/Article/Page/Article02'
import Article03 from '../components/Article/Page/Article03'
import Article04 from '../components/Article/Page/Article04'

/* Music Article */
import MusicArticle01 from '../components/Article/Page/MusicArticle01'

/* Tech Article */
import TechArticle01 from '../components/Article/Page/TechArticle01'

/* Love Article */
import LoveArticle01 from '../components/Article/Page/LoveArticle01'
import LoveArticle02 from '../components/Article/Page/LoveArticle02'

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