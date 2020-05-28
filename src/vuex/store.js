import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'

import PreloaderPanel from './modules/preloaders/preloader'

import Expenses from './modules/expenses/expenses'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
      categories: Categories,
      PreloaderPanel,
      expenses: Expenses
    }
})

export default store