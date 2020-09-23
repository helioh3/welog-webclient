<template>
    <!-- <div>
        <form @submit.prevent="onSubmit">
            <div class="box-form">
                <h2 class="box-form__title">Dados da empresa</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">logo</label>
                        <input type="file" class="field__input" > 
                    </div>
            
                    <div class="field">
                        <label class="field__label">Empresa</label>
                        <input class="field__input" type="text" v-model="company.empresa"> 
                    </div>
            
            
                    <div class="field">
                        <label class="field__label">CNPJ</label>
                        <input class="field__input" type="text" v-model="company.cnpj"> 
                    </div>
             
                    <div class="field">
                        <label class="field__label">Cidade</label>
                        <div class="field__select">
                            <select>
                                <option value="">Dianopolis</option>
                                <option value="">Bahia</option>
                                <option value="">Selecione</option>
                            </select> 
                        </div>
                    </div>

                    <div class="field">
                        <label class="field__label">E-mail</label>
                        <input class="field__input" type="text"> 
                    </div>
            
                </div>
            </div>
                
            <div class="box-button">
                <button class="but secundary">X</button>
                <button class="but primary">Salvar</button>
            </div>

        </form>
    </div> -->

<!-- component -->
	<div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
		<form action="" @submit.prevent="onSubmit">
			<div class="-mx-3 md:flex mb-6">
				<div class="md:w-1/5 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2">
						Logo
					</label>
					<input type="file"  class="py-3 pr-0 mb-3 appearance-none"  />
					<p class="text-red text-xs italic">Please fill out this field.</p>
				</div>

				<div class="md:w-2/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
						Empresa
					</label>
					<input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Nome da empresa">
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>

				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
						CNPJ
					</label>
					<input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="CNPJ">
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>

				<div class="md:w-1/3 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
						Cidade
					</label>
					<input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="Cidade">
					<!-- <p class="text-red text-xs italic">Please fill out this field.</p> -->
				</div>
				
				<div class="md:w-1/2 px-3 mb-6 md:mb-0">
					<label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" >
						EMAIL
					</label>
					<input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3"  type="text" placeholder="e-mail">
				</div>
				
			</div>

			<div class="mt-4">
				<button type="submit" class="mr-4 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none inline-block  px-5 py-2">
					salvar
				</button>
				<button class=" border-red-500 border text-red-500 rounded transition duration-300 hover:bg-red-700 hover:text-white focus:outline-none">
					<router-link class="inline-block  px-5 py-2" :to="{name: 'painel.empresas'}">Cancelar</router-link>
				</button>
			</div>
		</form>
	</div>

</template>
<script>

export default {
    props: {
        value:{
            require: false,
            type: Object,
            default: () => {
                return {
                    id: '',
                    empresa: '',
                    cnpj: '',
                   
                }
            }
        },
        
        update: {
            require: false,
            type: Boolean,
            default: false
        }
    },
    
    data(){
        return {
            company: {},
            errors: {}
        }
    },

    methods: {
        onSubmit () { 
            let action = this.update ? 'updateCompany' : 'storeCompanies'
            
            this.$store.dispatch(action, this.company)
                .then( () => {
                    this.$snotify.success('Salvo com sucesso');
                    this.$router.push({name: 'painel.empresas'})
                })
                .catch( () => {
                    this.$snotify.error('Não foi possivel salvar', 'Erro')
                })
        },
    },

    watch: {
        value: {
            imediate: true,
            handler(value){
                this.company = {...value}
            }
        }
    }

    
}
</script>
