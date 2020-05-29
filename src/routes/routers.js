import Vue from 'vue'
import VueRouter from 'vue-router'

import ListUsers from '../components/panel/pages/users/ListUsers'

import ListCategories from '../components/panel/pages/categories/ListCategories'
import AddCategory from '../components/panel/pages/categories/AddCategory'
import EditCategory from '../components/panel/pages/categories/EditCategory'

import ListExpenses from '../components/panel/pages/expenses/ListExpenses'
import NewExpense from '../components/panel/pages/expenses/NewExpense'
import ViewExpense from '../components/panel/pages/expenses/ViewExpense'
import EditExpense from '../components/panel/pages/expenses/EditExpense'



import IndexPanel from '../components/panel/IndexPanel'

import HomeDashboard from '../components/panel/pages/dashboard/HomeDashboard'

Vue.use(VueRouter)

//My Routes of App
const routes = [

  {
    path: '/painel', 
    component: IndexPanel,

    children: [
      { path: '', component: HomeDashboard, name: 'painel.dashboard' },

      {path: 'usuarios', component: ListUsers, name: 'painel.usuarios'},

      { path: 'categorias', component: ListCategories, name: 'painel.categorias' },
      { path: 'categorias/adicionar', component: AddCategory, name: 'painel.categorias.adicionar' },
      { path: 'categorias/:id/editar', component: EditCategory, name: 'painel.categorias.editar', props: true },

      { path: 'despesas', component: ListExpenses, name: 'painel.despesas'},
      { path: 'despesas/adicionar', component: NewExpense, name: 'painel.despesas.adicionar' },
      { path: 'despesas/:id/visualizar', component: ViewExpense, name: 'painel.despesas.visualizar', props: true },
      
      { path: 'despesas/:id/editar', component: EditExpense, name: 'painel.despesas.editar', props: true },

    ]
  },

]

const router = new VueRouter({
  routes
})

export default router