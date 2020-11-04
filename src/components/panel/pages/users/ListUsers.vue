<template>
    
    <div>
        <!-- BRANDCRUBS -->
		<div class="mx-auto px-8 py-2">
			<nav class="text-black font-bold my-1" aria-label="Breadcrumb">
				<ol class="list-none p-0 inline-flex">
					<li class="flex items-center">
						<router-link :to="{name: 'painel.dashboard'}">Home</router-link>
						<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
							<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
						</svg>
					</li>


					<li>
						<a href="#" class="text-gray-500" aria-current="page">Usuarios</a>
					</li>
				</ol>
			</nav>
		</div>

		<!-- TABS -->
		<div class="py-1">
			<TabsUserCadastro/>
		</div>

		<div class="mx-auto px-8 py-2 ">

			<div class="flex justify-between">
			<div class="mt-3 flex flex-col sm:flex-row">

				<div class="block relative mt-3 sm:mt-0">
					<span class="absolute inset-y-0 left-0 flex items-center pl-2">
						<svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
							<path d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z"></path>
						</svg>
					</span>

					<input placeholder="Pesquisar" class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-3 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
				</div>
			</div>
			<!-- botao -->
			<div class="mt-4">
				<button class=" bg-pink-600 text-pink-100 rounded transition duration-300 hover:bg-pink-500 hover:text-white focus:outline-none">
					 <router-link class="inline-block px-4 py-2" :to="{name: 'painel.usuarios.adicionar'}">Adicionar</router-link>
				</button>
			</div>

		</div>
		
		 <div class="w-full overflow-hidden rounded-lg shadow-xs mt-3">
			<div class="w-full overflow-x-auto">
				<table class="w-full whitespace-no-wrap bg-gray-200">
					<thead>
						<tr
							class="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800"
						>
							<th class="px-4 py-3">Usuário</th>
							<th class="px-4 py-3">Email</th>
							
							<th class="px-4 py-3">Telefone</th>
							<th class="px-4 py-3">Ações</th>
						</tr>
					</thead>
					<tbody
						class="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800"
					>

					<tr class="text-gray-700 dark:text-gray-400"
						v-for="user in users" :key="user.id"
					>
						<td class="px-4 py-3">
							<div class="flex items-center text-sm">
							<!-- Avatar with inset shadow -->
							<div
								class="relative hidden w-8 h-8 mr-3 rounded-full md:block"
							>
								<img
									class="object-cover w-full h-full rounded-full"
									src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
									alt=""
									loading="lazy"
								/>
								<div
									class="absolute inset-0 rounded-full shadow-inner"
									aria-hidden="true"
								></div>
							</div>
							<div>
								<p class="font-semibold">{{ user.nome }} </p>
								<p class="text-xs text-gray-600 dark:text-gray-400">
									Administrador
								</p>
							</div>
							</div>
						</td>
						<td class="px-4 py-3 text-sm">
							{{ user.email }}
						</td>
						
						<td class="px-4 py-3 text-sm">
							{{ user.telefone }}
						</td>
						<td class="px-4 py-3">
							<div class="flex space-x-4 text-sm">
							<button
								class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
								aria-label="Edit"
								@click.prevent="edit(user.id)"
							>
								<svg
								class="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								>
								<path
									d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
								></path>
								</svg>
							</button>
							<button
								class="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
								aria-label="Delete"
								@click.prevent="confirmDelete(user)"
							>
								<svg
								class="w-5 h-5"
								aria-hidden="true"
								fill="currentColor"
								viewBox="0 0 20 20"
								>
								<path
									fill-rule="evenodd"
									d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
									clip-rule="evenodd"
								></path>
								</svg>
							</button>
							</div>
						</td>
						</tr>

					</tbody>
				</table>
			</div>

			<div
                class="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800"
              >
                <span class="flex items-center col-span-3">
                  Paginas
                </span>
                <span class="col-span-2"></span>
                <!-- Pagination -->
                <span class="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Table navigation">
                    <ul class="inline-flex items-center">
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Previous"
                        >
                          <svg
                            class="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                      
                      <li>
                        <button
                          class="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          1
                        </button>
                      </li>
                      <li>
                        <button
                          class="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple"
                        >
                          2
                        </button>
                      </li>
                      <li>
                        <span class="px-3 py-1">...</span>
                      </li>
                      
                      <li>
                        <button
                          class="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                          aria-label="Next"
                        >
                          <svg
                            class="w-4 h-4 fill-current"
                            aria-hidden="true"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                              fill-rule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </li>
                    </ul>
                  </nav>
                </span>
              </div>
		 
		 
		 </div>

		</div>
		
    </div>
    
</template>

<script>

import TabsUserCadastro from '@/components/panel/pages/users/share/TabsCadastro'
export default {

    created () {
         this.loadUsers()
    },

    computed: {
        users() {
            return this.$store.state.users.items
        }
    },

    methods: {
        loadUsers() {
            this.$store.dispatch('loadUsers')
        },

        edit (id) {
            this.$store.dispatch('loadUser', id)
                .then(reponse => {
                    this.$router.push({ name: 'painel.usuarios.editar', params: {id: id}})
                })
                .catch(error => {
                    this.$snotify.error('Erro ao editar', 'Erro')
                })
        },

        confirmDelete(user){
            this.$snotify.error(`Deseja deletar o usuário de nome: ${user.nome}`, 'Confirme', {
                position: "centerCenter",
                timeout: 10000,
                showProgressBar: true,
                closeOnClick: true, 
                buttons:[
                    {text: 'Não', action: null },
                    {text: 'Sim', action: (value)=>  {this.delUser(user.id), this.$snotify.remove(value.id)} }
                ] 
            })
        },

        delUser (id){
            this.$store.dispatch('delUser', id)
                .then( () => {
                    this.$snotify.success(`Usuário deletado com sucesso`)
                    this.$router.push({name: 'painel.usuarios'})

                    this.loadUsers()
                })
                .catch(error => {
                    console.log(error)

                    this.$snotify.error('Erro ao deletar usuário', 'Erro')
                })
        },
	},
	components: {
		TabsUserCadastro
	}
}
</script>
