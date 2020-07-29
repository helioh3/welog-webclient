<template>
    <form @submit.prevent="onSubmit">
        <div class="box-form-user">
            <h2 class="box-form__title">Dados do usuário</h2>
            <div class="box-field-user">
                <div class="field">
                    <label class="field__label">foto</label>
                    <input class="field__input" type="file"> 
                </div>

                <div class="field">
                    <label class="field__label">Perfil</label>
                    <div class="field__select">
                        <select>
                            <option value="">Administrador</option>
                            <option value="">Usuários</option>
                        </select> 
                    </div>
                </div>
        
                <div class="field">
                    <label class="field__label">Nome*</label>
                    <input class="field__input" type="text" v-model="user.nome"> 
                </div>

                <div class="field">
                    <label class="field__label">Sobrenome*</label>
                    <input class="field__input" type="text"> 
                </div>

                <div class="field">
                    <label class="field__label">Nascimento</label>
                    <input class="field__input" type="date"> 
                </div>

                <div class="field">
                    <label class="field__label">Telefone</label>
                    <input class="field__input" type="text"> 
                </div>
        
                <div class="field">
                    <label class="field__label">E-mail*</label>
                    <input class="field__input" type="text" v-model="user.email"> 
                </div>

                <div class="field">
                    <label class="field__label">Senha* (6 caracters)</label>
                    <input class="field__input" type="password" v-model="user.password"> 
                </div>

        
            </div>
        </div>

        <div class="box-button">
            
            <router-link class="but secundary" :to="{name: 'painel.usuarios'}">X</router-link>
            <button class="but primary">Salvar</button>
        </div>

    </form>
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
                    nome: '',
                    email: '',
                    password: '',
                }
            }
        },

         update: {
            require: false,
            type: Boolean,
            default: false
        }
    },
    
    data() {
        return {
            user: {},
            errros: {}
        }
    },

    methods: {
        onSubmit () { 
            let action = this.update ? 'updateUser' : 'storeUsers'
            
            this.$store.dispatch(action, this.user)
                .then( () => {
                    this.$snotify.success('Salvo com sucesso');
                    this.$router.push({name: 'painel.usuarios'})
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
                this.user = {...value}
            }
        }
    }
}
</script>