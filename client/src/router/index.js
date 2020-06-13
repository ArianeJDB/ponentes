import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from '../views/Registration'
import Talks from '../views/Talks'
import TalkDetail from '../views/TalkDetail'
import Speakers from '../views/Speakers'
import SpeakerDetail from '../views/SpeakerDetail'
import Login from '../views/Login'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'Registration',
    component: Registration
  },
  {
    path: '/talks',
    name: 'Talks',
    component: Talks
  },
  {
    path: '/speaker/:speakerId/talk/:talkId',
    name: 'TalkDetail',
    component: TalkDetail
  },
  {
    path: '/speakers',
    name: 'Speakers',
    component: Speakers
  },
  {
    path: '/speaker/:speakerId',
    name: 'SpeakerDetail',
    component: SpeakerDetail
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
