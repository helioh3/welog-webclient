<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="companies.html">empresa</a></li>
            <li><a href="#" class="active">editar</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Editar</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>

        <div class="tabs-container">
            <form-company 
                :value="company"
                :update="true"
            >
            </form-company>
            
        </div>

    </div>
</template>
<script>
    import FormCompany from './partials/FormCompany'

    export default {

        props: {
            id: {
                require: true
            }
        },

        created () {
            this.$store.dispatch('loadCompany', this.id)
                .then(response => {
                    this.company = response
                   
                })
                .catch(error => {
                    console.log(error)
                })

        },

        data () {
            return {
                company: {
                    id: '',
                    empresa: '',
                    cnpj: ''
                }
            }
        },
            
        components: {
            FormCompany
        }
    }
</script>