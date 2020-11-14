<template>

<!-- component -->
	<div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
		<form @submit.prevent="onSubmit">
			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-first-name">
						Nome da categoria *
					</label>
					<input v-model="category.nome" 
						class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" type="text" placeholder="Nome da categoria"
						oninput="this.value = this.value.toUpperCase()"	
					>			
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>
			</div>

			<div class="mt-4">
				<button class="mr-4 px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Salvar</button>
				<button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
					<router-link class="inline-block  px-5 py-2" :to="{name: 'painel.categorias'}">Cancelar</router-link>
				</button>
			</div>
		</form>
	</div>
</template>

<script>
    export default {
        props: {
            value: {
                require: false,
                type: Object |  Array,
                default: ()=> {
                    return {
                        id: '',
                        nome: ''
                    }
                }
            },
            update: {
                require: false,
                type: Boolean,
                default: false,
            }
        },

        data (){
            return {
                category: {},
                errors: {}
            }
        },
        
        methods: {
            onSubmit () {
                const action = this.update ? 'updateCategory' : 'addCategories'

                this.$store.dispatch(action, this.category)
                    .then( ()=> {
                        this.$snotify.success('Salvo com sucesso')
                        this.$router.push({name: 'painel.categorias'})
                    })
                    .catch(error => {
                        this.$snotify.error('Não foi possível salvar', 'Erro')

                        // console.log(error.response.data.errors)
                        this.errors = error.response.data.errors
                    })
            }
		},
		
		watch: {
            value: {
                immediate: true,
                handler (value) {
                    this.category = { ...value }
                }
            }
        }

    }
</script>

<style scoped> 
    .has-error{
        border: 2px solid red;
        
    }

</style>
