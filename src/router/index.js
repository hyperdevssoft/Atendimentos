import Vue from 'vue'
import VueRouter from 'vue-router'

const LoginHome = () => import('../components/login/LoginPage')
const LoginBar = () => import('../components/templates/bars/LoginBar')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components:{
      page: LoginHome
    },
    children:[
      {
        path:'',
        components:{
          appbar: LoginBar
        }
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
