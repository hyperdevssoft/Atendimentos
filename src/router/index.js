import Vue from 'vue'
import VueRouter from 'vue-router'

const RootLogin = () => import('../components/login/RootLogin')
const LoginBar = () => import('../components/templates/bars/LoginBar')
const AtendimentoBar = () => import('../components/templates/bars/AtendimentoBar')
const RootAtendimento = () => import('../components/atendimento/RootAtendimento')
const ListAtendimento = () => import('../components/atendimento/ListAtendimento')
const CadAtendimento =  () => import('../components/atendimento/CadAtendimento')
const EditAtendimento = () => import('../components/atendimento/EditAtendimento')
const RootCliente = () => import('../components/cliente/RootCliente')
const ListCliente = () => import('../components/cliente/ListCliente')
const CadCliente = () => import('../components/cliente/CadCliente')
const RootTecnico = () => import('../components/tecnico/RootTecnico')
const ListTecnico = () => import('../components/tecnico/ListTecnico')
const CadTecnico = () => import('../components/tecnico/CadTecnico')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    components:{
      page: RootLogin
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
  {
    path: '/atendimentos',
    components:{
      page: RootAtendimento
    },
    children:[
      {
        path:'',
        components:{
          appbar: AtendimentoBar,
          content: ListAtendimento
        },
      },
      {
        path: 'cadastro/',
        components:{
          appbar: AtendimentoBar,
          content: CadAtendimento
        }
      },
      {
        path: ':codigo/editar/',
        props: true,
        name: 'editarAtendimento',
        components:{
          appbar: AtendimentoBar,
          content: EditAtendimento
        }
      }
    ]
  },
  {
    path: '/clientes/',
    components:{
      page: RootCliente
    },
    children:[
      {
        path: '',
        components:{
          appbar: AtendimentoBar,
          content: ListCliente
        }
      },
      {
        path: 'cadastro/',
        components:{
          appbar: AtendimentoBar,
          content: CadCliente
        }
      }
    ]
  },
  {
    path: '/tecnicos/',
    components:{
      page: RootTecnico
    },
    children:[
      {
        path: '',
        components:{
          appbar: AtendimentoBar,
          content: ListTecnico
        }
      },
      {
        path: 'cadastro/',
        components:{
          appbar: AtendimentoBar,
          content: CadTecnico
        }
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
