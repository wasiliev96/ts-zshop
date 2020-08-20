import Vue from 'vue'
import VueRouter, {RouteConfig} from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/new',
        name: 'New',
        component: () => import(/* webpackChunkName: "new" */ '../views/New.vue')
    },
    {
        path: '/sale',
        name: 'Sale',
        component: () => import(/* webpackChunkName: "sale" */ '../views/Sale.vue')
    },
    {
        path: '/reviews',
        name: 'Reviews',
        component: () => import(/* webpackChunkName: "reviews" */ '../views/Reviews.vue')
    },
    {
        path: '/detailsstrip/:id',
        name: 'DetailsStrip',
        component: () => import(/* webpackChunkName: "detailsstrip" */ '../views/DetailsStrip.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
