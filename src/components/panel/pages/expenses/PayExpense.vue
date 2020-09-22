<template>  
    <!-- <div class="box">
        

        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">despesa</a></li>
            <li><a href="#" class="active">pagamento</a></li>
        </nav>

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Despesa</button>
            
        </nav>

        <div class="tabs-container">
            <div class="box-but">
                
                <div class="box-but-left">
                   <button-back></button-back>

                </div>

                <div class="box-but-right">
                    <button class="but printer ma-r-small"  @click.prevent="view(expense.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#eye"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
                        
                    </button>

                    <button class="but printer ma-r-small" @click.prevent="edit(expense.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
                    </button>

                </div>
            </div>

            <div class="box-form view-form">
                <h2 class="box-form__title">Dados da despesa</h2>
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Codigo</label>
                        <p class="field__text">{{ expense.id }}</p>
                    </div>

                    <div class="field">
                        <label class="field__label">N. Nota Fiscal</label>
                        <p class="field__text">{{ expense.numero }}</p> 
                    </div>
            
                    <div class="field">
                        <label class="field__label">Fornecedor</label>
                        <p class="field__text">SAO SEBASTIÃO ENERGIA</p>
                    </div>
                    
                    <div class="field">
                        <label class="field__label">Empresa de Origem</label>
                        <p class="field__text">HELIO BRITO</p>
                    </div>

                
                    
                </div>

                <div class="box-field ">

                    <div class="field">
                        <label class="field__label">Categoria</label>
                        <p class="field__text">COMBUSTIVEL</p>
                       
                    </div>
                
                
                
                    <div class="field">
                        <label class="field__label">Data de cadastro</label>
                        <p class="field__text">99/99/9999</p>
                    </div>

                    <div class="field">
                        <label class="field__label">Conta Bancária</label>
                        <p class="field__text">BANCO DO BRASIL</p>
                    </div>

                    <div class="field">
                    
                    </div>
                    
                </div>     
            </div> 

            <form-pay :value="expense"></form-pay>

            <div class="box-form view-form">
                <h2 class="box-form__title">Informções extra</h2>
                <div class="box-field">
                    <div class="field">
                        <label>Observação</label>
                            <textarea cols="30" rows="3" disabled></textarea>
                    </div>
                    
                </div>
            </div>    


        </div>
        
    </div> -->
<!-- component -->
<div>
	<div class="mx-auto px-8 py-2">
		<nav class="text-black font-bold my-1" aria-label="Breadcrumb">
			<ol class="list-none p-0 inline-flex">
				<li class="flex items-center">
					<a href="#">Home</a>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>

				<li class="flex items-center">
					<a href="#">Fornecedores</a>
					<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
						<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
					</svg>
				</li>
				
				<li>
					<a href="#" class="text-gray-500" aria-current="page">Vesualizar</a>
				</li>
			</ol>
		</nav>
	</div>

	<div class="mx-auto px-8 py-1">

		<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">
				<!-- <button class="px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">Voltar</button> -->
			<button-back></button-back>	
			</div>
			
			<!-- botao -->
			<div class="mt-3">
				
				<button @click.prevent="view(expense.id)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#eye"></use>
					</svg>
				</button>
				<button class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#printer"></use>
                        </svg>
				</button>
				<button @click.prevent="edit(expense.id)" class="mr-1 px-4 py-2  border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-blue-700 hover:text-white focus:outline-none">
					<svg class="feather">
						<use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
					</svg>
				</button>

			</div>
			
		</div>

		<div class="bg-white border rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
			<div class="-mx-3 md:flex mb-6 text-left">
				<table class="min-w-full">
					<tbody class="bg-white">
						<tr>
							
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Codigo</div>
								<div class="text-sm leading-5 text-gray-500"> {{ expense.id }}</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Numero</div>
								<div class="text-sm leading-5 text-gray-500">{{ expense.numero }}</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Empresa</div>
								<div class="text-sm leading-5 text-gray-500">Sao Sebastião Energia Ltda</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Fornecedor</div>
								<div class="text-sm leading-5 text-gray-500">Web dev</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Categoria</div>
								<div class="text-sm leading-5 text-gray-500">Web dev</div>
							</td>	
						</tr>
						
						<tr>
							
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Data</div>
								<div class="text-sm leading-5 text-gray-500">Web dev</div>
							</td>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Conta Bancária</div>
								<div class="text-sm leading-5 text-gray-500">Caixa Economica Federal</div>
							</td>			
						</tr> 

					</tbody>
				</table>
				
			</div>
			
			<div class="-mx-3 md:flex mb-12">
				<form-pay :value="expense"></form-pay>	
			</div>

			<div class="-mx-3 md:flex mb-6">
				
				
				<table>
					<tbody>
						<tr>
							<td class="px-6 py-4 whitespace-no-wrap">
								<div class="text-sm leading-5 text-gray-900">Observação</div>
								<div class="text-sm leading-5 text-gray-500">T adicionado para teste de observacao em despesa</div>
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
    
    import FormPay from './partials/FormPay'
    import ButtonBack from '../../share/ButtonBack'

    export default {
        name: 'PayExpense',

        props: {
            id: {
                require: true
            }
        },

        created(){
            this.$store.dispatch('loadExpense', this.id)
                .then(response => {
                    this.expense = response
                })
        },

        data(){
            return {
                expense: {
                    id: '',
                    numero: '',
                    valor: '',
                
                }
            }
        },

        computed: {
            categories(){
                return this.$store.state.categories.items.data
            }
        },

        methods: {
            edit(id){
                this.$store.dispatch('loadExpense', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.despesas.editar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            view(id){
                this.$store.dispatch('loadExpense', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.despesas.visualizar', params:{id: id}})
                    })
                    .catch(error => {
                        
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            
        },

       components: {
           FormPay,
           ButtonBack
          
        }

    }
</script>
