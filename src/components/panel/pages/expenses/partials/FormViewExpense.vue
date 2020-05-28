<template>
   <div>
       <div class="box-form view-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            
            <div class="box-field">
                <div class="field">
                    <label class="field__label">N. Nota Fiscal</label>
                    <input class="field__input" type="text" placeholder="digite alguma coisa" disabled> 
                </div>
        
                <div class="field">
                    <label class="field__label">Fornecedor</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                        </select> 
                    </div>
                </div>
        
                <div class="field">
                    <label class="field__label">Categoria</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                            <option value="">Selecione</option>
                        </select> 
                    </div>
                </div>
        
                <div class="field">
                    <label class="field__label">Empresa de Origem</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">testestestestestestestestest</option>
                            <option value="">Selecione</option>
                        </select> 
                    </div>
                </div>
            </div>
        </div> 
    
        <div class="box-form view-form">
            <h2 class="box-form__title">Dados da despesa</h2>
            
            <div class="box-field">
                <div class="field">
                    <label class="field__label">Valor Total(R$)</label>
                    <input class="field__input" type="number" disabled> 
                </div>

                <div class="field">
                    <label class="field__label">Data de Competência</label>
                    <input class="field__input" type="date" disabled> 
                </div>

                <div class="field">
                    <label class="field__label">Parcelamento</label>
                    <div class="field__select">
                        <select disabled>
                            <option value="">Selecione</option>
                            <option value="">1x</option>
                            <option value="">2x</option>
                        </select> 
                    </div>
                </div>

                <div class="field">
                    <label class="field__label">Conta Bancária</label>
                    <div class="field__select">
                        <select disabled>
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
                            <th>Comprovante</th>
                            <th>Valor(R$)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1/3</td>
                            
                            <td>
                                <div class="field">
                                    <input type="date" class="field__input" disabled> 
                                </div>
                            </td>
                            <td>
                                <div class="field">
                                    <input class="field__input" type="date" disabled> 
                                </div>
                            </td>

                            <td>
                                <button class="but printer ma-r-small">
                                    <svg class="feather">
                                        <use xlink:href="svg/feather-sprite.svg#printer"></use>
                                    </svg>
                                    
                                </button>
                            </td>

                            <td>R$ 200,00</td>
                            <td>
                                <button class="but but-icon" disabled>
                                    <svg class="feather menu-user__icon">
                                        <use xlink:href="svg/feather-sprite.svg#thumbs-up"/>
                                    </svg>
                                </button> 
                            </td>
                        </tr>
                    </tbody>
                </table>
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
export default {
    
}
</script>