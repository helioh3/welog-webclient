<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">empresas</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Empresas</button>
            <button class="tabs__item tabs__item">Empresas</button>
        </nav>

        <div class="tabs-container">

            <div class="box-but">
                <div class="box-but-left">
                    <button class="but primary">Adicionar</button>

                </div>

                <div class="box-but-right">

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

            <table class="table-data">
                <thead>
                    <tr>
                        <th>logo</th>
                        <th>Nome</th>
                        <th>CNPJ</th>
                        <th>Cidade</th>
                        <th>E-mail</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="" class="logo-companies" alt="">
                        </td>
                        <td>Sao Sebastiao Energia</td>
                        <td>98 999 999/9999 -00</td>
                        <td>Dianopolis</td>
                        <td>saosebastiao@gmail.com</td>
                    </tr>
                    
                </tbody>
            </table>
            
        </div>

    </div>
</template>