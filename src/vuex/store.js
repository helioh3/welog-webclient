import Vue from 'vue'
import Vuex from 'vuex'

import PreloaderPanel from './modules/preloaders/preloader'

import Auth from './modules/auth/index'

import Users from './modules/users/index'

import Companies from './modules/companies/index'

import Providers from './modules/providers/index'

import Bankaccounts from './modules/bankaccounts/index'

import Categories from './modules/categories/categories'

import Expenses from './modules/expenses/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      PreloaderPanel,
      auth: Auth,
      users: Users,
      companies: Companies,
      categories: Categories, 
      expenses: Expenses,
      providers: Providers,
      bankaccounts: Bankaccounts
    }
})

export default store
