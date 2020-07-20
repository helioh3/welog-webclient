<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="users.html" >usuarios</a></li>
            <li><a href="index.html" class="active">novo</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Usuários</button>
        </nav>

        <div class="tabs-container">
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
                        <input class="field__input" type="text"> 
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
                        <input class="field__input" type="text"> 
                    </div>


                    <div class="field">
                        <label class="field__label">Senha* (6 caracters)</label>
                        <input class="field__input" type="password"> 
                    </div>
        
            
                </div>
            </div>
            
            <div class="box-button">
                <button class="but secundary">X</button>
                <button class="but primary">Salvar</button>
            </div>
            
            
        </div>

    </div>
</template>