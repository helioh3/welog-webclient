<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="providers.html">fornecedores</a></li>
            <li><a href="#" class="active">visualizar</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Fornecedor</button>
            <!-- <button class="tabs__item">Produtos</button> -->
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

                    <button class="but printer ma-r-small" @click.prevent="edit(provider.id)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                        </svg>
                    </button>

                    <button class="but printer" @click.prevent="confirmDelete(provider)">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
                        </svg>
                    </button>
                </div>

            </div>

                <!-- //CADASTRO PESSOA FISICA -->
            <div class="box-form view-form">
                <h2 class="box-form__title">Dados de Pessoa Fisica</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Logo ou Foto</label>
                        <input class="field__input" type="file" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">Nome</label>
                        <input class="field__input" type="text" v-model="provider.nome" disabled> 
                    </div>
                    <div class="field">
                        <label class="field__label">CPF</label>
                        <input class="field__input" type="text" v-model="provider.cpf" disabled> 
                    </div>
                    <div class="field">
                        <label class="field__label">RG</label>
                        <input class="field__input" type="text" disabled> 
                    </div>
                    <div class="field">
                        <label class="field__label">Sexo</label>
                        <div class="field__select">
                            <select disabled>
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select> 
                        </div>
                    </div>

                </div>
            </div>

                <!-- //CADASTRO PESSOA JURIDICA -->
            <div class="box-form view-form">
                <h2 class="box-form__title">Dados Pessoa Jurídica</h2>
                <div class="box-field">
                    
                    <div class="field">
                        <label class="field__label">Fantasia</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">CNPJ</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">Inscrição Estadual</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">Atuação</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                </div>
            </div>

            <!-- DADOS GERAIS -->
            <div class="box-form view-form">
                <h2 class="box-form__title">Dados Gerais</h2> disabled
                <div class="box-field">
                    
                    <div class="field">
                        <label class="field__label">CEP</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">Estado</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">Cidade</label>
                        <div class="field__select">
                            <select disabled>
                                <option value="">Dianopolis</option>
                                <option value="">Bahia</option>
                                <option value="">Selecione</option>
                            </select> 
                        </div>
                    </div>

                    <div class="field">
                        <label class="field__label">Telefone</label>
                        <input class="field__input" type="text" disabled> 
                    </div>

                    <div class="field">
                        <label class="field__label">Endereço</label>
                        <input class="field__input" type="text" disabled> 
                    </div>
                    <div class="field">
                        <label class="field__label">E-mail</label>
                        <input class="field__input" type="text" disabled> 
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
            
        </div>

    </div>
</template>

<script>
    import ButtonBack from './share/ButtonBack'

    export default {
        props: {
            id: {
                require: true
            }
        },

        created(){
            this.$store.dispatch('loadProvider', this.id)
                .then(response => {
                    this.provider = response
                })
        },

        data(){
            return {
                provider: {
                    id: '',
                    nome: '',
                    cpf: '',
                },
            }
        },

        methods: {
            edit(id){
                this.$store.dispatch('loadProvider', id)
                    .then(response => {
                        console.log(response)
                        this.$router.push({name: 'painel.fornecedores.editar', params:{id: id}})
                    })
                    .catch(error => {
                        this.$snotify.error('Houve um erro ao editar', 'Erro')
                    })
            },

            confirmDelete(provider){
                this.$snotify.error(`Deseja deletar o fornecedor nome: ${provider.nome}`, 'Confirme', {
                    position: "centerCenter",
                    timeout: 10000,
                    showProgressBar: true,
                    closeOnClick: true, 
                    buttons:[
                        {text: 'Não', action: null },
                        {text: 'Sim', action: (value)=>  {this.delProvider(provider.id), this.$snotify.remove(value.id)} }
                    ] 
                })
            },

            delProvider (id){
                this.$store.dispatch('delProvider', id)
                    .then( () => {
                        this.$snotify.success(`Fornecedor deletado com sucessu`)
                        this.$router.push({name: 'painel.fornecedores'})
                    })
                    .catch(error => {
                        console.log(error)

                        this.$snotify.error('Erro ao deletar fornecedor', 'Erro')
                    })
            },

        },

        components: {
            ButtonBack
        }
        
    }
</script>