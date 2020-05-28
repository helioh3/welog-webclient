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

                <div class="box-but-left"></div>

                <div class="box-but-right">

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="node_modules/feather-icons/dist/feather-sprite.svg#printer"></use>
                        </svg>
                    </button>

                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="node_modules/feather-icons/dist/feather-sprite.svg#edit-2"></use>
                        </svg>
                    </button>

                    <button class="but printer" disabled>
                        <svg class="feather">
                            <use xlink:href="node_modules/feather-icons/dist/feather-sprite.svg#trash-2"></use>
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
                        <input class="field__input" type="text" disabled> 
                    </div>
                    <div class="field">
                        <label class="field__label">CPF</label>
                        <input class="field__input" type="text" disabled> 
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