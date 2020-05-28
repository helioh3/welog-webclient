<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="providers.html">fornecedores</a></li>
            <li><a href="#" class="active">novo</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Novo</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>
        <div class="tabs-container">

                <!-- //CADASTRO PESSOA FISICA -->
            <div class="box-form">
                <h2 class="box-form__title">Dados de Pessoa Fisica</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Logo ou Foto</label>
                        <input class="field__input" type="file"> 
                    </div>

                    <div class="field">
                        <label class="field__label">Nome</label>
                        <input class="field__input" type="text"> 
                    </div>
                    <div class="field">
                        <label class="field__label">CPF</label>
                        <input class="field__input" type="text"> 
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

            
        </div>

    </div>
</template>