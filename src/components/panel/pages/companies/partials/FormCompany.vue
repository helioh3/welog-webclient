<template>
    <div>
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