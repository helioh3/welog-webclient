<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="#">inicio</a></li>
            <li><a href="#">despesas</a></li>
            <li><a href="#" class="active">nova</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Despesas</button>
            <!-- <button class="tabs__item">Produtos</button> -->
        </nav>
        <div class="tabs-container">

            <div class="box-form">
                <h2 class="box-form__title">Dados da despesa</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Anexar NFe</label>
                        <input class="field__input" type="file"> 
                    </div>

                    <div class="field">
                        <label class="field__label">N. Nota Fiscal</label>
                        <input class="field__input" type="text" placeholder="digite alguma coisa"> 
                    </div>
            
                    <div class="field">
                        <label class="field__label">Fornecedor</label>
                        <div class="field__select">
                            <select>
                                <option value="">Selecione</option>
                                <option value="">Selecione</option>
                                <option value="">Selecione</option>
                            </select> 
                        </div>
                    </div>
            
                    <div class="field">
                        <label class="field__label">Categoria</label>
                        <div class="field__select">
                            <select>
                                <option value="">Selecione</option>
                                <option value="">Selecione</option>
                                <option value="">Selecione</option>
                            </select> 
                        </div>
                    </div>
            
                    <div class="field">
                        <label class="field__label">Empresa de Origem</label>
                        <div class="field__select">
                            <select>
                                <option value="">Selecione</option>
                                <option value="">testestestestestestestestest</option>
                                <option value="">Selecione</option>
                            </select> 
                        </div>
                    </div>
                </div>
            </div>

            <div class="box-form">
                <h2 class="box-form__title">Dados da despesa</h2>
                
                <div class="box-field">
                    <div class="field">
                        <label class="field__label">Valor Total(R$)</label>
                        <input class="field__input" type="number" placeholder="digite alguma coisa"> 
                    </div>
            
                    <div class="field">
                        <label class="field__label">Data de Competência</label>
                        <input class="field__input" type="date"> 
                    </div>
            
                    <div class="field">
                        <label class="field__label">Parcelamento</label>
                        <div class="field__select">
                            <select>
                                <option value="">Selecione</option>
                                <option value="">1x</option>
                                <option value="">2x</option>
                            </select> 
                        </div>
                    </div>
            
                    <div class="field">
                        <label class="field__label">Conta Bancária</label>
                        <div class="field__select">
                            <select>
                                <option value="">Selecione</option>
                                <option value="">Banco do Brasil</option>
                                <option value="">Sicredi</option>
                            </select> 
                        </div>
                    </div>
                </div>

                <div class="box-table">
                    <table class="field-table">
                    <thead>
                        <tr>
                            <th>Parcela</th>
                            
                            <th>Vencimento</th>
                            <th>Data / Pagamento</th>
                            <th>Anexar</th>
                            <th>Valor(R$)</th>
                            <th></th>
                        </tr>
                        
                    </thead>
                    <tbody>
                        <tr>
                            <td>1/3</td>
                            
                            <td>
                                <div class="field">
                                    <input type="date" class="field__input"  placeholder="digite alguma coisa"> 
                                </div>
                            </td>
                            <td>
                                <div class="field">
                                    <input class="field__input" type="date" placeholder="digite alguma coisa"> 
                                </div>
                            </td>

                            <td>file.pdf</td>

                            <td>R$ 200,00</td>
                            <td>
                                <button class="but but-icon">
                                    <svg class="feather menu-user__icon active">
                                        <use xlink:href="@/assets/svg/feather-sprite.svg#thumbs-up"/>
                                    </svg>
                                </button> 
                            </td>
                        </tr>
                        
        
                    </tbody>
                </table>
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