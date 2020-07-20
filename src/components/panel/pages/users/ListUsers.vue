<template>
    <div class="box">
        <nav class="breadcrumb">
            <li><a href="index.html">inicio</a></li>
            <li><a href="#" class="active">usuarios</a></li>
        </nav>  

        <nav class="tabs">
            <button class="tabs__item tabs__item--active">Usuários</button>
        </nav>

        <div class="tabs-container">
            <div class="box-but">
                <div class="box-but-left">
                    <button class="but printer ma-r-small">
                        <svg class="feather">
                            <use xlink:href="@/assets/svg/feather-sprite.svg#plus-circle"></use>
                        </svg>
                    </button>

                </div>

                <div class="box-but-right"></div>

            </div>

            <div class="box-users">
                <li class="user">
                    <div class="al-left">
                        <div class="user__date">
                            <div class="user__date--month">26</div>
                            <div class="user__date--day">Nov</div>
                        </div>

                        <img src="@/assets/images/natan.jpg" class="user__photo" alt="">

                        <span class="user__name">Natanael <br> Gomes</span>
                        <span class="user__perfil">Gerente Administrativo</span>
                        <p class="user__desc"></p>
                    </div>
                    <div class="al-right">
                        <button class="but printer ma-r-small">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                            </svg>
                        </button>

                        <button class="but printer">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
                            </svg>
                        </button>
                    </div>
                </li>

                <li class="user">
                    <div class="al-left">
                        <div class="user__date">
                            <div class="user__date--month">11</div>
                            <div class="user__date--day">Mai</div>
                        </div>

                        <img src="@/assets/images/helio.jpg" class="user__photo" alt="">

                        <span class="user__name">Helio <br> Brito</span>
                        <span class="user__perfil">Tecnico em Informática</span>
                        <p class="user__desc"></p>
                    </div>
                    <div class="al-right">
                        <button class="but printer ma-r-small">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#edit-2"></use>
                            </svg>
                        </button>

                        <button class="but printer">
                            <svg class="feather">
                                <use xlink:href="@/assets/svg/feather-sprite.svg#trash-2"></use>
                            </svg>
                        </button>
                    </div>
                </li>
                
            </div>
        </div>

    </div>
</template>