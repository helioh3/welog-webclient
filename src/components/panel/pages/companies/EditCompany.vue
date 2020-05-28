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

            <div class="box-form">
                <h2 class="box-form__title">Dados da empresa</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">logo</label>
                        <input class="field__input" type="file"> 
                    </div>
            
                    <div class="field">
                        <label class="field__label">Nome (Empresa)</label>
                        <input class="field__input" type="text"> 
                    </div>
            
            
                    <div class="field">
                        <label class="field__label">CNPJ</label>
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
                        <label class="field__label">E-mail</label>
                        <input class="field__input" type="text"> 
                    </div>
            
                </div>
            </div>
            
            <div class="box-button">
                <button class="but secundary">X</button>
                <button class="but primary">Atualizar</button>
            </div>

            
        </div>

    </div>
</template>