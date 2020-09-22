<template>  
    <!-- <div class="box">

        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">empresa</a></li>
            <li><a href="#" class="active">visualizar</a></li>
        </nav>

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Empresa</button>
        </nav>

        <div class="tabs-container">
            <div class="box-but">
                
                <div class="box-but-left">
                   <button-back></button-back>
                </div>

                <div class="box-but-right">
                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                    </button>

                    <button class="but printer ma-r-small" @click.prevent="edit(company.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
                    </button>

                    <button class="but printer"  @click.prevent="confirmDelete(company)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#trash"></use>
                        </svg>
                    </button>

                </div>
            </div>
    
        </div>

        <div class="box-form view-form">
            <h2 class="box-form__title">Dados da empresa</h2>
            <div class="box-field">
                 <div class="field">
                    <label class="field__label">empresa</label>
                    <input class="field__input" type="text" placeholder="" v-model="company.empresa" disabled /> 
                </div>

                <div class="field">
                    <label class="field__label">CNPJ</label>
                    <input class="field__input" type="text" placeholder="" v-model="company.cnpj" disabled /> 
                </div>

                <div class="field">
                    <label class="field__label">Inscrição Estadual</label>
                    <input class="field__input" type="text" placeholder="" disabled /> 
                </div>
                
            </div>

            <div class="box-field">
                <div class="field">
                    <label class="field__label">CEP</label>
                    <input class="field__input" type="text" placeholder="" disabled /> 
                </div>

                <div class="field">
                    <label class="field__label">Eestado</label>
                    <input class="field__input" type="text" placeholder="" disabled /> 
                </div>

                <div class="field">
                    <label class="field__label">Cidade</label>
                    <input class="field__input" type="text" placeholder="" disabled /> 
                </div>

                <div class="field">
                    <label class="field__label">Endereço</label>
                    <input class="field__input" type="text" placeholder="" disabled /> 
                </div>

                <div class="field">
                    <label class="field__label">Email</label>
                    <input class="field__input" type="text" placeholder="" disabled /> 
                </div>

            </div>     
        </div> 
         
        <div class="box-form view-form">
            <h2 class="box-form__title">Informções extra</h2>
            <div class="box-field">
                <div class="field">
                    <label>Observação</label>
                        <textarea cols="30" rows="3" disabled></textarea>
                </div>
                
            </div>
        </div>
    </div> -->

<div>
	<div class="mx-auto px-8 py-2">
		<nav class="text-black font-bold my-1" aria-label="Breadcrumb">
			<ol class="list-none p-0 inline-flex">
				<li class="flex items-center">
					<router-link :to="{name: 'painel.dashboard'}">Home</router-link>
					
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>

				<li class="flex items-center">
					<!-- <a href="#">Fornecedores</a> -->
					<router-link :to="{name: 'painel.empresas'}">Empresas</router-link>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>
				
				<li>
					<a href="#" class="text-gray-500" aria-current="page">Visualizar</a>
				</li>
			</ol>
		</nav>
	</div>
	<!-- component --> 
	<div class="mx-auto px-8 py-1">
		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">
				<button-back></button-back>
	
			</div>
			
			<!-- botao -->
			<div class="mt-3">
				
				<button class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
					</svg>
				</button>
				<button @click.prevent="edit(company.id)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
				</button>
				<!-- <button class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
					</svg>
				</button> -->

			</div>
			
		</div>

		<div class="bg-white border rounded mt-2 px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
			<div class="-mx-3 md:flex mb-6 text-left">
				<table class="min-w-full">
					<tbody class="bg-white">
						<tr>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Empresa</div>
								<div class="text-sm leading-5 text-gray-500">FAZENDA 7CAMPOS</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">CNPJ</div>
								<div class="text-sm leading-5 text-gray-500">000.000.000-80</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">INSCRIÇÃO ESTADUAL</div>
								<div class="text-sm leading-5 text-gray-500">711-000</div>
							</td>

							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">CEP</div>
								<div class="text-sm leading-5 text-gray-500">711-000</div>
							</td>

							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">ESTADO</div>
								<div class="text-sm leading-5 text-gray-500">TOCANTINS</div>
							</td>

							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">CIDADE</div>
								<div class="text-sm leading-5 text-gray-500">MATEIROS-TO</div>
							</td>
						</tr>
						
					</tbody>
				</table>
				
			</div>
		</div>
			
	</div>
</div>
</template>
<script>
    // import FormViewExpense from './partials/FormViewExpense'
    import ButtonBack from './share/ButtonBack'

    export default {
        name: 'ViewCompany',

        props: {
            id: {
                require: true
            }
        },

        created(){
            this.$store.dispatch('loadCompany', this.id)
                .then(response => {
                    this.company = response
                })
        },

        data(){
            return {
                company: {
                    id: '',
                    empresa: '',
                    cnpj: '',
                
                },
            }
        },

        methods: {
            edit(id){
                this.$store.dispatch('loadCompany', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.empresas.editar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },
            
            confirmDelete(company){
                this.$snotify.error(`Deseja realmente deletar a empresa: ${company.empresa}`, 'Confirme', {
                    position: "centerCenter",
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true, 
                    buttons:[
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delCompany(company.id), this.$snotify.remove(value.id)} }
                    ] 
                })
            },

            delCompany (id){
                this.$store.dispatch('delCompany', id)
                    .then( () => {
                        this.$snotify.success(`Empresa deletada com sucessu`)
                        this.$router.push({name: 'painel.empresas'})
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar empresa', 'Erro')
                    })
            },
            


        },

        
        components: {
            ButtonBack
        }

    }
</script>
