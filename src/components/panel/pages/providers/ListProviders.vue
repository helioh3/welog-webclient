<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">forncedores</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Listagem</button>
        </nav>

        <div class="tabs-container">

            <div class="box-but">
                <div class="box-but-left">
                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="node_modules/feather-icons/dist/feather-sprite.svg#plus-circle"></use>
                        </svg>
                    </button>

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
                        <th>Foto</th>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>RG</th>
                        <th>Cidade</th>
                        <th>Observação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <img src="" class="logo-companies" alt="">
                        </td>
                        <td>Helio R Brito</td>
                        <td>98 999 999/9999 -00</td>
                        <td>Dianopolis</td>
                        <td>helioh3@gmail.com</td>
                        <td>Responsavel pela TI</td>
                    </tr>
                    
                </tbody>
            </table>
            
        </div>

    </div>
</template>