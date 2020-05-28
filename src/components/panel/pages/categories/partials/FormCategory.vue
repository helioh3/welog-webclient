<template>
    <form @submit.prevent="onSubmit">
        <div class="box-form-user">
            <h2 class="box-form__title">Dados da categoria</h2>
            
            <div class="box-field-user">
                <div class="field">
                    <label class="field__label">Nome da categoria*</label>
                    <input type="text" :class="['field__input', {'has-error': errors.nome}]" v-model="category.nome" > 
                    
                </div>
                <div v-if="errors.nome">{{errors.nome[0]}}</div>

            </div>
        </div>
        
        <div class="box-button">
            <!-- <button class="but secundary">X</button> -->

            <router-link class="but secundary" :to="{name: 'painel.categorias'}">X</router-link>
              
            <button type="submit" class="but primary">Salvar</button>
        </div>
    </form>
</template>

<script>

export default {
    props: {
        category: {
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

                    console.log(error.response.data.errors)
                    this.errors = error.response.data.errors
                })
        }
    }


}
</script>

<style scoped> 
    .has-error{
        border: 2px solid red;
        
    }

</style>