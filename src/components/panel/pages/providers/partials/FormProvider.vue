<template>
    <div>
        <!-- //CADASTRO PESSOA FISICA -->
        <form  @submit.prevent="onSubmit">
            <div class="box-form">
                <h2 class="box-form__title">Dados de Pessoa Fisica</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Logo ou Foto</label>
                        <input class="field__input" type="file"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Nome</label>
                        <input class="field__input" type="text" v-model="provider.nome"> 
                    </div>
                    <div class="field">
                        <label class="field__label">CPF</label>
                        <input class="field__input" type="text" v-model="provider.cpf"> 
                    </div>
                    <div class="field">
                        <label class="field__label">RG</label>
                        <input class="field__input" type="text"> 
                    </div>
                    <div class="field">
                        <label class="field__label">Sexo</label>
                        <div class="field__select">
                            <select>
                                <option value="">Masculino</option>
                                <option value="">Feminino</option>
                            </select> 
                        </div>
                    </div>

                </div>
            </div>

            <!-- //CADASTRO PESSOA JURIDICA -->
            <div class="box-form">
                <h2 class="box-form__title">Dados Pessoa Jurídica</h2>
                <div class="box-field">
                    
                    <div class="field">
                        <label class="field__label">Fantasia</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">CNPJ</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Inscrição Estadual</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Atuação</label>
                        <input class="field__input" type="text"> 
                    </div>

                </div>
            </div>

            <!-- DADOS GERAIS -->
            <div class="box-form">
                <h2 class="box-form__title">Dados Gerais</h2>
                <div class="box-field">
                    
                    <div class="field">
                        <label class="field__label">CEP</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Estado</label>
                        <input class="field__input" type="text"> 
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
                        <label class="field__label">Telefone</label>
                        <input class="field__input" type="text"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Endereço</label>
                        <input class="field__input" type="text"> 
                    </div>
                    <div class="field">
                        <label class="field__label">E-mail</label>
                        <input class="field__input" type="text"> 
                    </div>

                </div>
            </div>

            <div class="box-form">
                <h2 class="box-form__title">Informções extra</h2>
                <div class="box-field">
                    <div class="field">
                        <label>Observação</label>
                            <textarea cols="30" rows="3"></textarea>
                    </div>
                    
                </div>
            </div>

            <div class="box-button">
                <button class="but secundary">Cancelar</button>
                <button class="but primary">Salvar</button>
            </div>

        </form>
        
        
    </div>
</template>
<script>
    export default {
        name: 'FormProvider',

        props: {
            value: {
                require: false,
                type: Object,
                default: () => {
                    return {
                        id: '',
                        nome: '',
                        cpf: ''
                    }
                }
            },

            update: {
                require: false,
                type: Boolean,
                default:false
            }

        },

        data(){
            return {
                provider: {},
                errors: {}
            }
        },

        methods: {
            onSubmit () { 
                let action = this.update ? 'updateProvider' : 'storeProviders'
                
                this.$store.dispatch(action, this.provider)
                    .then( () => {
                        this.$snotify.success('Fornecedor salvo com sucesso');
                        this.$router.push({name: 'painel.fornecedores'})
                    })
                    .catch( ()=> {
                        this.$snotify.error('Não foi possivel salvar', 'Erro')
                    })
            },
        },

        watch: {
            value: {
                imediate: true,
                handler(value){
                    this.provider = {...value}
                }
            }
        }
        
    }
</script>