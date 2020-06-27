import Vue from 'vue'
import Vuex from 'vuex'

import PreloaderPanel from './modules/preloaders/preloader'

import Users from './modules/users/index'

import Companies from './modules/companies/index'

import Providers from './modules/providers/index'

import Categories from './modules/categories/categories'

import Expenses from './modules/expenses/index'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      PreloaderPanel,
      users: Users,
      companies: Companies,
      categories: Categories, 
      expenses: Expenses,
      providers: Providers
    }
})

export default store