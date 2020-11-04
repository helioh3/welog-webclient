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

					<li class="flex items-center">
						<router-link :to="{name: 'painel.usuarios'}">Usuarios</router-link>
						<svg class="fill-current w-3 h-3 mx-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
							<path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"/>
						</svg>
					</li>
					

					<li>
						<a href="#" class="text-gray-500" aria-current="page">Editar</a>
					</li>
				</ol>
			</nav>
		</div>
		<!-- TABS -->
		<div class="py-1">
			
		</div>

		<div class="mx-auto px-8 py-2">

			<form-user :value="user"></form-user>


		</div>
	</div>
</template>
<script>
    import FormUser from '../users/partials/FormUser'

    export default {
        props: {
            id: {
                require: true
            }
        },

        created() {
            this.$store.dispatch('loadUser', this.id)
                .then(response => {
                    this.user = response
                })
                .catch(error => {
                    console.log(error)
                })
        },

        data(){
            return {
                user: {
                    id: '',
                    nome: '',
                    email: '',
                    password: '',
                }
            }
        },

        components: {
            FormUser
        }
    }
</script>
