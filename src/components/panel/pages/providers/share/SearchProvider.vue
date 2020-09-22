<template>
    <!-- <div>
        <form action="" @submit.prevent="search">
            <div action="" class="search ma-r-big">
                <input type="text" class="search__input" v-model="filter" placeholder="pesquisar">
                
            </div>
            
        </form>

    </div> -->

	<!-- COMPONENT OF SEARCH -->
	<div class="mt-3 flex flex-col sm:flex-row">
		<div class="flex">
			<div class="relative">
				<select class="appearance-none h-full rounded-l border block appearance-none w-full bg-gray-100 border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
					<option>5</option>
					<option>10</option>
					<option>20</option>
				</select>

				<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</div>
			</div>

			<div class="relative">
				<form action="" @submit.prevent="search"></form>
				<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
					<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
					</svg>
				</div>
			</div>
		</div>

		<div class="block relative mt-3 sm:mt-0">
			<span class="absolute inset-y-0 left-0 flex items-center pl-2">
				<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
					<path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
				</svg>
			</span>

			<input v-model="filter" placeholder="Pesquisar" class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-3 w-full bg-gray-100 text-sm placeholder-gray-500 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
		</div>
	</div><!--/COMPONENT OF SEARCH -->
</template>
<script>
export default {
    data () {
        return {
            filter: ''
        }
    },

    methods: {
        search () {
            this.$emit('search', this.filter)
        }
    }
}
</script>

<style lang="">
    
</style>
