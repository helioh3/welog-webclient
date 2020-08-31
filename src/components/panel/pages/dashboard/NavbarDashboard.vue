<template>
  <nav class="navbar">
    <div class="brand">
      <a href="#">
        <img src="@/assets/images/logo.png" class="brand__logo" alt="Welog Logo" />
      </a>
    </div>

    <ul class="menu-nav">
      <li>
        <router-link :to="{ name: 'painel.dashboard'}" class="menu-nav__item">Inicio</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'painel.despesas'}" class="menu-nav__item">Despesas</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'painel.fornecedores'}" class="menu-nav__item">Cadastros</router-link>
      </li>
      <li>
        <router-link :to="{ name: ''}" class="menu-nav__item">Relatórios</router-link>
      </li>

      <!-- <li class="menu-nav__item"></li>
            <li class="menu-nav__item"></li>
            <li class="menu-nav__item"></li>
      <li class="menu-nav__item"></li>-->
    </ul>

    <div class="menu-user">
      <li class="menu-user__item">
        <svg class="feather menu-user__icon">
          <use xlink:href="@/assets/svg/feather-sprite.svg#bell" />
        </svg>
        <!-- <span class="menu-user__notification">68</span> -->
      </li>

      <li class="menu-user__item log" @click.prevent="isOpen = !isOpen">
        <!-- <span class="menu-user__name">{{ me.nome }}</span> -->
        <img src="@/assets/images/natan.jpg" class="menu-user__photo" alt />

        <div class="menu-user__dropdawn" v-if="isOpen">
          <ul>
            <li>
              <a href="#" @click.prevent="edit(user.id)">Perfil</a>
            </li>
            <li>
              <router-link :to="{ name: 'painel.usuarios'}" class="menu-nav__item">Configurações</router-link>
            </li>
            <li>
              <a href @click.prevent="logout">Sair</a>
            </li>
          </ul>
        </div>
      </li>

      <!-- (<a @click.prevent="logout">sair</a>) -->
    </div>
  </nav>
</template>

<script>
export default {
  created() {
    this.loadUsers();
  },

  data() {
    return {
      isOpen: false,
    };
  },

  computed: {
    me() {
      return this.$store.state.auth.me;
    },
  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ name: "login" });
    },

    loadUsers() {
      this.$store.dispatch("loadUsers");
    },
  },
};
</script>