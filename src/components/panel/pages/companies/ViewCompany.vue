<template>  
    <div class="box">

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