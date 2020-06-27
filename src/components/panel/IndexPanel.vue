<template>
    <div>
        <preloader-panel></preloader-panel>
        
        <div class="container">  
            <header class="admin-header">
                <nav class="navbar">
                    
                    <div class="brand">
                        <a href="#"><img  src="@/assets/images/logo.png" class="brand__logo"  alt="Welog Logo"></a>
                    </div>
                    
                    <ul class="menu-nav">
                        <li><router-link :to="{ name: 'painel.dashboard'}" class="menu-nav__item">Inicio</router-link></li>
                        <li><router-link :to="{ name: 'painel.despesas'}" class="menu-nav__item">Financeiro</router-link></li>
                        <li><router-link :to="{ name: 'painel.fornecedores'}" class="menu-nav__item">Cadastros</router-link></li>
                        <li><router-link :to="{ name: 'painel.usuarios'}" class="menu-nav__item">Relatórios</router-link></li>                      
                    </ul>

                    <div class="menu-user">

                        <li class="menu-user__item">
                            <svg class="feather menu-user__icon">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#bell"/>
                            </svg>
                            <span class="menu-user__notification">68</span>
                        </li>

                        <li class="menu-user__item">
                            <span class="menu-user__name">Natanael</span>
                            <img src="@/assets/images/natan.jpg" class="menu-user__photo" alt="">
                            
                        </li>
            
                    </div>

                </nav>
            </header>

            <main class="admin-main">
                
               
                <router-view></router-view>
            </main>

            
        <footer class="admin-footer">
            <div class="menu-footer">      
                <img src="images/logo-footer.png" class="menu-footer__logo-footer" alt="">
                <li><a href="#" class="menu-footer__item">sobre</a></li>
                <li><a href="#" class="menu-footer__item">ajuda</a></li>
            </div>
        </footer>


        </div>
        

    </div>
</template>

<script>
    export default{
       
    }
   
    
</script>

<style lang="">
    
</style>