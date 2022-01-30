import { createRouter, createWebHashHistory } from 'vue-router'
import Home from "../components/Home";
import Post from "../components/Post";

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/post:id',
    name: 'Post',
    component: Post,
    // component: () => import(/* webpackChunkName: "about" */ '../components/Post')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
