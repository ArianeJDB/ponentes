import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import AppRegistrationForm from '../components/AppRegistrationForm'
import Talks from '../views/Talks'
import TalkDetail from '../views/TalkDetail'
import Speakers from '../views/Speakers'
import SpeakerDetail from '../views/SpeakerDetail'
import Login from '../views/Login'
import SpeakerProfile from '../views/SpeakerProfile'
import EditProfile from '../views/EditProfile'
import NewTalk from '../views/NewTalk'
import EditTalk from '../views/EditTalk'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/registration',
    name: 'AppRegistrationForm',
    component: AppRegistrationForm
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
  {
    path: '/my-profile',
    name: 'SpeakerProfile',
    component: SpeakerProfile
  },
  {
    path: '/edit-profile/:id',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/speaker/:speakerId/new-talk',
    name: 'NewTalk',
    component: NewTalk
  },
  {
    path: '/speaker/:speakerId/edit-talk/:talkId',
    name: 'EditTalk',
    component: EditTalk
  },
  
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
