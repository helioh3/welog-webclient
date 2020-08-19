
import IndexHome from '../components/site/IndexHome'

import LoginClient from '../components/site/pages/login/LoginClient'

import ListUsers from '../components/panel/pages/users/ListUsers'
import NewUser from '../components/panel/pages/users/NewUser'
import ViewUser from '../components/panel/pages/users/ViewUser'
import EditUser from '../components/panel/pages/users/EditUser'

import ListCompanies from '../components/panel/pages/companies/ListCompanies'
import ViewCompany from '../components/panel/pages/companies/ViewCompany'
import NewCompany from '../components/panel/pages/companies/NewCompany'
import EditCompany from '../components/panel/pages/companies/EditCompany'

import ListProviders from '../components/panel/pages/providers/ListProviders'
import NewProvider from '../components/panel/pages/providers/NewProvider'
import ViewProvider from '../components/panel/pages/providers/ViewProvider'
import EditProvider from '../components/panel/pages/providers/EditProvider'

import ListCategories from '../components/panel/pages/categories/ListCategories'
import AddCategory from '../components/panel/pages/categories/AddCategory'
import EditCategory from '../components/panel/pages/categories/EditCategory'

import ListExpenses from '../components/panel/pages/expenses/ListExpenses'
import NewExpense from '../components/panel/pages/expenses/NewExpense'
import ViewExpense from '../components/panel/pages/expenses/ViewExpense'
import EditExpense from '../components/panel/pages/expenses/EditExpense'
import PayExpense from '../components/panel/pages/expenses/PayExpense'

import IndexPanel from '../components/panel/IndexPanel'
import HomeDashboard from '../components/panel/pages/dashboard/HomeDashboard'

//My Routes of App
const routes = [
  
    // LANDING PAGE DA APLICAÇÃO
   
    { 
      path: '', component: LoginClient, name: 'login', meta: {auth: false} 
    
    },
  
    // PAINEL TOTAL DA APLICAÇÃO
    {
      path: '/painel', 
      component: IndexPanel,
      meta: {auth: true},
  
      children: [
        { path: '', component: HomeDashboard, name: 'painel.dashboard' },
  
        { path: 'usuarios', component: ListUsers, name: 'painel.usuarios'},
        { path: 'usuarios/adicionar', component: NewUser, name: 'painel.usuarios.adicionar' },
        { path: 'usuarios/:id/visualizar', component: ViewUser, name: 'painel.usuarios.visualizar'},
        { path: 'usuarios/:id/editar', component: EditUser , name: 'painel.usuarios.editar', props: true },
  
        { path: 'empresas', component: ListCompanies, name: 'painel.empresas'},
        { path: 'empresas/adicionar', component: NewCompany, name: 'painel.empresas.adicionar' },
        { path: 'empresas/:id/visualizar', component: ViewCompany, name: 'painel.empresas.visualizar', props: true },
        { path: 'empresas/:id/editar', component: EditCompany, name: 'painel.empresas.editar', props: true },
  
        { path: 'fornecedores', component: ListProviders, name: 'painel.fornecedores' },
        { path: 'fornecedores/adicionar', component: NewProvider, name: 'painel.fornecedores.adicionar' },
        { path: 'fornecedores/:id/visualizar', component: ViewProvider, name: 'painel.fornecedores.visualizar', props: true },
        { path: 'fornecedores/:id/editar', component: EditProvider, name: 'painel.fornecedores.editar', props: true },
  
        { path: 'categorias', component: ListCategories, name: 'painel.categorias' },
        { path: 'categorias/adicionar', component: AddCategory, name: 'painel.categorias.adicionar' },
        { path: 'categorias/:id/editar', component: EditCategory, name: 'painel.categorias.editar', props: true },
  
        { path: 'despesas', component: ListExpenses, name: 'painel.despesas'},
        { path: 'despesas/adicionar', component: NewExpense, name: 'painel.despesas.adicionar' },
        { path: 'despesas/:id/visualizar', component: ViewExpense, name: 'painel.despesas.visualizar', props: true },
        { path: 'despesas/:id/editar', component: EditExpense, name: 'painel.despesas.editar', props: true },
        { path: 'despesas/:id/pagar', component: PayExpense, name: 'painel.despesas.pagar', props: true },
  
      ]
    },
  ]

  export default routes